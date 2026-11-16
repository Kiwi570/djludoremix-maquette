# Rapport d’audit

Projet : `djludoremix-maquette` · 16/11/2026 16:42:56 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261116-152513-standard` · version ?v=2
- Échecs : **0**
- À regarder : **4**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (13), souris immobile (3), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil et 1 autre(s) page(s) |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 5 page(s) |
| 6. La scène est un geste du métier | ✓ présent | geste du métier sur /formules, / |
| 7. L’action principale a un retour physique | ✓ présent | sur /contact, / |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-143547-standard | standard | toutes | toutes | 0 | 0 | 104 | INCOMPLET |
| 20261116-143554-standard | standard | toutes | toutes | 1 | 6 | 1 | échecs |
| 20261116-145822-standard-cible-partiel | standard | /formules,/contact | fichiers, mesures | 0 | 0 | 0 | complet |
| 20261116-151113-rapide-cible-partiel | rapide | /,/formules,/ludo,/contact,/soirees | fichiers, mesures | 0 | 0 | 0 | complet |
| **20261116-152513-standard** (celle-ci) | standard | toutes | toutes | 0 | 4 | 1 | complet |

## Échecs

Aucun.

## À regarder

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/contact` — 218 × 45 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### fluidité (1)

- **fluidité** — `/formules` — 8 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

### effet qui ne bouge pas au défilement (2)

- **effet qui ne bouge pas au défilement** — `/` — section#debut.scene — faisceau : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — button.bouton — date-laser : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 3 étape(s) notée(s), 62 min de travail pour 115 min de budget, 2 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /formules, /ludo, /soirees.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2627 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2429 ms depuis le premier octet
- Ouverture /formules (1366×768) : 2425 ms depuis le premier octet
- Ouverture /ludo (1366×768) : 2383 ms depuis le premier octet
- Ouverture /soirees (1366×768) : 2449 ms depuis le premier octet
- Ouverture / (390×844) : 2582 ms depuis le premier octet
- Ouverture /contact (390×844) : 2365 ms depuis le premier octet
- Ouverture /formules (390×844) : 2452 ms depuis le premier octet
- Ouverture /ludo (390×844) : 2399 ms depuis le premier octet
- Ouverture /soirees (390×844) : 2404 ms depuis le premier octet
- bords de l’écran / 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /contact 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /soirees 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 332 images d’intro, 18 de voile et 203 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /formules : aucune section épinglée ou plein écran.
- Tient dans l'écran /ludo : aucune section épinglée ou plein écran.
- Tient dans l'écran /soirees : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 3 % d'images lentes sur 255, tâche la plus longue 61 ms
- Fluidité /contact 1366×768 (molette) : 1 % d'images lentes sur 140, tâche la plus longue 0 ms
- Fluidité /ludo 1366×768 (molette) : 0 % d'images lentes sur 442, tâche la plus longue 0 ms
- Fluidité /soirees 1366×768 (molette) : 0 % d'images lentes sur 331, tâche la plus longue 53 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1420, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1418, tâche la plus longue 0 ms
- Fluidité /formules 390×844 (doigt) : 0 % d'images lentes sur 1362, tâche la plus longue 0 ms
- Fluidité /ludo 390×844 (doigt) : 0 % d'images lentes sur 1362, tâche la plus longue 0 ms
- Fluidité /soirees 390×844 (doigt) : 0 % d'images lentes sur 1437, tâche la plus longue 0 ms
- Vitesse / : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.25 s de calcul au chargement (téléphone ralenti).
- Vitesse /formules : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /ludo : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /soirees : 0.28 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
