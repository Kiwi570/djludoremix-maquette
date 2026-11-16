# Rapport d’audit

Projet : `djludoremix-maquette` · 13/11/2026 16:37:24 · 14 min · 5 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/soirees,/formules,/ludo,/contact

## Résumé

- Statut : **41 échec(s)**
- Passe : `20261113-152344-rapide-cible` · version ?v=1
- Échecs : **41**
- À regarder : **4**
- Non lancé : **5**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (30), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (5), liens et boutons (5), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (10), souris immobile (2)

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
| **20261113-152344-rapide-cible** (celle-ci) | rapide | /,/soirees,/formules,/ludo,/contact | toutes | 41 | 4 | 5 | échecs |

## Échecs

### zone tactile sous 44 px (5)

- **zone tactile sous 44 px** — `/` — nav > ul > li:nth-of-type(4) > a « Ludo » — 36 × 44 px _(390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/contact` — nav > ul > li:nth-of-type(4) > a « Ludo » — 36 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/formules` — nav > ul > li:nth-of-type(4) > a « Ludo » — 36 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/ludo` — nav > ul > li:nth-of-type(4) > a « Ludo » — 36 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/soirees` — nav > ul > li:nth-of-type(4) > a « Ludo » — 36 × 44 px _(390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### textes qui se chevauchent (29)

- **textes qui se chevauchent** — `/` — section#debut > div.hero-texte:nth-of-type(2) > h1.hero-titre > span.hero-ligne:nth-of-type(1) « VOTRE SOIRÉE » — avec section#debut > div.hero-texte:nth-of-type(2) > h1.hero-titre > span.laser-titre.hero-ligne:nth-of-type(2) « EN PLEIN FEUX » _(390×844 normal, 390×844 sansWebgl, 844×390 normal, 1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.ouv-contact-texte:nth-of-type(1) > h1 > span.hero-ligne:nth-of-type(1) « RÉSERVEZ » — avec section#debut > div.ouv-contact-texte:nth-of-type(1) > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « VOTRE DATE » _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 1366×768 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.ouv-contact-texte:nth-of-type(1) > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « VOTRE DATE » — avec section#debut > div.ouv-contact-texte:nth-of-type(1) > p.ouv-contact-tel:nth-of-type(2) > a « 07 61 59 61 17 » _(1366×768 normal)_
- **textes qui se chevauchent** — `/formules` — section#debut > div.ouv-formules-texte > h1 > span.hero-ligne:nth-of-type(1) « COMPOSEZ » — avec section#debut > div.ouv-formules-texte > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « VOTRE LUMIÈRE » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/ludo` — section#debut > div.ouv-ludo-texte > h1 > span.hero-ligne:nth-of-type(1) « DERRIÈRE » — avec section#debut > div.ouv-ludo-texte > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « LES PLATINES » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#debut > div.ouv-soirees-texte.conteneur > h1.ouv-soirees-titre > span.hero-ligne:nth-of-type(1) « TOUTES LES FÊTES, » — avec section#debut > div.ouv-soirees-texte.conteneur > h1.ouv-soirees-titre > span.laser-titre.hero-ligne:nth-of-type(2) « UN SEUL DJ » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(1) « ANNIVERSAIRES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(3) « COUSINADES » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(2) « MARIAGES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(4) « GARDEN PARTIES » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(3) « COUSINADES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(5) « COMMUNIONS » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(4) « GARDEN PARTIES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(6) « DÉPARTS EN RETRAITE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(5) « COMMUNIONS » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(7) « FÊTES VOTIVES » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(6) « DÉPARTS EN RETRAITE » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(8) « BALS » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(6) « DÉPARTS EN RETRAITE » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(9) « KERMESSES » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(7) « FÊTES VOTIVES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(10) « ARBRES DE NOËL » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(8) « BALS » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(11) « BODEGAS » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(9) « KERMESSES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(11) « BODEGAS » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(10) « ARBRES DE NOËL » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(12) « SOIRÉES DE CAMPING » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(11) « BODEGAS » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(12) « SOIRÉES DE CAMPING » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(11) « BODEGAS » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(13) « SÉMINAIRES » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(12) « SOIRÉES DE CAMPING » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(14) « SOIRÉES DE GALA » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(12) « SOIRÉES DE CAMPING » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(15) « INAUGURATIONS » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(13) « SÉMINAIRES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(15) « INAUGURATIONS » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(14) « SOIRÉES DE GALA » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(16) « SOIRÉES ÉTUDIANTES » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(15) « INAUGURATIONS » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(16) « SOIRÉES ÉTUDIANTES » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(16) « SOIRÉES ÉTUDIANTES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(17) « DÎNERS DANSANTS » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#bodega > div.concept-texte.conteneur > p.surtitre:nth-of-type(1) « CONCEPT MAISON » — avec section#bodega > div.concept-texte.conteneur > h2.concept-titre « TOTAL BODEGA » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#bodega > div.concept-texte.conteneur > h2.concept-titre « TOTAL BODEGA » — avec section#bodega > div.concept-texte.conteneur > p:nth-of-type(2) « L'ambiance des ferias : rythmes latins, cuivres et » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#kitsch > div.concept-texte.conteneur > p.surtitre:nth-of-type(1) « CONCEPT MAISON » — avec section#kitsch > div.concept-texte.conteneur > h2.concept-titre.concept-titre--neon « KITSCH PARTY » _(1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#kitsch > div.concept-texte.conteneur > h2.concept-titre.concept-titre--neon « KITSCH PARTY » — avec section#kitsch > div.concept-texte.conteneur > p:nth-of-type(2) « La variété française des années 80 et 90, celle qu » _(1366×768 normal)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(2) > p.hero-cles:nth-of-type(4) « dès 400 € formule son et lumière 50 km déplacement » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/soirees` — section#debut > div.ouv-soirees-texte.conteneur > p.hero-actions:nth-of-type(3) > span.hero-info « Réponse sous 48 h » _(320×568 sansJs)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/contact` — section#reseaux > figure.media.reseaux-photo > picture > img « Lasers vert et rose au-dessus de la piste d'une sa » — salle-laser-1 (2/5, faible, 39 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### section sans visuel (1)

- **section sans visuel** — `/formules` — section#tableau « LES CINQ FORMULES CÔTE À CÔTE 1ER PRIX 400 € Anniv » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_

### fluidité (2)

- **fluidité** — `/` — 18 % d'images de plus de 50 ms, tâche la plus longue 115 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_
- **fluidité** — `/` — 20 % d'images de plus de 50 ms, tâche la plus longue 118 ms _(390×844 défilement au doigt, processeur ralenti 4 fois)_

### effet du plan absent (1)

- **effet du plan absent** — « pupitre-apercu » : aucun élément data-effet="pupitre-apercu"

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `index.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — button.bouton — date-laser : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **souris immobile /formules incline** : page.screenshot: Target page, context or browser has been closed
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
- Journal v1 : 2 étape(s) notée(s), 27 min de travail pour 50 min de budget, 15 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /, /contact, /formules, /ludo, /soirees.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2640 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2485 ms depuis le premier octet
- Ouverture /formules (1366×768) : 2515 ms depuis le premier octet
- film de l'ouverture /formules 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /ludo (1366×768) : 2480 ms depuis le premier octet
- Ouverture /soirees (1366×768) : 2494 ms depuis le premier octet
- Ouverture / (390×844) : 2506 ms depuis le premier octet
- Ouverture /contact (390×844) : 2384 ms depuis le premier octet
- Ouverture /formules (390×844) : 2464 ms depuis le premier octet
- Ouverture /ludo (390×844) : 2429 ms depuis le premier octet
- film de l'ouverture /ludo 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /soirees (390×844) : 2443 ms depuis le premier octet
- film de l'ouverture /soirees 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran / 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /formules 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 249 images d’intro, 19 de voile et 163 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /formules : aucune section épinglée ou plein écran.
- Tient dans l'écran /ludo : aucune section épinglée ou plein écran.
- Tient dans l'écran /soirees : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 137, tâche la plus longue 0 ms
- Fluidité /formules 1366×768 (molette) : 1 % d'images lentes sur 186, tâche la plus longue 53 ms
- Fluidité /ludo 1366×768 (molette) : 0 % d'images lentes sur 300, tâche la plus longue 64 ms
- Fluidité /soirees 1366×768 (molette) : 2 % d'images lentes sur 316, tâche la plus longue 91 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1360, tâche la plus longue 0 ms
- Fluidité /formules 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /ludo 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /soirees 390×844 (doigt) : 0 % d'images lentes sur 1431, tâche la plus longue 0 ms

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,fluidite,mouvement,vitesse,captures
```
