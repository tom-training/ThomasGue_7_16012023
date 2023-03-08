# ThomasGue_7_16012023
Projet 7 OpenClassRooms -Kasa Location immobilière


0- git clone https://github.com/tom-training/ThomasGue_7_16012023.git


1- Avec la commande "npm install" procéder à l'installation des packages suivants:

pour référence consulter package.json ligne  "dependencies"


2- Pour lancer l'application, veuillez rooter sur le répertoire ThomasGue_7_16012023/kasa
et dans votre terminal lancer la commande: npm start


POUR LA PROGRESSION et la sauvegarde sur github:

Attention veuillez rooter sur le répertoire ThomasGue_7_16012023

git add --all
git commit -m "intitulé du commit"
git push -u Proj main

3- Le code React Router est sauvegardé sur le fichier kasa/src/index.jsx




POUR PERMETTRE AU SITE D'ÊTRE HÉBERGÉ SUR GIT HUB PAGES:
in order to deploy on github pages we have to add the following line in the package.json
/* "homepage": "https://tom-training.github.io/ThomasGue_7_16012023", */

then in index.jsx (file coding the routing):
the root path becomes: /ThomasGue_7_16012023/ and then change the following paths accordingly

then cd kasa in the terminal and run : npm run deploy


EN LOCAL:
"homepage": "/ThomasGue_7_16012023/",
    ou plus simplement rien, pas de homepage, dans ce cas "/ThomasGue_7_16012023/" est remplacé par "/"
    dans les path des fichiers listés ci-dessous

A coller dans le package.json le cas échéant

Ensuite, changer les paths  dans src/index.jsx 
                            dans Header/index.jsx
                            dans Appart/index.jsx
                            dans Error/index.jsx

https://cra.link/deployment