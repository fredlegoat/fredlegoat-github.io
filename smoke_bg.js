// Animated Smoke Background (Canvas)
// Optimized with Perlin Noise and Low-Res Rendering

// Global target color for interpolation (default orange/red)
let targetR = 255;
let targetG = 69;
let targetB = 0;

// Exposed function to update smoke color from other scripts
window.updateSmokeColor = function (hex) {
    if (!hex) return;
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
        const r = parseInt(result[1], 16);
        const g = parseInt(result[2], 16);
        const b = parseInt(result[3], 16);

        if (typeof gsap !== 'undefined') {
            gsap.to({ r: targetR, g: targetG, b: targetB }, {
                r: r,
                g: g,
                b: b,
                duration: 2,
                ease: "sine.inOut",
                onUpdate: function () {
                    targetR = this.targets()[0].r;
                    targetG = this.targets()[0].g;
                    targetB = this.targets()[0].b;
                }
            });
        } else {
            targetR = r;
            targetG = g;
            targetB = b;
        }
    }
};

function startSmokeCanvas() {
    const canvas = document.getElementById('smokeCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Performance: Render at low resolution and let CSS upscale/blur it
    const scale = 8;
    let width, height;

    function resize() {
        width = canvas.width = Math.ceil(window.innerWidth / scale);
        height = canvas.height = Math.ceil(window.innerHeight / scale);
    }
    resize();
    window.addEventListener('resize', resize);

    // Perlin noise implementation
    const permutation = [];
    for (let i = 0; i < 256; i++) permutation[i] = Math.floor(Math.random() * 256);
    const p = [...permutation, ...permutation];

    const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (t, a, b) => a + t * (b - a);
    const grad = (hash, x, y) => {
        const h = hash & 15;
        const u = h < 8 ? x : y;
        const v = h < 4 ? y : (h === 12 || h === 14 ? x : 0);
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    };

    const perlin = (x, y) => {
        const X = Math.floor(x) & 255;
        const Y = Math.floor(y) & 255;
        x -= Math.floor(x);
        y -= Math.floor(y);
        const u = fade(x);
        const v = fade(y);
        const a = p[X] + Y;
        const aa = p[a], ab = p[a + 1];
        const bv = p[X + 1] + Y;
        const ba = p[bv], bb = p[bv + 1];
        return lerp(v,
            lerp(u, grad(p[aa], x, y), grad(p[ba], x - 1, y)),
            lerp(u, grad(p[ab], x, y - 1), grad(p[bb], x - 1, y - 1))
        );
    };

    // PERF: Reduced to 2 octaves (was 3-4) — ambient smoke looks identical
    const fractalNoise = (x, y) => {
        const v1 = perlin(x, y);
        const v2 = perlin(x * 2, y * 2) * 0.5;
        return (v1 + v2) / 1.5;
    };

    let time = 0;

    function drawSmoke() {
        const imageData = ctx.createImageData(width, height);
        const data = imageData.data;

        // PERF: 3 noise layers (was 5) — sufficient for ambient effect
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const sx = x * scale;
                const sy = y * scale;

                const flow1 = fractalNoise(sx * 0.0008 + time * 0.03, sy * 0.0008 + time * 0.025);
                const flow2 = fractalNoise(sx * 0.001 - time * 0.035, sy * 0.001 + time * 0.028);
                const flow3 = fractalNoise(sx * 0.0012 + time * 0.022, sy * 0.0009 - time * 0.032);

                const combined = flow1 * 0.4 + flow2 * 0.35 + flow3 * 0.25;
                const intensity = Math.max(0, Math.min(1, combined + 0.3));
                const variation = Math.sin(time * 0.015 + sx * 0.01 + sy * 0.008) * 0.35 + 0.75;

                const r = Math.floor(intensity * targetR * variation);
                const g = Math.floor(intensity * targetG * variation);
                const b = Math.floor(intensity * targetB * variation);
                const alpha = Math.floor(intensity * 180);

                const idx = (y * width + x) * 4;
                data[idx] = r;
                data[idx + 1] = g;
                data[idx + 2] = b;
                data[idx + 3] = alpha;
            }
        }

        ctx.putImageData(imageData, 0, 0);
    }

    // PERF: Target ~15fps instead of 60fps — ambient smoke doesn't need 60fps
    const TARGET_FPS = 15;
    const FRAME_INTERVAL = 1000 / TARGET_FPS;
    let lastFrameTime = 0;
    let isPageVisible = true;

    // PERF: Pause entirely when the tab is not visible (huge battery saver)
    document.addEventListener('visibilitychange', () => {
        isPageVisible = !document.hidden;
    });

    function animate(timestamp) {
        requestAnimationFrame(animate);

        // Skip if page is hidden or frame is too early
        if (!isPageVisible) return;
        if (timestamp - lastFrameTime < FRAME_INTERVAL) return;

        lastFrameTime = timestamp;

        // Larger time step to compensate for lower fps (same visual speed)
        time += 0.32;

        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, width, height);

        ctx.globalCompositeOperation = 'lighter';
        drawSmoke();
        ctx.globalCompositeOperation = 'source-over';
    }

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    requestAnimationFrame(animate);
}

// Start the smoke
document.addEventListener('DOMContentLoaded', startSmokeCanvas);
