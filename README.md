# Projet Twelve

12 mini projets JavaScript (SPA) regroupés dans un seul repo.

## Programme
JavaScript - SPA

## Prérequis
- Git (pour cloner le dépôt)
- Docker (pour la version conteneurisée)
- Un navigateur moderne

## Installation & Configuration

### En local
Cloner le projet et ouvrir directement le dossier du mini projet souhaité dans votre navigateur.

### Avec Docker
```bash
docker build -t twelve-app .
docker run -p 1212:80 --name twelve-app twelve-app
```
Ouvrir http://localhost:1212

## Port
| Hôte | Conteneur |
|------|-----------|
| 1212 | 80        |