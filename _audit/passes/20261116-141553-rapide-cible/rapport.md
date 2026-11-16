# Rapport d’audit

Projet : `djludoremix-maquette` · 16/11/2026 15:31:58 · 16 min · 5 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/formules,/ludo,/contact,/soirees

## Résumé

- Statut : **23 échec(s)**
- Passe : `20261116-141553-rapide-cible` · version ?v=1
- Échecs : **23**
- À regarder : **6**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (30), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (5), liens et boutons (5), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (13), souris immobile (2), vitesse (5), captures (1)

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
| 20261116-131312-standard | standard | toutes | toutes | 3 | 8 | 1 | échecs |
| 20261116-133114-standard-cible-partiel | standard | /,/contact | fichiers, mesures, mouvement | 0 | 5 | 0 | complet |
| 20261116-133301-complet-partiel | complet | toutes | mesures, ecran | 0 | 0 | 236 | INCOMPLET |
| 20261116-133320-standard-cible-partiel | standard | /,/contact | fichiers, mesures | 0 | 0 | 0 | complet |
| 20261116-133410-complet-partiel | complet | toutes | mesures, ecran | 5 | 0 | 0 | échecs |
| 20261116-134330-complet-cible-partiel | complet | /,/contact,/formules,/ludo | fichiers, mesures | 2 | 0 | 0 | échecs |
| 20261116-134854-complet-cible-partiel | complet | /,/contact,/formules,/ludo | fichiers, mesures | 1 | 0 | 0 | échecs |
| 20261116-135306-complet-cible-partiel | complet | /,/contact | fichiers, mesures | 0 | 0 | 0 | complet |
| **20261116-141553-rapide-cible** (celle-ci) | rapide | /,/formules,/ludo,/contact,/soirees | toutes | 23 | 6 | 1 | échecs |

## Échecs

### section sans visuel (4)

- **section sans visuel** — `/contact` — section#debut « CONTACT RÉSERVEZ VOTRE DATE 07 61 59 61 17 Appelez » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **section sans visuel** — `/contact` — section#devis « DEMANDE DE DEVIS DJ LUDO REMIX PRÉSENTE VOTRE SOIR » _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 1366×768 normal, 390×844 sansWebgl)_
- **section sans visuel** — `/contact` — section#debut « CONTACT RÉSERVEZ VOTRE DATE 07 61 59 61 17 Demande » _(320×568 sansJs)_
- **section sans visuel** — `/ludo` — section#livre « LE LIVRE D'OR 286 messages sur le site. Quelques e » _(390×844 normal, 390×844 sansJs, 844×390 normal, 1366×768 normal, 320×568 sansJs, 390×844 sansWebgl)_

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/contact` — section#debut > p.ouv-numero-tel.conteneur > a.laser-titre « 07 61 59 61 17 » — 175 × 36 px _(320×568 sansJs)_

### contraste sur image (1)

- **contraste sur image** — `/contact` — section#debut > p.ouv-numero-tel.conteneur > a.laser-titre.trace-en-cours « 07 61 59 61 17 » — 2.66:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/contact` — .affiche-date ; span[data-affiche-champ="invites"] ; span[data-affiche-champ="formule"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

### texte sous 12 px (5)

- **texte sous 12 px** — `/formules` — ol.vumetre > li.vu-col:nth-of-type(1) > a.vu-lien > span.vu-nom:nth-of-type(3) « 1ER PRIX » — 11.8 px _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **texte sous 12 px** — `/formules` — ol.vumetre > li.vu-col:nth-of-type(2) > a.vu-lien > span.vu-nom:nth-of-type(3) « ASSOCIATION » — 11.8 px _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **texte sous 12 px** — `/formules` — ol.vumetre > li.vu-col:nth-of-type(3) > a.vu-lien > span.vu-nom:nth-of-type(3) « DE BASE » — 11.8 px _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **texte sous 12 px** — `/formules` — ol.vumetre > li.vu-col:nth-of-type(4) > a.vu-lien > span.vu-nom:nth-of-type(3) « BLACKLIGHT » — 11.8 px _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **texte sous 12 px** — `/formules` — ol.vumetre > li.vu-col:nth-of-type(5) > a.vu-lien > span.vu-nom:nth-of-type(3) « UNLIMITED » — 11.8 px _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_

### textes qui se chevauchent (3)

- **textes qui se chevauchent** — `/formules` — div.salle-scene-console.conteneur:nth-of-type(3) > form.pupitre-table > div.pupitre-resultat:nth-of-type(2) > p.pupitre-nom:nth-of-type(2) « 1ER PRIX » — avec form.pupitre-table > div.pupitre-resultat:nth-of-type(2) > p.pupitre-prix:nth-of-type(3) > span « 400 € » _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/ludo` — section#debut > div.ouv-lettres-collant > div.ouv-lettres-masque:nth-of-type(1) > span « LUDO » — avec section#debut > div.ouv-lettres-collant > div.ouv-lettres-texte.conteneur:nth-of-type(2) > p.surtitre « LUDO » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/ludo` — section#debut > div.ouv-lettres-collant > div.ouv-lettres-masque:nth-of-type(1) > span « LUDO » — avec div.ouv-lettres-collant > div.ouv-lettres-texte.conteneur:nth-of-type(2) > h1 > span.hero-ligne:nth-of-type(1) « DERRIÈRE » _(320×568 sansJs)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/formules` — div.ouv-vu-tete.conteneur > div.ouv-vu-cote > p:nth-of-type(3) > a.bouton « Aller au pupitre ↓ » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/ludo` — div.ouv-lettres-texte.conteneur:nth-of-type(2) > div.ouv-lettres-cote > p.hero-actions:nth-of-type(2) > a.bouton « Lui confier ma soirée → » _(320×568 sansJs)_

### texte coupé (5)

- **texte coupé** — `/ludo` — div.frise2-fenetre:nth-of-type(3) > ol.frise2-piste > li.frise2-item.a-brule:nth-of-type(2) > span.frise2-annee « JUIN 2010 » — coupé par section#parcours > div.frise2-collant > div.frise2-fenetre:nth-of-type(3) « AU DÉBUT UNE CHAMBRE, DEUX PLATINES Ludo commence  » _(390×844 normal, 390×844 sansWebgl)_
- **texte coupé** — `/ludo` — div.frise2-fenetre:nth-of-type(3) > ol.frise2-piste > li.frise2-item.a-brule:nth-of-type(2) > h3 « LES BODEGA FERIA » — coupé par section#parcours > div.frise2-collant > div.frise2-fenetre:nth-of-type(3) « AU DÉBUT UNE CHAMBRE, DEUX PLATINES Ludo commence  » _(390×844 normal, 390×844 sansWebgl)_
- **texte coupé** — `/ludo` — div.frise2-fenetre:nth-of-type(3) > ol.frise2-piste > li.frise2-item.a-brule:nth-of-type(2) > p « Il devient l'un des DJ de l'événementiel Bodega Fe » — coupé par section#parcours > div.frise2-collant > div.frise2-fenetre:nth-of-type(3) « AU DÉBUT UNE CHAMBRE, DEUX PLATINES Ludo commence  » _(390×844 normal, 390×844 sansWebgl)_
- **texte coupé** — `/ludo` — section#debut > div.ouv-lettres-collant > div.ouv-lettres-masque:nth-of-type(1) > span « LUDO » — coupé par section#debut > div.ouv-lettres-collant « LUDO LUDO DERRIÈRE LES PLATINES Élevé à Béziers, L » _(390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/ludo` — section#debut > div.ouv-lettres-collant > div.ouv-lettres-masque:nth-of-type(1) > span « LUDO » — coupé par section#debut > div.ouv-lettres-collant « LUDO LUDO DERRIÈRE LES PLATINES Lui confier ma soi » _(1366×768 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/ludo` — div.ouv-lettres-texte.conteneur:nth-of-type(2) > div.ouv-lettres-cote > p.hero-actions:nth-of-type(2) > span.hero-info « Résident des Bodega Feria depuis 2011 » _(390×844 sansJs, 320×568 sansJs)_

## À regarder

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/contact` — 218 × 45 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### texte de contenu sous 13 px (ordinateur) (1)

- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.devis-grille > div.devis-tete:nth-of-type(1) > aside.affiche > p.affiche-sur:nth-of-type(1) « DJ LUDO REMIX PRÉSENTE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### fluidité (1)

- **fluidité** — `/formules` — 10 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

### effet qui ne bouge pas au défilement (2)

- **effet qui ne bouge pas au défilement** — `/` — section#debut.scene — faisceau : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — button.bouton — date-laser : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

### effet qui dérive sous la souris immobile (1)

- **effet qui dérive sous la souris immobile** — `/` — [data-souris] show-laser — léger changement (0.5 %) 1,5 à 4,5 s après l’arrêt de la souris _(1366×768 souris)_

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
- Journal v1 : 6 étape(s) notée(s), 4326 min de travail pour 175 min de budget, 18 min d’attente de l’utilisateur.
- Journal : « construction : accueil (avec 6 regards du directeur artistique) » 119 min pour 45 prévues.
- Journal : « audit, regard neuf et corrections » 4160 min pour 35 prévues.
- Audit rapide : étapes lourdes sur /, /contact, /formules, /ludo, /soirees.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2749 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2399 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /formules (1366×768) : 2452 ms depuis le premier octet
- Ouverture /ludo (1366×768) : 2457 ms depuis le premier octet
- Ouverture /soirees (1366×768) : 2396 ms depuis le premier octet
- Ouverture / (390×844) : 2611 ms depuis le premier octet
- Ouverture /contact (390×844) : 2394 ms depuis le premier octet
- Ouverture /formules (390×844) : 2455 ms depuis le premier octet
- film de l'ouverture /formules 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /ludo (390×844) : 2375 ms depuis le premier octet
- Ouverture /soirees (390×844) : 2407 ms depuis le premier octet
- Bords de l’écran : 302 images d’intro, 8 de voile et 173 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /formules : aucune section épinglée ou plein écran.
- Tient dans l'écran /ludo : aucune section épinglée ou plein écran.
- Tient dans l'écran /soirees : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 2 % d'images lentes sur 252, tâche la plus longue 77 ms
- Fluidité /contact 1366×768 (molette) : 1 % d'images lentes sur 132, tâche la plus longue 0 ms
- Fluidité /ludo 1366×768 (molette) : 0 % d'images lentes sur 438, tâche la plus longue 0 ms
- Fluidité /soirees 1366×768 (molette) : 1 % d'images lentes sur 332, tâche la plus longue 52 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1411, tâche la plus longue 67 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /formules 390×844 (doigt) : 0 % d'images lentes sur 1361, tâche la plus longue 0 ms
- Fluidité /ludo 390×844 (doigt) : 0 % d'images lentes sur 1365, tâche la plus longue 0 ms
- Fluidité /soirees 390×844 (doigt) : 0 % d'images lentes sur 1427, tâche la plus longue 0 ms
- Vitesse / : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.23 s de calcul au chargement (téléphone ralenti).
- Vitesse /formules : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /ludo : 0.24 s de calcul au chargement (téléphone ralenti).
- Vitesse /soirees : 0.35 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --pages=/,/contact,/formules,/ludo --seulement=fichiers,mesures
```
