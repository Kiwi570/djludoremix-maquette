# Rapport d’audit

Projet : `djludoremix-maquette` · 16/11/2026 15:53:53 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261116-143554-standard` · version ?v=2
- Échecs : **1**
- À regarder : **6**
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
| **20261116-143554-standard** (celle-ci) | standard | toutes | toutes | 1 | 6 | 1 | échecs |

## Échecs

### contraste sur image (1)

- **contraste sur image** — `/formules` — body#haut > div.barre-masquee:nth-of-type(5) > a.bouton.bouton--contour:nth-of-type(1) « Appeler » — 2.84:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

## À regarder

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/contact` — 218 × 45 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### texte de contenu sous 13 px (ordinateur) (1)

- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.devis-grille > div.devis-tete:nth-of-type(1) > aside.affiche > p.affiche-sur:nth-of-type(1) « DJ LUDO REMIX PRÉSENTE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### fluidité (2)

- **fluidité** — `/` — 4 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_
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
- Journal v2 : 1 étape(s) notée(s), 10 min de travail pour 10 min de budget, 2 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /formules, /ludo, /soirees.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2651 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2417 ms depuis le premier octet
- Ouverture /formules (1366×768) : 2417 ms depuis le premier octet
- Ouverture /ludo (1366×768) : 2419 ms depuis le premier octet
- Ouverture /soirees (1366×768) : 2403 ms depuis le premier octet
- Ouverture / (390×844) : 2595 ms depuis le premier octet
- Ouverture /contact (390×844) : 2333 ms depuis le premier octet
- Ouverture /formules (390×844) : 2416 ms depuis le premier octet
- Ouverture /ludo (390×844) : 2395 ms depuis le premier octet
- Ouverture /soirees (390×844) : 2386 ms depuis le premier octet
- film de l'ouverture /soirees 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 312 images d’intro, 18 de voile et 204 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /formules : aucune section épinglée ou plein écran.
- Tient dans l'écran /ludo : aucune section épinglée ou plein écran.
- Tient dans l'écran /soirees : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 130, tâche la plus longue 0 ms
- Fluidité /ludo 1366×768 (molette) : 0 % d'images lentes sur 426, tâche la plus longue 0 ms
- Fluidité /soirees 1366×768 (molette) : 1 % d'images lentes sur 330, tâche la plus longue 57 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1393, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1414, tâche la plus longue 0 ms
- Fluidité /formules 390×844 (doigt) : 0 % d'images lentes sur 1371, tâche la plus longue 0 ms
- Fluidité /ludo 390×844 (doigt) : 0 % d'images lentes sur 1381, tâche la plus longue 0 ms
- Fluidité /soirees 390×844 (doigt) : 0 % d'images lentes sur 1430, tâche la plus longue 0 ms
- Vitesse / : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.27 s de calcul au chargement (téléphone ralenti).
- Vitesse /formules : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /ludo : 0.23 s de calcul au chargement (téléphone ralenti).
- Vitesse /soirees : 0.26 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/formules --seulement=fichiers,mesures
```
