// tahun
let tahun = document.querySelector('.tahun');
let getYear = new Date();

tahun.textContent = getYear.getFullYear();

// card
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener("mouseenter", (e => {
        card.style.backgroundColor = "#7cb9c4";
    }));
    card.addEventListener("mouseleave", (e) => {
        card.style.backgroundColor = "#fff";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const kafeKodingText = document.querySelector('.benner .left h1');

    function moveText() {
        kafeKodingText.style.transform = 'translateX(0)';
    }

    // Panggil fungsi moveText setelah halaman dimuat
    moveText();
});

document.addEventListener("DOMContentLoaded", function() {
    const gambar = document.querySelector('.right img');

    function floatButton() {
        gambar.style.animation = 'floatAnimation 2s ease-in-out infinite';
    }

    // Panggil fungsi floatButton setelah halaman dimuat
    floatButton();
});

