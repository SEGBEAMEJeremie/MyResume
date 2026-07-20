# Portfolio & CV - Jérémie SEGBEAME

Bienvenue sur le dépôt de mon portfolio et CV en ligne. 
Passionné par l'administration systèmes, les réseaux et la sécurité opérationnelle, cette vitrine web présente mon parcours, mes compétences techniques, mes projets documentés ainsi que mon Homelab.

 **Consulter le site en direct :** [https://segbeamejeremie.github.io/MyResume/](https://segbeamejeremie.github.io/MyResume/)

---

## Architecture & Choix Techniques

Ce projet a été conçu selon une approche **"Minimalist & Secure by Design"**, visant une performance maximale, une sobriété numérique et une navigation fluide sans dépendances lourdes :

*   **Technologies Web :** HTML5, CSS3 modulaire et Vanilla JavaScript (sans framework).
*   **Hébergement & CDN :** Déployé sur **GitHub Pages** garantissant une haute disponibilité et un chiffrement SSL/TLS natif.
*   **Sécurité & Confidentialité (RGPD / OPSEC) :**
    *   Aucun cookie de suivi, aucun traqueur d'analyse tiers.
    *   Obfuscation des coordonnées de contact contre le scraping automatique.
    *   Purge systématique des métadonnées sur l'ensemble des fichiers PDF proposés au téléchargement.
*   **Design Responsive :** Adaptation sur tous les écrans (Desktop, Tablette, Mobile) grâce à CSS Grid et Flexbox.

---

## ✨ Fonctionnalités & Améliorations Récentes (UI/UX)

*   **Barre de Progression de Lecture :** Indicateur visuel discret en haut d'écran permettant de suivre sa progression lors du défilement de la page.
*   **Bouton Scroll-to-Top :** Bouton flottant ergonomique apparaissant au défilement pour remonter en haut de page en un clic.
*   **Micro-interactions & Animations CSS :** Effets de survol dynamiques (`transform: scale(1.02)`, transitions fluides 0.3s) sur les cartes de projets et d'expériences.
*   **Typographie & Lisibilité :** Utilisation de la police `Inter` avec dimensions relatives (`rem`) et contraintes de largeur (`max-width`) pour un confort de lecture optimal.

---

## 📁 Structure du Projet

```text

MyResume/
├── Frontend/
│   ├── index.html        # Page principale (CV & Portfolio)
│   ├── legal.html        # Mentions légales & politiques de confidentialité
│   ├── style.css         # Feuille de style CSS3 principale
│   └── script.js        # Script Vanilla JS (Progression & Scroll-to-top)
├── Files/
│   ├── Admin/            # CV et Lettres de motivation (PDF purgés)
│   └── Documentations/   # Documentation technique des projets (VPN, Active Directory, ARP Spoofing)
├── Icones/               # Ressources vectorielles (SVG) & Favicon
├── images/               # Graphismes & photo de profil
└── README.md             # Documentation du dépôt

``` 
