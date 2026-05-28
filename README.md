# 🌐 Infrastructure Portfolio & CV - Jeremy SEGBEAME

Bienvenue sur le dépôt de mon portfolio professionnel et CV en ligne. 
Je suis un étudiant en Systèmes et Réseaux basé à Strasbourg, spécialisé dans la conception d'architectures à haute disponibilité, l'automatisation et la sécurisation des topologies.

🔗 **Lien vers la production :** https://takentech.github.io/MyResume/

---

## 🏗️ Architecture et Choix Techniques

Ce projet a été conçu avec une approche **"Security by Design"** et une volonté de performance maximale. J'ai volontairement banni l'utilisation de langages dynamiques ou de scripts côté client pour garantir la stabilité et la sécurité.

*   **Front-end pur :** 100% HTML5 et CSS3. Aucun JavaScript n'est exécuté sur ce site.
*   **Hébergement :** Déployé sur **GitHub Pages** pour bénéficier d'une haute disponibilité et d'une distribution globale (CDN).
*   **Sécurité (LCEN & RGPD) :**
    *   Aucun cookie de suivi, aucun traqueur d'analyse.
    *   Chiffrement SSL/TLS natif via GitHub.
    *   Obfuscation des points de contact (anti-scraping bot).
    *   Nettoyage systématique des métadonnées des fichiers PDF proposés en téléchargement (OPSEC).
*   **Responsivité :** Utilisation intensive de CSS Grid, Flexbox et des Media Queries pour garantir un affichage natif sur tous les terminaux (Bureautique, Mobile, Tablette).

---

## 🛠️ Journal de Déploiement (UI/UX)

Conception de l'interface graphique selon un modèle modulaire et hérité :

*   **Section Héro (Présentation) :** Création d'un premier point de vue centré et structuré pour l'atterrissage de l'utilisateur[cite: 6].
*   **Typographie Globale :** Importation de la police `Inter` via Google Fonts pour un rendu épuré, avec un dimensionnement relatif (`rem`) et des largeurs maximales (`max-width`) pour optimiser la lisibilité sur plusieurs lignes[cite: 6].
*   **Système de Grille & Flexbox :** Utilisation de conteneurs spécifiques pour aligner stratégiquement les éléments, notamment une séparation stricte entre la structure de la boîte (`.boutton`) et le style de l'élément cliquable (`button`)[cite: 6].
*   **Gestion des Assets :** Centralisation de la configuration des dimensions d'icônes directement dans le fichier CSS pour une meilleure maintenabilité de l'infrastructure[cite: 6].
*   **Micro-interactions :** Déploiement d'effets de survol dynamiques sur les cartes d'expérience (`.xp1:hover`), utilisant un agrandissement d'échelle (`transform: scale(1.02)`) soutenu par une transition fluide de 0.3s (`transition: transform 0.3s ease;`)[cite: 6].

---

## 📂 Structure du Répertoire

```text
📁 MyResume/
├── 📄 index.html        # Fichier racine de l'architecture
├── 📄 legal.html        # Mentions légales et politiques de confidentialité
├── 📄 style.css         # Feuille de style unique et modulaire
├── 📁 images/           # Ressources photographiques
├── 📁 Icones/           # Ressources vectorielles (SVG) et Favicon
└── 📁 Files/            # Fichiers PDF purgés (CV et Lettre de motivation)

