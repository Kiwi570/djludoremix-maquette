# Rapport d’audit

Projet : `djludoremix-maquette` · 16/11/2026 17:57:46 · 4 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /soirees

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261116-165337-rapide-cible` · version ?v=2
- Échecs : **4**
- À regarder : **0**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (9), liens vers la page en cours (1), changements de hauteur (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (13), vitesse (1), captures (1)

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
| 20261116-152513-standard | standard | toutes | toutes | 0 | 4 | 1 | complet |
| 20261116-154305-complet-partiel | complet | toutes | mesures, ecran | 0 | 0 | 0 | complet |
| **20261116-165337-rapide-cible** (celle-ci) | rapide | /soirees | toutes | 4 | 0 | 1 | échecs |

## Échecs

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/soirees` — article#bodega > figure.media.concept-fond > figcaption.mention-ia « Illustration générée » — avec article#bodega > div.concept-texte > p:nth-of-type(2) « L'ambiance des ferias : rythmes latins, cuivres et » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — article#kitsch > figure.media.concept-fond > figcaption.mention-ia « Illustration générée » — avec article#kitsch > div.concept-texte > p:nth-of-type(2) « La variété française des années 80 et 90, celle qu » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### élément recouvert (2)

- **élément recouvert** — `/soirees` — article#bodega > div.concept-texte > h3.concept-titre « TOTAL BODEGA » — par article#bodega > figure.media.concept-fond > picture _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/soirees` — article#kitsch > div.concept-texte > h3.concept-titre.concept-titre--neon « KITSCH PARTY » — par article#kitsch > figure.media.concept-fond > picture _(390×844 normal, 1366×768 normal)_

## À regarder

Rien.

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
- Journal v2 : 4 étape(s) notée(s), 104 min de travail pour 135 min de budget, 13 min d’attente de l’utilisateur.
- Journal : « images Grok v2, audit standard et formats, livraison » 42 min pour 20 prévues.
- Audit rapide : étapes lourdes sur /soirees.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture /soirees (1366×768) : 2458 ms depuis le premier octet
- Ouverture /soirees (390×844) : 2481 ms depuis le premier octet
- film de l'ouverture /soirees 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 69 images d’intro, 7 de voile et 34 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /soirees : aucune section épinglée ou plein écran.
- Fluidité /soirees 1366×768 (molette) : 0 % d'images lentes sur 335, tâche la plus longue 0 ms
- Fluidité /soirees 390×844 (doigt) : 0 % d'images lentes sur 1438, tâche la plus longue 0 ms
- Vitesse /soirees : 0.33 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --pages=/,/soirees --seulement=fichiers,mesures
```
