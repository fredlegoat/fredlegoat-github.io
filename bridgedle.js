const characters = [
    { name: "Daphne Bridgerton", sexe: "F", famille: "Bridgerton", rang_social: "Duchesse", statut_matrimonial: "Mariée", role_narratif: "Protagoniste saison 1", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://juliaquinn.com/WP/wp-content/uploads/2022/03/Daphne-353x400.png" },
    { name: "Anthony Bridgerton", sexe: "M", famille: "Bridgerton", rang_social: "Vicomte", statut_matrimonial: "Marié", role_narratif: "Protagoniste saison 2", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://juliaquinn.com/WP/wp-content/uploads/2022/03/WAX_anth-353x400.jpg" },
    { name: "Benedict Bridgerton", sexe: "M", famille: "Bridgerton", rang_social: "Noblesse sans titre", statut_matrimonial: "Célibataire", role_narratif: "Secondaire récurrent", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://juliaquinn.com/WP/wp-content/uploads/2022/03/WAX_Ben-354x400.jpg" },
    { name: "Colin Bridgerton", sexe: "M", famille: "Bridgerton", rang_social: "Noblesse sans titre", statut_matrimonial: "Marié", role_narratif: "Protagoniste saison 3", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://juliaquinn.com/WP/wp-content/uploads/2022/03/WAX_colin-354x400.jpg" },
    { name: "Eloise Bridgerton", sexe: "F", famille: "Bridgerton", rang_social: "Noblesse sans titre", statut_matrimonial: "Célibataire", role_narratif: "Secondaire récurrent", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://juliaquinn.com/WP/wp-content/uploads/2022/03/WAX_eloise-354x400.jpg" },
    { name: "Francesca Bridgerton", sexe: "F", famille: "Bridgerton", rang_social: "Comtesse", statut_matrimonial: "Mariée", role_narratif: "Secondaire récurrent", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://juliaquinn.com/WP/wp-content/uploads/2022/03/francesca-353x400.jpg" },
    { name: "Gregory Bridgerton", sexe: "M", famille: "Bridgerton", rang_social: "Noblesse sans titre", statut_matrimonial: "Célibataire", role_narratif: "Secondaire", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://juliaquinn.com/WP/wp-content/uploads/2022/03/WAX_greg-353x400.jpg" },
    { name: "Hyacinth Bridgerton", sexe: "F", famille: "Bridgerton", rang_social: "Noblesse sans titre", statut_matrimonial: "Célibataire", role_narratif: "Secondaire", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://juliaquinn.com/WP/wp-content/uploads/2022/03/WAX_Hy-354x400.jpg" },
    { name: "Violet Bridgerton", sexe: "F", famille: "Bridgerton", rang_social: "Vicomtesse douairière", statut_matrimonial: "Veuve", role_narratif: "Mentor", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://i.redd.it/1nxc43ipapp61.jpg" },
    { name: "Edmund Bridgerton", sexe: "M", famille: "Bridgerton", rang_social: "Vicomte", statut_matrimonial: "Marié", role_narratif: "Figure du passé", saison_introduction: 2, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/0/0e/EdmundBridgerton.png/revision/latest/scale-to-width-down/1000?cb=20230510161454&path-prefix=fr" },

    { name: "Simon Basset", sexe: "M", famille: "Basset", rang_social: "Duc", statut_matrimonial: "Marié", role_narratif: "Protagoniste saison 1", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://juliaquinn.com/WP/wp-content/uploads/2022/03/WAX_simon2-354x400.jpg" },
    { name: "Queen Charlotte", sexe: "F", famille: "Famille royale", rang_social: "Reine", statut_matrimonial: "Mariée", role_narratif: "Autorité centrale", saison_introduction: 1, classe_sociale: "Monarchie", image: "https://juliaquinn.com/WP/wp-content/uploads/2023/03/charlotte-pom-353x400.jpg" },
    { name: "King George III", sexe: "M", famille: "Famille royale", rang_social: "Roi", statut_matrimonial: "Marié", role_narratif: "Secondaire", saison_introduction: 1, classe_sociale: "Monarchie", image: "https://juliaquinn.com/WP/wp-content/uploads/2022/09/JQ_young-king-george-353x400.jpg" },
    { name: "Prince Friedrich", sexe: "M", famille: "Famille royale", rang_social: "Prince", statut_matrimonial: "Célibataire", role_narratif: "Secondaire", saison_introduction: 1, classe_sociale: "Monarchie", image: "https://static.wikia.nocookie.net/bridgerton/images/8/81/Prince-friedrich.png/revision/latest?cb=20220327182432" },

    { name: "Lady Danbury", sexe: "F", famille: "Danbury", rang_social: "Lady", statut_matrimonial: "Veuve", role_narratif: "Mentor", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://juliaquinn.com/WP/wp-content/uploads/2022/03/LadyDanbury-354x400.png" },
    { name: "Marcus Anderson", sexe: "M", famille: "Danbury", rang_social: "Noblesse sans titre", statut_matrimonial: "Célibataire", role_narratif: "Secondaire", saison_introduction: 3, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/2/25/Marcusanderson.webp/revision/latest/scale-to-width-down/1000?cb=20240914180513&path-prefix=fr" },

    { name: "Portia Featherington", sexe: "F", famille: "Featherington", rang_social: "Lady", statut_matrimonial: "Veuve", role_narratif: "Secondaire majeur", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/8/83/Portia-S3E1.jpg/revision/latest?cb=20240526123738" },
    { name: "Archibald Featherington", sexe: "M", famille: "Featherington", rang_social: "Baron", statut_matrimonial: "Marié", role_narratif: "Secondaire", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/3/3e/101_17.jpg/revision/latest/scale-to-width-down/1000?cb=20201227153123&path-prefix=fr" },
    { name: "Prudence Featherington", sexe: "F", famille: "Featherington", rang_social: "Noblesse sans titre", statut_matrimonial: "Mariée", role_narratif: "Secondaire", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/0/06/Prudence.jpg/revision/latest/scale-to-width-down/536?cb=20201228100220&path-prefix=fr" },
    { name: "Philippa Featherington", sexe: "F", famille: "Featherington", rang_social: "Noblesse sans titre", statut_matrimonial: "Mariée", role_narratif: "Secondaire", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/c/c3/Philippa.jpg/revision/latest/scale-to-width-down/1000?cb=20201228100146&path-prefix=fr" },
    { name: "Penelope Featherington", sexe: "F", famille: "Featherington", rang_social: "Noblesse sans titre", statut_matrimonial: "Mariée", role_narratif: "Protagoniste saison 3", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/e/ef/Penelopeseason304.jpg/revision/latest/scale-to-width-down/1000?cb=20240314143905&path-prefix=fr" },
    { name: "Jack Featherington", sexe: "M", famille: "Featherington", rang_social: "Baron", statut_matrimonial: "Célibataire", role_narratif: "Antagoniste", saison_introduction: 2, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/f/fb/2x08JackFeatheringtonIB.png/revision/latest?cb=20220503222323" },

    { name: "Cressida Cowper", sexe: "F", famille: "Cowper", rang_social: "Noblesse sans titre", statut_matrimonial: "Célibataire", role_narratif: "Antagoniste sociale", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://preview.redd.it/cressida-cowper-v0-bsx3tn6az6bg1.jpeg?width=1080&crop=smart&auto=webp&s=51082fab021a864da1bd742e34a87fed8dde5705" },
    { name: "Lady Cowper", sexe: "F", famille: "Cowper", rang_social: "Lady", statut_matrimonial: "Mariée", role_narratif: "Secondaire", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/a/a4/Lady_Cowper.png/revision/latest/scale-to-width-down/1000?cb=20210108192923&path-prefix=fr" },

    { name: "Kate Sharma", sexe: "F", famille: "Sharma", rang_social: "Vicomtesse", statut_matrimonial: "Mariée", role_narratif: "Protagoniste saison 2", saison_introduction: 2, classe_sociale: "Noblesse étrangère", image: "https://juliaquinn.com/WP/wp-content/uploads/2022/03/WAX_kate-353x400.jpg" },
    { name: "Edwina Sharma", sexe: "F", famille: "Sharma", rang_social: "Noblesse sans titre", statut_matrimonial: "Célibataire", role_narratif: "Secondaire majeur", saison_introduction: 2, classe_sociale: "Noblesse étrangère", image: "https://static.wikia.nocookie.net/bridgerton/images/9/99/2x01-14.jpg/revision/latest/scale-to-width-down/1000?cb=20220327003824" },
    { name: "Lady Mary Sharma", sexe: "F", famille: "Sharma", rang_social: "Lady", statut_matrimonial: "Mariée", role_narratif: "Secondaire", saison_introduction: 2, classe_sociale: "Noblesse étrangère", image: "https://static.wikia.nocookie.net/bridgerton/images/b/b1/2x03-15.jpg/revision/latest?cb=20221125230754" },

    { name: "Marina Thompson", sexe: "F", famille: "Thompson", rang_social: "Noblesse sans titre", statut_matrimonial: "Mariée", role_narratif: "Secondaire majeur", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://assets.capitalfm.com/2020/51/who-plays-marina-thompson-in-bridgerton--ruby-barker-1608717136-view-0.png" },
    { name: "Sir Phillip Crane", sexe: "M", famille: "Crane", rang_social: "Baronnet", statut_matrimonial: "Veuf", role_narratif: "Secondaire", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/c/cf/Philip_2.png/revision/latest/thumbnail/width/360/height/360?cb=20240620025506" },

    { name: "Will Mondrich", sexe: "M", famille: "Mondrich", rang_social: "Noblesse sans titre", statut_matrimonial: "Marié", role_narratif: "Secondaire récurrent", saison_introduction: 1, classe_sociale: "Noblesse ascendante", image: "https://static.wikia.nocookie.net/bridgerton/images/c/c6/WillMondrich-S3E2.jpg/revision/latest?cb=20240526123617" },
    { name: "Alice Mondrich", sexe: "F", famille: "Mondrich", rang_social: "Noblesse sans titre", statut_matrimonial: "Mariée", role_narratif: "Secondaire", saison_introduction: 1, classe_sociale: "Noblesse ascendante", image: "https://static.wikia.nocookie.net/bridgerton/images/4/49/Alice_Mondrich.jpeg/revision/latest?cb=20220328055036" },
    { name: "Nicky Mondrich", sexe: "M", famille: "Mondrich", rang_social: "Sans titre", statut_matrimonial: "Célibataire", role_narratif: "Secondaire", saison_introduction: 3, classe_sociale: "Noblesse ascendante", image: "https://static.wikia.nocookie.net/bridgerton/images/9/9a/Nicky_Mondrich.jpg/revision/latest?cb=20240716205103" },

    { name: "Genevieve Delacroix", sexe: "F", famille: "Aucune", rang_social: "Sans titre", statut_matrimonial: "Célibataire", role_narratif: "Secondaire récurrent", saison_introduction: 1, classe_sociale: "Classe moyenne", image: "https://static.wikia.nocookie.net/bridgerton/images/a/ae/Genevievedelacroix.webp/revision/latest?cb=20240620101219&path-prefix=fr" },
    { name: "Siena Rosso", sexe: "F", famille: "Aucune", rang_social: "Sans titre", statut_matrimonial: "Célibataire", role_narratif: "Secondaire majeur", saison_introduction: 1, classe_sociale: "Classe populaire", image: "https://static.wikia.nocookie.net/bridgerton/images/0/0c/Siena_R.jpg/revision/latest?cb=20220620020001" },
    { name: "Theo Sharpe", sexe: "M", famille: "Aucune", rang_social: "Sans titre", statut_matrimonial: "Célibataire", role_narratif: "Secondaire", saison_introduction: 2, classe_sociale: "Classe populaire", image: "https://static.wikia.nocookie.net/bridgerton/images/b/ba/2x08TheoSharpeIB.png/revision/latest?cb=20220503221134" },

    { name: "Nigel Berbrooke", sexe: "M", famille: "Berbrooke", rang_social: "Lord", statut_matrimonial: "Célibataire", role_narratif: "Antagoniste", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/0/00/101_12.jpg/revision/latest?cb=20201227152938&path-prefix=fr" },
    { name: "Henry Granville", sexe: "M", famille: "Granville", rang_social: "Lord", statut_matrimonial: "Marié", role_narratif: "Secondaire", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/a/a6/Henry_Granville.jpg/revision/latest?cb=20220326204151" },
    { name: "Fife", sexe: "M", famille: "Fife", rang_social: "Lord", statut_matrimonial: "Célibataire", role_narratif: "Secondaire", saison_introduction: 2, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/e/ee/Lord_Fife.jpg/revision/latest?cb=20220415123557" },

    { name: "Madame Delacroix", sexe: "F", famille: "Aucune", rang_social: "Sans titre", statut_matrimonial: "Célibataire", role_narratif: "Alias mondain", saison_introduction: 1, classe_sociale: "Classe moyenne", image: "https://static.wikia.nocookie.net/bridgerton/images/a/ae/Genevievedelacroix.webp/revision/latest?cb=20240620101219&path-prefix=fr" },


    { name: "Varley", sexe: "F", famille: "Aucune", rang_social: "Domestique", statut_matrimonial: "Veuve", role_narratif: "Secondaire", saison_introduction: 1, classe_sociale: "Classe populaire", image: "https://static.wikia.nocookie.net/bridgerton/images/8/84/Varley.webp/revision/latest/scale-to-width-down/1000?cb=20260302100346" },
    { name: "Wilson", sexe: "F", famille: "Aucune", rang_social: "Domestique", statut_matrimonial: "Célibataire", role_narratif: "Secondaire", saison_introduction: 1, classe_sociale: "Classe populaire", image: "https://static.wikia.nocookie.net/bridgerton/images/b/bc/MrsWilson.jpg/revision/latest/scale-to-width-down/1000?cb=20260302100819" },
    { name: "Jeffries", sexe: "M", famille: "Aucune", rang_social: "Domestique", statut_matrimonial: "Célibataire", role_narratif: "Secondaire", saison_introduction: 1, classe_sociale: "Classe populaire", image: "https://static.tvmaze.com/uploads/images/medium_portrait/518/1295535.jpg" },

    { name: "Lady Trowbridge", sexe: "F", famille: "Trowbridge", rang_social: "Lady", statut_matrimonial: "Veuve", role_narratif: "Secondaire", saison_introduction: 1, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/d/db/Lady_Trowbridge.png/revision/latest/scale-to-width-down/1000?cb=20210110133343&path-prefix=fr" },

    { name: "John Stirling", sexe: "M", famille: "Stirling", rang_social: "Comte", statut_matrimonial: "Marié", role_narratif: "Secondaire", saison_introduction: 3, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/9/99/John_Stirling.webp/revision/latest?cb=20240914181448&path-prefix=fr" },
    { name: "Michaela Stirling", sexe: "F", famille: "Stirling", rang_social: "Noblesse sans titre", statut_matrimonial: "Célibataire", role_narratif: "Secondaire", saison_introduction: 3, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/1/1a/Michaelastirling.jpg/revision/latest/scale-to-width-down/1000?cb=20240914181855&path-prefix=fr" },

    { name: "Harry Dankworth", sexe: "M", famille: "Dankworth", rang_social: "Gentilhomme", statut_matrimonial: "Marié", role_narratif: "Secondaire", saison_introduction: 3, classe_sociale: "Noblesse", image: "https://static.wikia.nocookie.net/bridgerton/images/9/91/3x01Harry_Dankworth_IB.jpg/revision/latest?cb=20240616041410" }
];

// Préchargement des images pour améliorer les performances
const imageCache = {};
characters.forEach(char => {
    const img = new Image();
    img.src = char.image;
    imageCache[char.image] = img;
});

let secretChar;
let guessedNames = [];
let selectedIndex = -1;
let guessCount = 0;

const input = document.getElementById('char-input');
const list = document.getElementById('autocomplete-list');
const container = document.getElementById('guesses-container');
const modal = document.getElementById('success-modal');
const secretNameSpan = document.getElementById('secret-name');
const secretImage = document.getElementById('secret-image');
const hintMessage = document.getElementById('hint-message');

function initGame() {
    secretChar = characters[Math.floor(Math.random() * characters.length)];
    guessedNames = [];
    guessCount = 0;
    container.innerHTML = '';
    input.value = '';
    list.style.display = 'none';
    modal.style.display = 'none';
    hintMessage.style.display = 'block';
    gsap.from(".header-anim", { opacity: 0, y: -20, duration: 1 });
}

input.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    list.innerHTML = '';
    selectedIndex = -1;

    if (val.length < 1) {
        list.style.display = 'none';
        return;
    }

    const filtered = characters.filter(c => !guessedNames.includes(c.name) && c.name.toLowerCase().startsWith(val));

    if (filtered.length > 0) {
        list.style.display = 'block';
        filtered.forEach((char, index) => {
            const div = document.createElement('div');
            div.className = "autocomplete-item flex items-center gap-4 w-full text-left transition-all duration-200";
            div.dataset.index = index;

            let displayName = char.name.startsWith('Lady ') ? char.name : char.name.split(' ')[0];

            div.innerHTML = `
                <img src="${char.image}" alt="${char.name}" class="w-20 h-20 rounded object-cover">
                <div class="flex-1">
                    <span class="font-semibold block text-white">${displayName}</span>
                </div>
            `;

            div.onclick = () => {
                addGuess(char);
                input.value = '';
                list.innerHTML = '';
                list.style.display = 'none';
                selectedIndex = -1;
            };

            list.appendChild(div);
        });

        // Animation "déroulante" (Unroll animation)
        gsap.from(list.querySelectorAll('.autocomplete-item'), {
            opacity: 0,
            y: -10,
            stagger: 0.05,
            duration: 0.2,
            ease: "power1.out"
        });
    } else {
        list.style.display = 'none';
    }
});

input.addEventListener('keydown', (e) => {
    const items = list.querySelectorAll('.autocomplete-item');
    
    if (e.key === 'Enter') {
        e.preventDefault();
        const val = input.value.toLowerCase();
        const filtered = characters.filter(c => !guessedNames.includes(c.name) && c.name.toLowerCase().startsWith(val));
        
        // Si une option est sélectionnée avec les flèches
        if (selectedIndex >= 0 && filtered[selectedIndex]) {
            addGuess(filtered[selectedIndex]);
            input.value = '';
            list.innerHTML = '';
            list.style.display = 'none';
            selectedIndex = -1;
        }
        // Si il n'y a qu'une seule option disponible
        else if (filtered.length === 1) {
            addGuess(filtered[0]);
            input.value = '';
            list.innerHTML = '';
            list.style.display = 'none';
            selectedIndex = -1;
        }
        // Si le nom tapé correspond exactement à un personnage
        else {
            const exactMatch = filtered.find(c => c.name.toLowerCase() === val);
            if (exactMatch) {
                addGuess(exactMatch);
                input.value = '';
                list.innerHTML = '';
                list.style.display = 'none';
                selectedIndex = -1;
            }
        }
        return;
    }
    
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        updateSelection(items);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = selectedIndex <= 0 ? items.length - 1 : selectedIndex - 1;
        updateSelection(items);
    }
});

function updateSelection(items) {
    items.forEach((item, index) => {
        if (index === selectedIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function addGuess(char) {
    guessedNames.push(char.name);
    guessCount++;

    const rowContainer = document.createElement('div');
    rowContainer.className = "relative mb-4";

    const img = document.createElement('img');
    img.src = char.image;
    img.alt = char.name;
    img.className = "absolute -left-10 sm:-left-14 md:-left-20 top-0 w-8 sm:w-12 h-full md:w-16 rounded object-cover";

    const row = document.createElement('div');
    row.className = "grid grid-cols-8 gap-0.5 sm:gap-1 md:gap-2 items-stretch h-[2.5rem] sm:h-[3rem] md:h-[4rem]";
    row.dataset.guessNumber = guessCount;

    let displayName;
    if (char.name.startsWith('Lady ')) {
        displayName = char.name;
    } else {
        displayName = char.name.split(' ')[0];
    }

    const fields = [
        { val: displayName, check: char.name === secretChar.name },
        { val: guessCount <= 3 ? '???' : char.famille, check: char.famille === secretChar.famille, hidden: guessCount <= 3, famille: char.famille },
        { val: char.sexe === 'M' ? 'Homme' : 'Femme', check: char.sexe === secretChar.sexe },
        { val: char.rang_social, check: char.rang_social === secretChar.rang_social },
        { val: guessCount <= 3 ? '???' : char.statut_matrimonial, check: char.statut_matrimonial === secretChar.statut_matrimonial, hidden: guessCount <= 3, statut: char.statut_matrimonial },
        { val: char.classe_sociale, check: char.classe_sociale === secretChar.classe_sociale },
        { val: char.role_narratif, check: char.role_narratif === secretChar.role_narratif },
        { val: char.saison_introduction, check: char.saison_introduction === secretChar.saison_introduction }
    ];

    fields.forEach((field, index) => {
        const cell = document.createElement('div');
        
        // Ajuster la taille de police pour les textes longs selon la taille d'écran
        let fontSize = 'text-[7px] sm:text-[9px] md:text-sm';
        if (field.val && field.val.length > 15) {
            fontSize = 'text-[6px] sm:text-[7px] md:text-xs';
        } else if (field.val && field.val.length > 12) {
            fontSize = 'text-[6.5px] sm:text-[8px] md:text-xs';
        }
        
        cell.className = `cell flex items-center justify-center text-center rounded shadow-sm ${fontSize} font-bold ${field.hidden ? 'bg-white/5 text-white/20' : (field.check ? 'correct' : 'wrong')}`;
        cell.innerHTML = field.val;

        if (index === 1 && field.hidden) {
            cell.dataset.famille = field.famille;
            cell.dataset.isCorrect = field.check;
        }
        if (index === 4 && field.hidden) {
            cell.dataset.statut = field.statut;
            cell.dataset.isCorrect = field.check;
        }

        row.appendChild(cell);
    });

    rowContainer.appendChild(img);
    rowContainer.appendChild(row);
    container.prepend(rowContainer);

    gsap.to(rowContainer.querySelectorAll('.cell'), {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        onComplete: () => {
            if (guessCount === 3) {
                revealHiddenColumns();
                hintMessage.style.display = 'none';
            }
            if (char.name === secretChar.name) {
                setTimeout(() => showSuccess(char.name), 500);
            }
        }
    });

    gsap.from(img, { opacity: 0, scale: 0.5, duration: 0.5 });
}

function revealHiddenColumns() {
    const allRows = container.querySelectorAll('[data-guess-number]');
    allRows.forEach(row => {
        const guessNum = parseInt(row.dataset.guessNumber);
        if (guessNum <= 3) {
            const familleCell = row.children[1];
            if (familleCell.dataset.famille) {
                const isCorrect = familleCell.dataset.isCorrect === 'true';
                const familleText = familleCell.dataset.famille;
                familleCell.innerHTML = familleText;
                
                // Ajuster la taille de police selon la longueur
                let fontSize = 'text-[7px] sm:text-[9px] md:text-sm';
                if (familleText.length > 15) {
                    fontSize = 'text-[6px] sm:text-[7px] md:text-xs';
                } else if (familleText.length > 12) {
                    fontSize = 'text-[6.5px] sm:text-[8px] md:text-xs';
                }
                
                familleCell.className = `cell flex items-center justify-center text-center rounded shadow-sm ${fontSize} font-bold ${isCorrect ? 'correct' : 'wrong'}`;
                gsap.from(familleCell, { scale: 1.2, duration: 0.3 });
            }

            const statutCell = row.children[4];
            if (statutCell.dataset.statut) {
                const isCorrect = statutCell.dataset.isCorrect === 'true';
                const statutText = statutCell.dataset.statut;
                statutCell.innerHTML = statutText;
                
                // Ajuster la taille de police selon la longueur
                let fontSize = 'text-[7px] sm:text-[9px] md:text-sm';
                if (statutText.length > 15) {
                    fontSize = 'text-[6px] sm:text-[7px] md:text-xs';
                } else if (statutText.length > 12) {
                    fontSize = 'text-[6.5px] sm:text-[8px] md:text-xs';
                }
                
                statutCell.className = `cell flex items-center justify-center text-center rounded shadow-sm ${fontSize} font-bold ${isCorrect ? 'correct' : 'wrong'}`;
                gsap.from(statutCell, { scale: 1.2, duration: 0.3, delay: 0.1 });
            }
        }
    });
}

function showSuccess(name) {
    secretNameSpan.textContent = name + ' !';
    secretImage.src = secretChar.image;
    secretImage.alt = name;
    modal.style.display = 'flex';
    gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    gsap.fromTo(modal.children, { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, delay: 0.2 });
}

document.getElementById('btn-replay').onclick = () => {
    gsap.to(modal, { opacity: 0, duration: 0.4, onComplete: initGame });
};

document.getElementById('btn-review').onclick = () => {
    // Fermer le modal pour revoir les tentatives
    gsap.to(modal, { opacity: 0, duration: 0.4, onComplete: () => {
        modal.style.display = 'none';
    }});
};

initGame();
