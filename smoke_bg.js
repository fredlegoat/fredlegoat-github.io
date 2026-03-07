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

        // Smoothly transition colors using GSAP
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
}

function startSmokeCanvas() {
    const canvas = document.getElementById('smokeCanvas');
    if (!canvas) return; // Guard
    const ctx = canvas.getContext('2d');

    // Performance Optimization: Render at low resolution and let CSS upscale/blur it
    // Scale 8 reduction gives 64x fewer pixels to compute
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
    for (let i = 0; i < 256; i++) {
        permutation[i] = Math.floor(Math.random() * 256);
    }
    const p = [...permutation, ...permutation];

    const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (t, a, b) => a + t * (b - a);
    const grad = (hash, x, y) => {
        const h = hash & 15;
        const u = h < 8 ? x : y;
        const v = h < 4 ? y : h === 12 || h === 14 ? x : 0;
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
        const aa = p[a];
        const ab = p[a + 1];
        const b = p[X + 1] + Y;
        const ba = p[b];
        const bb = p[b + 1];

        return lerp(v,
            lerp(u, grad(p[aa], x, y), grad(p[ba], x - 1, y)),
            lerp(u, grad(p[ab], x, y - 1), grad(p[bb], x - 1, y - 1))
        );
    };

    const fractalNoise = (x, y, octaves = 3) => {
        let value = 0;
        let amplitude = 1;
        let frequency = 1;
        let maxValue = 0;

        for (let i = 0; i < octaves; i++) {
            value += perlin(x * frequency, y * frequency) * amplitude;
            maxValue += amplitude;
            amplitude *= 0.5;
            frequency *= 2;
        }

        return value / maxValue;
    };

    let time = 0;

    function drawSmoke() {
        const imageData = ctx.createImageData(width, height);
        const data = imageData.data;

        // Render every pixel at low res
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                // Adjust coordinates by scale to maintain visual frequency
                const sx = x * scale;
                const sy = y * scale;

                // Multiple noise layers for wispy smoke effect
                const flow1 = fractalNoise(
                    sx * 0.0008 + time * 0.03,
                    sy * 0.0008 + time * 0.025,
                    3
                );

                const flow2 = fractalNoise(
                    sx * 0.001 - time * 0.035,
                    sy * 0.001 + time * 0.028,
                    3
                );

                const flow3 = fractalNoise(
                    sx * 0.0012 + time * 0.022,
                    sy * 0.0009 - time * 0.032,
                    3
                );

                const flow4 = fractalNoise(
                    sx * 0.0007 - time * 0.038,
                    sy * 0.0011 - time * 0.026,
                    3
                );

                const detail = fractalNoise(
                    sx * 0.003 + time * 0.02,
                    sy * 0.003 - time * 0.018,
                    4
                );

                const combined = (flow1 * 0.25 + flow2 * 0.25 + flow3 * 0.2 + flow4 * 0.2 + detail * 0.1);
                const intensity = Math.max(0, Math.min(1, combined + 0.3));

                // Color Variation (Texture)
                // We apply this variation curve to the TARGET color components
                const variation = Math.sin(time * 0.015 + sx * 0.01 + sy * 0.008) * 0.35 + 0.75;

                // Calculate final RGB based on intensity, variation and target color
                // We use intensity as a mask (0 = black/transparent, 1 = full color)
                // And variation to add the "cloudy" contrast
                const r = Math.floor(intensity * targetR * variation);
                const g = Math.floor(intensity * targetG * variation);
                // For blue, original code had a slight desaturation/shift, keeping it simple:
                const b = Math.floor(intensity * targetB * variation);

                const alpha = Math.floor(intensity * 200 * 0.9);

                // Set pixel data
                const i = (y * width + x) * 4;
                data[i] = r;
                data[i + 1] = g;
                data[i + 2] = b;
                data[i + 3] = alpha;
            }
        }

        ctx.putImageData(imageData, 0, 0);
    }

    // Slowed down animation speed
    function animate() {
        // Reduced from 0.35 to 0.05 for very slow, ambient smoke
        time += 0.08;

        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, width, height);

        ctx.globalCompositeOperation = 'lighter';
        drawSmoke();
        ctx.globalCompositeOperation = 'source-over';

        requestAnimationFrame(animate);
    }

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    animate();
}

// Start the smoke
document.addEventListener('DOMContentLoaded', startSmokeCanvas);
