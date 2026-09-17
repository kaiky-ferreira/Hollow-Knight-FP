const spoilerZone = document.querySelector(".spoiler-zone");
const spoilerCover = document.querySelector(".spoiler-cover");
const hornetImage = document.querySelector(".hornet-img");

const hornetPhrases = [
    "SHAW!",
    "EDINO",
    "GUARANÁ!",
    "HEGALE!",
    "ADINO!",
];

spoilerCover.addEventListener("click", () => {
    spoilerZone.classList.add("revealed");
});

hornetImage.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * hornetPhrases.length);
    const randomPhrase = hornetPhrases[randomIndex]
    alert(randomPhrase);
});