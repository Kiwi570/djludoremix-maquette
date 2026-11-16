# Rapport d’audit

Projet : `djludoremix-maquette` · 16/11/2026 15:35:04 · 1 min · 3 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/formules,/ludo (étapes : fichiers, mesures)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261116-143429-rapide-cible-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **0**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (18)

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
| 20261116-143315-rapide-cible-partiel | rapide | /,/contact,/formules,/ludo | fichiers, mesures | 5 | 1 | 0 | échecs |
| **20261116-143429-rapide-cible-partiel** (celle-ci) | rapide | /,/formules,/ludo | fichiers, mesures | 1 | 0 | 0 | échecs |

## Échecs

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/ludo` — a[data-action-principale=""] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

## À regarder

Rien.

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 4326 min de travail pour 175 min de budget, 18 min d’attente de l’utilisateur.
- Journal : « construction : accueil (avec 6 regards du directeur artistique) » 119 min pour 45 prévues.
- Journal : « audit, regard neuf et corrections » 4160 min pour 35 prévues.
- Audit rapide : étapes lourdes sur /, /formules, /ludo.
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
node _audit/audit.mjs --rapide --pages=/,/ludo --seulement=fichiers,mesures
```
