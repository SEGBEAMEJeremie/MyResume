

## DATE : 27/05/2026

je commence par créer une div presentation qui va contenir le premier aperçu qu'on aura sur la page quand on atteri dessus
Je met ensuite l'image dans le header et cera le premier élément de la page et bien centré

Je mets ensuite tous les élements de la presentation dans une meme div et je les centrerai ensuite.

Je crée ensuite une nouvelle div pour heberger les bouttons ca ils auront un autre alignement et j'ai pas forcement envie de jouer avec 
le marging et padding qui va rentre bizzare l'affichage sur d'autre écran.

configurer correctement le gap pour les buttons. Pour rappel le "button" gere les bouttons dans leur entiretés border et tout mais le "boutton" gère 
la boite qui contient les boutons donc les configurations sont differentes.

button pour le border radius, le background color, l'ecart entre les elements que contient le bouton, la couleur du texte que contient le boutton
boutton pour gerer l'espace entre les bouttons eux meme, mettre flex pour les aligner horizontalement ensuite le centrer.

Pour les icones je pourrais mettre directement la taille dans la ligne html mais je pense que ce serait mieux de le faire dans le fichier css
car on aura une meilleur visibilité des configs là bas.

j'importe ensuite la police de google
je precise dans le body la police que je veux pour toute la page, avec le parametre *font-family : 'Inter', sans-serif*
J'augmente la taille de la police en utilisant 4.5rem pour le h1 et 2.5rem pour le h2 et 1.35rem pour le h3

j'ajoute aussi le parametre max-width à h3 de presentation pour empecher le texte de s'afficher sur toute la ligne mais sur plusieurs

pour la presentation j'ai vraiment cliblé chaque élément pour leur appliquer respectivement les effets que je voulais.

j'enchaine avec la creation de la boite xp (champ experiences sur le cv) qui va emboiter ma boite experience à ALARA.

pour la partie experience, je vais juste mettre un bon bros padding et margin à la box principale experience qui contient la box ALARA
Ensuite, il faut juste que je centre le texte "EXPERIENCES PROFESSIONNELLES" avec la commande text-align de cette box, ALARA et ces infos resteront à leur place cependant.
Pour ALARA, on va cibler chaque composant un à un comme avec la presentation plus haut

on commence par mettre lui mettre un background color un peu clean avec le code couleur : #F8F9FA
ensuite on lui met un border radius, on met du padding aussi pour creer de l'espace dans la boite.
ensuite on rajoute une petite animation avec "transition: transform 0.3s ease;"

Ensuite avec on rajoute un effet survol avec la partie ".xp1:hover", on la configure pour que la box se developpe à 1.02 fois sa taille quand on passe dessus, l'animation qu'on a defini tout à l'heure permet de garder un ton fluide pour l'animation.

pour les prochains elements tels que le h3 et h4 on va juste leur changer couleur, majuscule, le gras et autre lié principalement à la police


De la ligne 150 à 222 j'ai tout le css de la partie projet 

