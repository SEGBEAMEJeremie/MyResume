// Barre de progression de défilement
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + '%';
});



// Gestion du bouton Retour en Haut (Scroll to Top)
const scrollTopBtn = document.getElementById('scroll-top-btn');

// Ecoute du défilement de la page
window.addEventListener('scroll', () => {
    // Affiche le bouton si on a défilé de plus de 300px vers le bas
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Fonction pour remonter tout en haut en douceur
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}