# API de Papillon

## Utilisation de l'image Docker hub

Lancez le conteneur Docker :
```bash
    docker run -d -p 3000:3000 vilerio/papillon-api:latest
```

## Utilisation du Dockerfile
Si vous préférez exécuter l'API dans un conteneur Docker, suivez ces étapes :

Assurez-vous d'avoir Docker installé sur votre système.
Clonez ce référentiel et accédez au répertoire du projet.
Construisez l'image Docker en exécutant la commande suivante :
```bash
docker build -t papillon-api .
```
Lancez le conteneur Docker :
```bash
docker run -d -p 3000:3000 papillon-api
```
## Utilisation de npx directement
Si vous préférez exécuter l'API directement sans Docker, suivez ces étapes :

Clonez ce référentiel et accédez au répertoire du projet.
Installez les dépendances avec la commande :
```bash
npm i
```
Lancez l'API en exécutant le fichier app.py :

```bash
npx ts-node api.ts
```


## Les différents endpoints
- GET /api : Version de l'api
- GET /team : Liste des membres de l'équipe
- GET /messages : Liste de tous les messages de l'app
- GET /latestVersion/plateforme : Dernière version de l'application pour la plateforme en question

