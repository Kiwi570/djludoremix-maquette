# Rapport d’audit

Projet : `djludoremix-maquette` · 16/11/2026 14:30:27 · 17 min · 6 page(s) · audit standard

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261116-131312-standard` · version ?v=1
- Échecs : **3**
- À regarder : **8**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (11), souris immobile (2), vitesse (5), captures (1)

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
| 20261113-163759-standard | standard | toutes | toutes | 0 | 3 | 104 | INCOMPLET |
| 20261116-124341-standard | standard | toutes | toutes | 23 | 6 | 1 | échecs |
| 20261116-130206-standard-cible-partiel | standard | /,/404,/contact,/formules,/ludo,/soirees | fichiers, mesures, mouvement | 7 | 10 | 0 | échecs |
| **20261116-131312-standard** (celle-ci) | standard | toutes | toutes | 3 | 8 | 1 | échecs |

## Échecs

### premier écran : titre hors de l’écran (1)

- **premier écran : titre hors de l’écran** — `/` — section#debut > div.scene-collant > div.scene-texte.conteneur:nth-of-type(6) > h1.hero-titre « VOTRE SOIRÉE EN PLEIN FEUX » — haut 63 px, bas 160 px, zone 65–568 px _(320×568 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.ouv-contact-texte:nth-of-type(1) > p.hero-actions:nth-of-type(4) > span.hero-info « Réponse sous 48 h · Pont-Saint-Esprit · Gard » _(844×390 normal)_

### effet qui dérive sous la souris immobile (1)

- **effet qui dérive sous la souris immobile** — `/` — [data-souris] faisceau — l’image change encore 0.8 % plus qu’au repos, 1,5 à 4,5 s après l’arrêt de la souris _(1366×768 souris)_

## À regarder

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### typographie française (3)

- **typographie française** — `/` — div.scene-console:nth-of-type(7) > form.pupitre-table > div.pupitre-resultat:nth-of-type(2) > p.pupitre-detail:nth-of-type(4) « 2 lyres LED · 1 laser · Brouillard · 1 projecteur  » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/contact` — section#debut > div.ouv-contact-carte:nth-of-type(2) > p.rayon-legende « Dans le rayon de 50 km : déplacement compris · Au- » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/formules` — div.pupitre-grille.conteneur:nth-of-type(2) > form.pupitre-table > div.pupitre-resultat:nth-of-type(2) > p.pupitre-detail:nth-of-type(4) « 4 jeux de lumière LED · 1 laser · Brouillard · 2 e » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### fluidité (1)

- **fluidité** — `/` — 6 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

### effet qui ne bouge pas au défilement (3)

- **effet qui ne bouge pas au défilement** — `/` — section#debut.scene — faisceau : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — button.bouton — date-laser : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/formules` — section#pupitre.pupitre — pupitre : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

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
- Ouverture / (1366×768) : 2714 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2426 ms depuis le premier octet
- Ouverture /formules (1366×768) : 2482 ms depuis le premier octet
- Ouverture /ludo (1366×768) : 2453 ms depuis le premier octet
- Ouverture /soirees (1366×768) : 2426 ms depuis le premier octet
- Ouverture / (390×844) : 2639 ms depuis le premier octet
- Ouverture /contact (390×844) : 2446 ms depuis le premier octet
- Ouverture /formules (390×844) : 2457 ms depuis le premier octet
- Ouverture /ludo (390×844) : 2387 ms depuis le premier octet
- Ouverture /soirees (390×844) : 2419 ms depuis le premier octet
- film de l'ouverture /soirees 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 363 images d’intro, 20 de voile et 195 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /formules : aucune section épinglée ou plein écran.
- Tient dans l'écran /ludo : aucune section épinglée ou plein écran.
- Tient dans l'écran /soirees : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 140, tâche la plus longue 0 ms
- Fluidité /formules 1366×768 (molette) : 0 % d'images lentes sur 174, tâche la plus longue 0 ms
- Fluidité /ludo 1366×768 (molette) : 0 % d'images lentes sur 278, tâche la plus longue 0 ms
- Fluidité /soirees 1366×768 (molette) : 0 % d'images lentes sur 334, tâche la plus longue 60 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1418, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /formules 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /ludo 390×844 (doigt) : 0 % d'images lentes sur 1333, tâche la plus longue 0 ms
- Fluidité /soirees 390×844 (doigt) : 0 % d'images lentes sur 1422, tâche la plus longue 0 ms
- Vitesse / : 0.54 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.28 s de calcul au chargement (téléphone ralenti).
- Vitesse /formules : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /ludo : 0.28 s de calcul au chargement (téléphone ralenti).
- Vitesse /soirees : 0.25 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/contact --seulement=fichiers,mesures,mouvement
```
