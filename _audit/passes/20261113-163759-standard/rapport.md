# Rapport d’audit

Projet : `djludoremix-maquette` · 13/11/2026 17:39:58 · 2 min · 6 page(s) · audit standard

## Résumé

- Statut : **INCOMPLET : 103 contrôle(s) requis n’ont pas tourné (voir « Non lancé ») ; ne vaut pas pour une livraison**
- Passe : `20261113-163759-standard` · version ?v=1
- Échecs : **0**
- À regarder : **3**
- Non lancé : **104**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 5 page(s) |
| 6. La scène est un geste du métier | ✓ présent | geste du métier sur / |
| 7. L’action principale a un retour physique | ✓ présent | sur /contact, / |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-150123-rapide-cible | rapide | /,/soirees,/formules,/ludo,/contact | toutes | 133 | 23 | 5 | échecs |
| 20261113-152344-rapide-cible | rapide | /,/soirees,/formules,/ludo,/contact | toutes | 41 | 4 | 5 | échecs |
| 20261113-155848-rapide-cible | rapide | /soirees,/formules,/ludo,/contact | toutes | 35 | 3 | 5 | échecs |
| 20261113-162418-rapide-cible | rapide | /soirees,/formules,/ludo,/contact | toutes | 5 | 5 | 5 | échecs |
| **20261113-163759-standard** (celle-ci) | standard | toutes | toutes | 0 | 3 | 104 | INCOMPLET |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `index.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

## Non lancé

- **grille** : page.evaluate: Target page, context or browser has been closed
- **mesures / 320×568 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures / 390×844 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures / 844×390 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures / 768×1024 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures / 1366×768 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures / 1920×1080 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures / 390×844 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures / 390×844 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures / 1366×768 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures / 1366×768 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures / 320×568 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 320×568 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 390×844 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 844×390 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 768×1024 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 1366×768 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 1920×1080 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 390×844 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 390×844 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 1366×768 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 1366×768 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 320×568 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 320×568 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 390×844 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 844×390 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 768×1024 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 1366×768 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 1920×1080 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 390×844 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 390×844 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 1366×768 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 1366×768 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 320×568 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /formules 320×568 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /formules 390×844 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /formules 844×390 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /formules 768×1024 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /formules 1366×768 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /formules 1920×1080 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /formules 390×844 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /formules 390×844 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /formules 1366×768 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /formules 1366×768 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /formules 320×568 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /ludo 320×568 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /ludo 390×844 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /ludo 844×390 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /ludo 768×1024 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /ludo 1366×768 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /ludo 1920×1080 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /ludo 390×844 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /ludo 390×844 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /ludo 1366×768 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /ludo 1366×768 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /ludo 320×568 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /soirees 320×568 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /soirees 390×844 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /soirees 844×390 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /soirees 768×1024 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /soirees 1366×768 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /soirees 1920×1080 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /soirees 390×844 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /soirees 390×844 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /soirees 1366×768 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /soirees 1366×768 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /soirees 320×568 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures:balayage** : browser.newContext: Target page, context or browser has been closed
- **film de l'ouverture / 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /contact 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /formules 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /ludo 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /soirees 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis / 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /contact 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /formules 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /ludo 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /soirees 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture / 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /contact 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /formules 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /ludo 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /soirees 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis / 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /contact 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /formules 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /ludo 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /soirees 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran / 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /contact 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /formules 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /ludo 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /soirees 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran / 1920×1080** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **parcours:intro** : browser.newContext: Target page, context or browser has been closed
- **parcours:menu** : browser.newContext: Target page, context or browser has been closed
- **parcours:liens** : browser.newContext: Target page, context or browser has been closed
- **parcours:hauteur** : browser.newContext: Target page, context or browser has been closed
- **ecran** : browser.newContext: Target page, context or browser has been closed
- **fluidite** : browser.newContext: Target page, context or browser has been closed
- **mouvement** : browser.newContext: Target page, context or browser has been closed
- **vitesse** : browser.newContext: Target page, context or browser has been closed
- **captures** : browser.newContext: Target page, context or browser has been closed
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 156 min de travail pour 130 min de budget, 17 min d’attente de l’utilisateur.
- Journal : « construction : accueil (avec 6 regards du directeur artistique) » 119 min pour 45 prévues.
- Audit standard : étapes lourdes sur /, /contact, /formules, /ludo, /soirees.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Bords de l’écran : 0 images d’intro, 0 de voile et 0 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,grille,mesures,films,bords,parcours,ecran,fluidite,mouvement,vitesse,captures
```
