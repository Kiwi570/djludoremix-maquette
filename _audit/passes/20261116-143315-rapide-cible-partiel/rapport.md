# Rapport d’audit

Projet : `djludoremix-maquette` · 16/11/2026 15:33:56 · 1 min · 4 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/contact,/formules,/ludo (étapes : fichiers, mesures)

## Résumé

- Statut : **5 échec(s)**
- Passe : `20261116-143315-rapide-cible-partiel` · version ?v=1
- Échecs : **5**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (24)

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
| 20261116-141553-rapide-cible | rapide | /,/formules,/ludo,/contact,/soirees | toutes | 23 | 6 | 1 | échecs |
| **20261116-143315-rapide-cible-partiel** (celle-ci) | rapide | /,/contact,/formules,/ludo | fichiers, mesures | 5 | 1 | 0 | échecs |

## Échecs

### contraste sur image (1)

- **contraste sur image** — `/formules` — body#haut > div.barre-masquee:nth-of-type(5) > a.bouton.bouton--contour:nth-of-type(1) « Appeler » — 2.85:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

### accessibilité (axe) : color-contrast (2)

- **accessibilité (axe) : color-contrast** — `/ludo` — a[data-action-principale=""] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/ludo` — .surtitre ; .hero-ligne[data-anime="gsap"] ; .laser-titre — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/ludo` — div.ouv-lettres-texte.conteneur:nth-of-type(2) > div.ouv-lettres-cote > p.hero-actions:nth-of-type(2) > a.bouton « Lui confier ma soirée → » _(390×844 sansJs, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/ludo` — div.ouv-lettres-texte.conteneur:nth-of-type(2) > div.ouv-lettres-cote > p.hero-actions:nth-of-type(2) > span.hero-info « Résident des Bodega Feria depuis 2011 » _(390×844 sansJs, 320×568 sansJs)_

## À regarder

### texte de contenu sous 13 px (ordinateur) (1)

- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.devis-grille > div.devis-tete:nth-of-type(1) > aside.affiche > p.affiche-sur:nth-of-type(1) « DJ LUDO REMIX PRÉSENTE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 4326 min de travail pour 175 min de budget, 18 min d’attente de l’utilisateur.
- Journal : « construction : accueil (avec 6 regards du directeur artistique) » 119 min pour 45 prévues.
- Journal : « audit, regard neuf et corrections » 4160 min pour 35 prévues.
- Audit rapide : étapes lourdes sur /, /contact, /formules, /ludo.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --pages=/,/formules,/ludo --seulement=fichiers,mesures
```
