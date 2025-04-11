# 10,000 Dice Game

Un jeu de dés en ligne multijoueur basé sur le jeu classique "10,000" (ou Farkle), développé avec Astro, TypeScript, Three.js et TailwindCSS.

## 🎲 Fonctionnalités

- Jeu multijoueur en temps réel
- Animations 3D des dés avec Three.js
- Système de progression et de niveaux
- Interface utilisateur moderne et responsive
- Calcul automatique des scores
- Chat intégré

## 🚀 Technologies

- Frontend: Astro, TypeScript, Three.js, TailwindCSS
- Backend: Node.js, Express, Socket.io
- Base de données: PostgreSQL
- Déploiement: Vercel/Netlify

## 📋 Règles du jeu

Le but est d'être le premier joueur à atteindre 10 000 points. Chaque joueur lance 6 dés et peut marquer des points selon les combinaisons suivantes :

- 1 = 100 points
- 5 = 50 points
- 3x1 = 1000 points
- 3x[2-6] = 100 × valeur du dé
- Suite complète (1-6) = 1500 points
- 4+ dés identiques = Double par dé supplémentaire

Pour plus de détails sur les règles, consultez le fichier [rules.txt](info/rules.txt).

## 🛠 Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/10000-dice-game.git

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 📝 Licence

MIT
