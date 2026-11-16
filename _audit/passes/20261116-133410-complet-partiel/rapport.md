# Rapport d’audit

Projet : `djludoremix-maquette` · 16/11/2026 14:39:54 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **5 échec(s)**
- Passe : `20261116-133410-complet-partiel` · version ?v=1
- Échecs : **5**
- À regarder : **0**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

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
| **20261116-133410-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 5 | 0 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/` — div.scene-console:nth-of-type(7) > form.pupitre-table > div.pupitre-resultat:nth-of-type(2) > p.pupitre-prix:nth-of-type(3) « 400 € » _(844×390 sansJs, 1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.ouv-contact-texte:nth-of-type(1) > p.hero-actions:nth-of-type(4) > span.hero-info « Réponse sous 48 h · Pont-Saint-Esprit · Gard » _(1000×560 normal, 1000×560 sansJs, 1280×720 sansJs, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/ludo` — section#debut > div.ouv-ludo-texte > p.hero-actions:nth-of-type(3) > span.hero-info « Résident des Bodega Feria depuis 2011 » _(1000×560 sansJs)_

### contraste sur image (1)

- **contraste sur image** — `/formules` — body#haut > div.barre-masquee:nth-of-type(5) > a.bouton.bouton--contour:nth-of-type(1) « Appeler » — 1.69:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/formules` — section#debut > div.ouv-formules-texte > p:nth-of-type(4) > a.bouton « Aller au pupitre ↓ » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

## À regarder

Rien.

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /formules : aucune section épinglée ou plein écran.
- Tient dans l'écran /ludo : aucune section épinglée ou plein écran.
- Tient dans l'écran /soirees : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/contact,/formules,/ludo --seulement=fichiers,mesures
```
