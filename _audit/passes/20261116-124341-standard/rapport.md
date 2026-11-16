# Rapport d’audit

Projet : `djludoremix-maquette` · 16/11/2026 14:01:11 · 17 min · 6 page(s) · audit standard

## Résumé

- Statut : **23 échec(s)**
- Passe : `20261116-124341-standard` · version ?v=1
- Échecs : **23**
- À regarder : **6**
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
| **20261116-124341-standard** (celle-ci) | standard | toutes | toutes | 23 | 6 | 1 | échecs |

## Échecs

### texte coupé (1)

- **texte coupé** — `/` — div.scene-console:nth-of-type(7) > form.pupitre-table > div.pupitre-resultat:nth-of-type(2) > p.pupitre-detail:nth-of-type(4) « 2 lyres LED · 1 laser · Brouillard · 1 projecteur  » — le contenu dépasse de son cadre _(768×1024 normal)_

### section sans visuel (1)

- **section sans visuel** — `/` — section#formules « LES FORMULES AU PUPITRE CINQ FORMULES, CINQ VRAIS  » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +5)_

### zone tactile sous 44 px (5)

- **zone tactile sous 44 px** — `/` — input#p-lyres — 40 × 101 px _(390×844 normal, 320×568 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — input#p-lasers — 40 × 101 px _(390×844 normal, 320×568 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — input#p-uv — 40 × 101 px _(390×844 normal, 320×568 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — input#p-disco — 40 × 101 px _(390×844 normal, 320×568 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — input#p-fin — 40 × 101 px _(390×844 normal, 320×568 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### erreur de console ou ressource (1)

- **erreur de console ou ressource** — `/` — console : [site] pupitre TypeError: Cannot read properties of null (reading 'getContext')
    at unPupitre (http://127.0.0.1:39907/assets/js/site.js?v=1:330:47)
    at Array.forEach (<anonymous>)
    at pupitre _(320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansWebgl, 390×844 normal, 1920×1080 normal, +15)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/` — div.date-mur > figure.media.date-photo > picture > img — bars-ludo (4/5, faible, 28 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### textes qui se chevauchent (10)

- **textes qui se chevauchent** — `/` — div.scene-collant > div.scene-texte.conteneur:nth-of-type(6) > h1.hero-titre > span.hero-ligne:nth-of-type(1) « VOTRE SOIRÉE » — avec div.scene-collant > div.scene-texte.conteneur:nth-of-type(6) > h1.hero-titre > span.laser-titre.hero-ligne:nth-of-type(2) « EN PLEIN FEUX » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — form.pupitre-table > div.pupitre-resultat:nth-of-type(2) > p.pupitre-prix:nth-of-type(3) > span « 400 € » — avec section#debut > div.scene-collant > p.hero-astuce > span.astuce-doigt:nth-of-type(2) « GLISSEZ POUR BOUGER LA LUMIÈRE » _(390×844 sansJs)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.ouv-contact-texte:nth-of-type(1) > h1 > span.hero-ligne:nth-of-type(1) « RÉSERVEZ » — avec section#debut > div.ouv-contact-texte:nth-of-type(1) > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « VOTRE DATE » _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/formules` — section#debut > div.ouv-formules-texte > h1 > span.hero-ligne:nth-of-type(1) « COMPOSEZ » — avec section#debut > div.ouv-formules-texte > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « VOTRE LUMIÈRE » _(320×568 normal, 768×1024 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/ludo` — section#debut > div.ouv-ludo-texte > h1 > span.hero-ligne:nth-of-type(1) « DERRIÈRE » — avec section#debut > div.ouv-ludo-texte > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « LES PLATINES » _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/soirees` — section#debut > div.ouv-soirees-texte.conteneur > h1.ouv-soirees-titre > span.hero-ligne:nth-of-type(1) « TOUTES LES FÊTES, » — avec section#debut > div.ouv-soirees-texte.conteneur > h1.ouv-soirees-titre > span.laser-titre.hero-ligne:nth-of-type(2) « UN SEUL DJ » _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/soirees` — article#privee > div.public-texte > span.public-num « 01 » — avec article#privee > div.public-texte > h3 « SOIRÉES PRIVÉES » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/soirees` — article#publique > div.public-texte > span.public-num « 02 » — avec article#publique > div.public-texte > h3 « FÊTES DE VILLAGE » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/soirees` — article#entreprise > div.public-texte > span.public-num « 03 » — avec article#entreprise > div.public-texte > h3 « ENTREPRISES » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/soirees` — article#bar > div.public-texte > span.public-num « 04 » — avec article#bar > div.public-texte > h3 « BARS ET RESTAURANTS » _(1920×1080 normal)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > span.introuvable-spot _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/soirees` — section#debut > div.ouv-soirees-texte.conteneur > p.hero-actions:nth-of-type(3) > span.hero-info « Réponse sous 48 h » _(320×568 sansJs, 1366×768 sansJs)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/soirees` — section#debut > div.ouv-soirees-texte.conteneur > p.hero-actions:nth-of-type(3) > a.bouton « Demander un devis → » _(1366×768 sansJs)_

### effet qui dérive sous la souris immobile (1)

- **effet qui dérive sous la souris immobile** — `/` — [data-souris] faisceau — l’image change encore 1.3 % plus qu’au repos, 1,5 à 4,5 s après l’arrêt de la souris _(1366×768 souris)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `index.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

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
- Ouverture / (1366×768) : 2689 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2487 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /formules (1366×768) : 2493 ms depuis le premier octet
- film de l'ouverture /formules 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /ludo (1366×768) : 2386 ms depuis le premier octet
- film de l'ouverture /ludo 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /soirees (1366×768) : 2487 ms depuis le premier octet
- Ouverture / (390×844) : 2551 ms depuis le premier octet
- Ouverture /contact (390×844) : 2430 ms depuis le premier octet
- Ouverture /formules (390×844) : 2559 ms depuis le premier octet
- film de l'ouverture /formules 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /ludo (390×844) : 2455 ms depuis le premier octet
- Ouverture /soirees (390×844) : 2436 ms depuis le premier octet
- Bords de l’écran : 316 images d’intro, 25 de voile et 190 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /formules : aucune section épinglée ou plein écran.
- Tient dans l'écran /ludo : aucune section épinglée ou plein écran.
- Tient dans l'écran /soirees : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 304, tâche la plus longue 64 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 135, tâche la plus longue 0 ms
- Fluidité /formules 1366×768 (molette) : 0 % d'images lentes sur 174, tâche la plus longue 0 ms
- Fluidité /ludo 1366×768 (molette) : 0 % d'images lentes sur 286, tâche la plus longue 52 ms
- Fluidité /soirees 1366×768 (molette) : 0 % d'images lentes sur 342, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1411, tâche la plus longue 56 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /formules 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /ludo 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /soirees 390×844 (doigt) : 0 % d'images lentes sur 1408, tâche la plus longue 0 ms
- Vitesse / : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /formules : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /ludo : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /soirees : 0.25 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/contact,/formules,/ludo,/soirees --seulement=fichiers,mesures,mouvement
```
