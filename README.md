# MyResume - Portfolio & Infrastructure Automatisée

Bienvenue sur le dépôt de mon portfolio professionnel et CV interactif. 

Plus qu'une simple page web statique, ce projet a été conçu pour servir de démonstration technique. Il illustre mes compétences en administration système, en intégration continue (CI/CD) et ma volonté de mettre en place des flux de travail professionnels sécurisés et monitorés.

## 👨‍💻 À propos de l'auteur

**Jérémie SEGBEAME**
Futur Bachelor en Administration Systèmes, Réseaux et Bases de données (EPSI Lille), je suis actuellement technicien support informatique. 
Passionné par l'automatisation et la cybersécurité (Hack The Box : [@SoldierJerem](https://profile.hackthebox.com/profile/019dd3e3-8e4b-71df-8add-e4bd87b10871)), je construis des architectures résilientes et j'automatise les tâches répétitives. Chaque erreur est documentée, logguée et corrigée pour ne jamais se reproduire.

## Architecture Technique

Le projet repose sur une séparation stricte entre l'espace de développement et le serveur de production :

*   **Frontend :** HTML5, CSS3, Vanilla JavaScript (zéro dépendance lourde, optimisation maximale).
*   **Hébergement (Prod) :** GitHub Pages (HTTPS sécurisé).
*   **Moteur CI/CD :** GitHub Actions s'exécutant sur des conteneurs Linux (Ubuntu) éphémères.
*   **Supervision & Alerting :** Intégration de l'API Telegram pour notifier les statuts de déploiement (Host: Gideon).

## Workflow DevOps (Git Flow)

Afin de garantir un "Zero Downtime" et de protéger la production, la branche `main` n'est jamais modifiée en direct.

1.  **Isolation :** Tout développement (ajout d'une compétence, modification CSS) se fait sur une branche dédiée (ex: `update-projets-portfolio`).
2.  **Pull Request :** Le code est vérifié et validé manuellement.
3.  **Build Automatique (`deploy.yml`) :** À la fusion, le robot CI/CD clone le dépôt, isole exclusivement le dossier de travail `./src/`, crée un artefact et le déploie en ligne.
4.  **Logging :** Un bot Telegram personnel est notifié du succès ou de l'échec de la mise en production.

## Arborescence du Projet

L'architecture suit les standards professionnels de séparation des environnements :

```text
MyResume/
├── .github/workflows/       # Moteur d'automatisation (deploy.yml)
├── src/                     # Environnement de travail (Source)
│   ├── files/               # Ressources téléchargeables (CV, Docs techniques)
│   ├── icons/               # Actifs graphiques SVG / Favicon
│   ├── images/              # Médias
│   ├── index.html           # Point d'entrée principal
│   ├── legal.html           # Mentions légales
│   ├── script.js            # Logique d'interface
│   ├── style.css            # Feuille de style
│   └── .nojekyll            # Bypass du moteur GitHub classique
└── README.md                # Documentation de l'infrastructure