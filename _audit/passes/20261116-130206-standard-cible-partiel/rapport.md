# Rapport d’audit

Projet : `djludoremix-maquette` · 16/11/2026 14:06:04 · 4 min · 6 page(s) · audit standard ciblé sur /,/404,/contact,/formules,/ludo,/soirees (étapes : fichiers, mesures, mouvement)

## Résumé

- Statut : **7 échec(s)**
- Passe : `20261116-130206-standard-cible-partiel` · version ?v=1
- Échecs : **7**
- À regarder : **10**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (66), balayage (5), mouvement (10), effets du plan (11), souris immobile (2)

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
| **20261116-130206-standard-cible-partiel** (celle-ci) | standard | /,/404,/contact,/formules,/ludo,/soirees | fichiers, mesures, mouvement | 7 | 10 | 0 | échecs |

## Échecs

### contraste sur image (1)

- **contraste sur image** — `/` — section#debut > div.scene-collant > div.scene-texte.conteneur:nth-of-type(6) > p.surtitre:nth-of-type(1) « DJ, SON, LUMIÈRE ET LASER · GARD, VAUCLUSE, DRÔME, » — 3.76:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

### textes qui se chevauchent (5)

- **textes qui se chevauchent** — `/` — div.scene-collant > div.scene-texte.conteneur:nth-of-type(6) > h1.hero-titre > span.hero-ligne:nth-of-type(1) « VOTRE SOIRÉE » — avec div.scene-collant > div.scene-texte.conteneur:nth-of-type(6) > h1.hero-titre > span.laser-titre.hero-ligne:nth-of-type(2) « EN PLEIN FEUX » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.ouv-contact-texte:nth-of-type(1) > h1 > span.hero-ligne:nth-of-type(1) « RÉSERVEZ » — avec section#debut > div.ouv-contact-texte:nth-of-type(1) > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « VOTRE DATE » _(390×844 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, 390×844 sansWebgl, +2)_
- **textes qui se chevauchent** — `/formules` — section#debut > div.ouv-formules-texte > h1 > span.hero-ligne:nth-of-type(1) « COMPOSEZ » — avec section#debut > div.ouv-formules-texte > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « VOTRE LUMIÈRE » _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 390×844 sansWebgl, +1)_
- **textes qui se chevauchent** — `/ludo` — section#debut > div.ouv-ludo-texte > h1 > span.hero-ligne:nth-of-type(1) « DERRIÈRE » — avec section#debut > div.ouv-ludo-texte > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « LES PLATINES » _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, 390×844 sansWebgl, 1366×768 sansJs, +1)_
- **textes qui se chevauchent** — `/soirees` — section#debut > div.ouv-soirees-texte.conteneur > h1.ouv-soirees-titre > span.hero-ligne:nth-of-type(1) « TOUTES LES FÊTES, » — avec section#debut > div.ouv-soirees-texte.conteneur > h1.ouv-soirees-titre > span.laser-titre.hero-ligne:nth-of-type(2) « UN SEUL DJ » _(768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.ouv-contact-texte:nth-of-type(1) > p.hero-actions:nth-of-type(4) > span.hero-info « Réponse sous 48 h · Pont-Saint-Esprit · Gard » _(844×390 normal)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `index.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### typographie française (3)

- **typographie française** — `/` — div.scene-console:nth-of-type(7) > form.pupitre-table > div.pupitre-resultat:nth-of-type(2) > p.pupitre-detail:nth-of-type(4) « 2 lyres LED · 1 laser · Brouillard · 1 projecteur  » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/contact` — section#debut > div.ouv-contact-carte:nth-of-type(2) > p.rayon-legende « Dans le rayon de 50 km : déplacement compris · Au- » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/formules` — div.pupitre-grille.conteneur:nth-of-type(2) > form.pupitre-table > div.pupitre-resultat:nth-of-type(2) > p.pupitre-detail:nth-of-type(4) « 4 jeux de lumière LED · 1 laser · Brouillard · 2 e » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### effet qui ne bouge pas au défilement (3)

- **effet qui ne bouge pas au défilement** — `/` — section#debut.scene — faisceau : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — button.bouton — date-laser : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/formules` — section#pupitre.pupitre — pupitre : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

### effet qui dérive sous la souris immobile (1)

- **effet qui dérive sous la souris immobile** — `/` — [data-souris] faisceau — léger changement (0.4 %) 1,5 à 4,5 s après l’arrêt de la souris _(1366×768 souris)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 156 min de travail pour 130 min de budget, 17 min d’attente de l’utilisateur.
- Journal : « construction : accueil (avec 6 regards du directeur artistique) » 119 min pour 45 prévues.
- Audit standard : étapes lourdes sur /, /contact, /formules, /ludo, /soirees.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/contact,/formules,/ludo,/soirees --seulement=fichiers,mesures
```
