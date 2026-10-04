# Maison Brume

Concept de site pour une parfumerie de niche, à l'esthétique luxe et épurée. **Maison Brume est une marque fictive** : ce projet est un exercice de design et de développement.

## Pages

- `/` : hero éditorial avec flacon animé et pyramide olfactive
- `/parfums` : la collection, servie par l'API
- `/parfums/:slug` : fiche parfum avec notes, choix du format et prix dynamique
- `/maison` : l'histoire et le savoir-faire de la maison

## API (Nitro / Node)

- `GET /api/perfumes`
- `GET /api/perfumes/:slug`

## Stack

Nuxt 4 · Vue 3 · TypeScript · Nitro (Node)

## Lancer le projet

```bash
pnpm install
pnpm dev
```
