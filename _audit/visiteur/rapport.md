# Test « vrai visiteur » — DJ Ludo Remix

Persona : une maman qui prépare les 18 ans de sa fille dans une salle des fêtes près d'Uzès, un samedi de juin, environ 80 invités. Besoin : son et lumière jusqu'à 2 h ou 3 h.

Barème : mission 1 sans aucun geste ; missions 2 à 6 en 3 gestes au plus et 30 s au plus. Secondes = temps du parcours relevé par `visiteur.mjs` (chargement compris). Captures sous `_audit/visiteur/<dossier>/`.

## Tableau

| Mission | Format | Résultat | Gestes | Secondes | Capture |
|---|---|---|---|---|---|
| 1. Quoi, pour qui, où (premier écran) | Téléphone 390×844 | **Ratée** (où et pour qui absents) | 0 | 3,1 | `arrivee-390x844/etape-0.png` |
| 1. Quoi, pour qui, où (premier écran) | Ordinateur 1440×900 | Réussie | 0 | 4,9 | `arrivee-1440x900/etape-0.png` |
| 2. Prix de la formule (jusqu'à 3 h) | Téléphone | Réussie, à la limite | 3 | 7,0 | `prix-accueil-390x844/etape-6.png` |
| 2. Prix de la formule (jusqu'à 3 h) | Ordinateur | Réussie | 2 (net à 3) | 5,0 / 6,0 | `prix-accueil-1440x900/etape-4.png`, `etape-6.png` |
| 3. Demande de devis jusqu'à la confirmation | Téléphone | Réussie ; formulaire atteint en 1 geste, confirmation en 16 | 1 / 16 | 5,6 / 24,4 | `devis-390x844/etape-1.png` … `etape-18.png` |
| 3. Demande de devis jusqu'à la confirmation | Ordinateur | Réussie ; formulaire atteint en 1 geste, confirmation en 15 | 1 / 15 | 5,6 / 22,9 | `devis-1440x900/etape-1.png` … `etape-17.png` |
| 4. Joindre Ludo / vient-il à Uzès ? | Téléphone | Réussie (téléphone : 0 geste ; Uzès : 3 gestes) | 0 / 3 | 3,1 / 7,4 | `arrivee-390x844/etape-0.png`, `joindre-390x844/etape-3.png`, `etape-4.png` |
| 4. Joindre Ludo / vient-il à Uzès ? | Ordinateur | Réussie (téléphone : 0 geste ; Uzès : 1 geste) | 0 / 1 | 4,9 / 6,0 | `arrivee-1440x900/etape-0.png`, `joindre-1440x900/etape-1.png` |
| 5. Ce qui le distingue (30 s) | Téléphone | Réussie | 3 | 7,0 | `prix-accueil-390x844/etape-2.png`, `etape-4.png`, `etape-6.png`, `etape-10.png` |
| 5. Ce qui le distingue (30 s) | Ordinateur | Réussie | 0 à 3 | 4,9 à 6,0 | `arrivee-1440x900/etape-0.png`, `prix-accueil-1440x900/etape-6.png` |
| 6. Matériel lumière + heure en plus | Téléphone | Réussie, à la limite | 3 | 7,0 | `prix-accueil-390x844/etape-6.png` |
| 6. Matériel lumière + heure en plus | Ordinateur | **Hors barème** (heure en plus à 4 gestes) | 4 | 6,7 | `prix-accueil-1440x900/etape-8.png`, `materiel-formules-1440x900/etape-2.png` |

## Détail par mission

### 1. En arrivant, sans geste

- **Téléphone — ratée.** Le premier écran montre le logo « DJ Ludo Remix », le titre « Votre soirée en plein feux », « Demander un devis », le numéro, et un pupitre de faders (Lyres, Lasers, UV, Disco, Fin de soirée, tous à « non ») avec « 1er prix 400 € ». On comprend qu'il s'agit d'un DJ avec de la lumière, mais **aucun lieu** (ni Gard, ni Pont-Saint-Esprit) et **aucun public** (anniversaires, mariages…) : la ligne « DJ, son, lumière et laser · Gard, Vaucluse, Drôme, Ardèche » et la phrase « anniversaires, mariages, fêtes de village… » de l'ordinateur ont disparu. Le pupitre à « non / non / non / non / 1 h » est énigmatique avant d'avoir compris le principe ; « Glissez pour bouger la lumière » occupe la place de la ligne qui dirait où on est. Capture `arrivee-390x844/etape-0.png`.
- **Ordinateur — réussie.** La ligne au-dessus du titre donne quoi et où (« DJ, son, lumière et laser · Gard, Vaucluse, Drôme, Ardèche »), la phrase sous le titre donne pour qui (anniversaires, mariages, fêtes de village, soirées d'entreprise), plus le numéro, le devis et un premier prix. Capture `arrivee-1440x900/etape-0.png`.

### 2. Prix de la formule qui convient (jusqu'à 2 h ou 3 h)

- **Téléphone — réussie en 3 gestes, 7,0 s** (3 défilements sur l'accueil). La liste « Cinq formules, cinq vrais prix » montre « De base · 20 h – 3 h · 2 lyres LED · 1 laser · brouillard · 2 enceintes · 550 € » (et Association 20 h – 2 h, 500 €). Capture `prix-accueil-390x844/etape-6.png`.
  - Gêne : au premier défilement, le pupitre du haut s'anime tout seul et affiche « De base 550 € » avec « Fin de soirée : 1 h » (`etape-2.png`), alors que De base va jusqu'à 3 h : on ne sait pas si 550 € s'arrête à 1 h.
  - Gêne : par le menu (Menu → Formules), il faut **6 gestes** pour voir les cartes (`prix-390x844/etape-6.png`, `etape-7.png`) : la page Formules ouvre sur une fourchette « de 400 à 1 250 € », puis le pupitre et une grande illustration avant les formules.
- **Ordinateur — réussie** : dès 2 défilements le pupitre affiche « De base 550 € · 20 h – 3 h » (`prix-accueil-1440x900/etape-4.png`, même contradiction « Fin de soirée : 1 h »), et au 3e la liste complète est lisible (`etape-6.png`, 6,0 s).

### 3. Demander un devis jusqu'à la confirmation

Saisie : Anniversaire, 19/06/2027, Uzès, 80 invités, formule De base, nom, téléphone, message « 18 ans de ma fille… ».

- **Téléphone — réussie**, formulaire atteint en 1 geste (« Demander un devis » du premier écran, 5,6 s, `devis-390x844/etape-1.png`), confirmation « Demande reçue » en 16 gestes et 24,4 s (`etape-18.png`). Les 3 gestes du barème sont tenus pour l'accès ; le parcours complet dépasse forcément 3 gestes (12 gestes de saisie et de « Continuer » sur 5 étapes).
  - Gêne : à l'étape 1, après avoir touché « Anniversaire », le bouton « Continuer » est hors écran : il faut défiler (`etape-2.png`, `etape-3.png`).
  - Gêne : au récapitulatif, « Envoyer la demande » est sous la ligne de flottaison : encore un défilement (`etape-14.png`, `etape-16.png`).
  - Gêne : après l'envoi, le titre « Demande reçue » est **à moitié caché sous l'en-tête** ; l'écran est surtout occupé par « Suivre Ludo » (Facebook, Instagram…). La confirmation est petite et on doute un instant que ce soit parti (`etape-18.png`). Le résumé de confirmation n'indique ni la commune ni le nombre d'invités.
  - Bon point : 5 étapes nommées, choix « Anniversaire — ou cousinade, communion » qui parle, formules avec prix et horaires dans le formulaire, récapitulatif modifiable.
- **Ordinateur — réussie**, formulaire atteint en 1 geste (5,6 s, `devis-1440x900/etape-1.png`), confirmation en 15 gestes et 22,9 s (`etape-17.png`).
  - Gêne : « Envoyer la demande » hors écran au récapitulatif (1 défilement, `etape-14.png`).
  - Gêne : même titre « Demande reçue » coupé par l'en-tête fixe (`etape-17.png`).
  - Gêne légère : au récapitulatif, la colonne des valeurs se décale pour « Téléphone (obligatoire pour confirmer) » et « Ce que vous aimeriez (styles, moments clés) » (`etape-14.png`) ; les libellés techniques « Date (jj/mm/aaaa) » sont repris tels quels.

### 4. Joindre Ludo, savoir s'il vient jusqu'à Uzès

- **Téléphone — réussie.** Le numéro 07 61 59 61 17 est sur le premier écran (0 geste) et dans la barre basse « Appeler » ensuite. Pour Uzès : Menu → Contact (2 gestes) montre « Réponse sous 48 h · Pont-Saint-Esprit · Gard » et le haut d'une carte, mais **Uzès est caché sous la barre « Appeler / Devis sous 48 h »** (`joindre-390x844/etape-3.png`) ; au 3e geste on voit Uzès dans le cercle (`etape-4.png`, 7,4 s).
  - Gêne : sur la page Contact, rien n'écrit « 50 km » ni « déplacement compris » : il faut deviner que le cercle rouge est le rayon. On ne voit jamais la carte entière d'un coup (coupée en haut au 3e geste). Sur l'accueil, le titre « 50 km autour de Pont-Saint-Esprit, déplacement compris » n'arrive qu'au 6e–7e défilement (`prix-accueil-390x844/etape-11.png`) ; au 2e, la phrase « déplacement à 50 km de Pont-Saint-Esprit » ne dit pas si Uzès en fait partie.
- **Ordinateur — réussie.** Numéro en grand sur le premier écran ; un clic sur « Contact » donne le numéro géant et la carte où Uzès est dans le cercle (`joindre-1440x900/etape-1.png`, 6,0 s).
  - Gêne : même absence de légende « 50 km » sur la carte de Contact (seul « Nîmes · 52 km » à l'extérieur laisse deviner l'échelle). Sur la carte, le point rouge de Lapalud chevauche le libellé « Pont-Saint-Esprit » et le point blanc central n'est pas sous le nom (aussi sur l'accueil, `prix-accueil-1440x900/etape-13.png`).

### 5. Ce qui le distingue d'un concurrent (après 30 s)

- **Téléphone — réussie** (3 gestes, 7 s ; visite poursuivie jusqu'à 6 défilements en 10,8 s). Ce que je retiens : des **lasers et un vrai show lumière** (pupitre Lyres/Lasers/UV/Disco, « 2 lasers ILDA 1,5 W », « 286 messages, un show laser »), des **prix affichés, tout compris, déplacement compris dans 50 km** (« Cinq formules, cinq vrais prix »), et la preuve sociale (livre d'or, Wedding Awards 2023, Zankyou). Captures `prix-accueil-390x844/etape-2.png`, `etape-4.png`, `etape-6.png`, `etape-10.png`, `etape-11.png`.
  - Gêne : sur le premier écran seul, rien ne dit « laser » en clair hormis le nom du fader ; l'expérience (DJ depuis 2011, 89 prestations, bal du 14 juillet) visible sur ordinateur est absente du premier écran téléphone. Dans le carrousel « Une piste, trois publics », la carte « Soirées privées » colle au bord gauche de l'écran, texte sans marge (`etape-8.png`).
- **Ordinateur — réussie dès le premier écran** : « Lasers qui écrivent, lyres, brouillard et les platines de Ludo », repères « Mars 2011 DJ résident · 2015 89 prestations · 2019-2021 le bal du 14 juillet », pupitre avec prix ; au 3e geste, les cinq prix tout compris (`arrivee-1440x900/etape-0.png`, `prix-accueil-1440x900/etape-6.png`). Gêne légère : trois liens identiques « Voir toutes les soirées » sous les trois publics (`etape-10.png`).

### 6. Matériel lumière fourni et heure en plus

- **Téléphone — réussie en 3 gestes, 7,0 s** : la liste des formules de l'accueil détaille lyres LED, laser(s), projecteur UV, éclairage disco, et « heure supplémentaire : 100 € » juste dessous (`prix-accueil-390x844/etape-6.png`).
  - Gêne : la ligne « heure supplémentaire : 100 € · » se termine par un point médian orphelin, le lien « Composer ma soirée au pupitre » passant à la ligne. Le détail « Compris : son, lumière, brouillard, installation 1 h avant, déplacement à 50 km » n'est visible que sous le pupitre (`prix-390x844/etape-4.png`).
- **Ordinateur — hors barème (4 gestes, 6,7 s).** Le matériel est lisible dès 2–3 défilements (pupitre puis liste, `prix-accueil-1440x900/etape-4.png`, `etape-6.png`), mais « heure supplémentaire : 100 € » n'apparaît qu'au 4e défilement, sous Unlimited (`etape-8.png`). Par la page Formules (clic + 3 défilements), même compte : 4 gestes (`materiel-formules-1440x900/etape-2.png`) ; la grande illustration et le pupitre passent avant les cartes.
  - Gêne : sur la carte Unlimited, « Heure en plus : non précisé » sonne comme une information manquante. La formule « 1er prix » a 4 jeux de lumière alors que l'Association, plus chère, en a 2 : la progression du matériel n'est pas évidente. Sur la page Formules, le titre « Le pupitre » est décalé vers la droite par rapport au reste de la colonne (`materiel-1440x900/etape-4.png`).

## Synthèse

- Ratée : mission 1 sur téléphone (ni le lieu ni le public sur le premier écran).
- Hors barème : mission 6 sur ordinateur (heure en plus au 4e geste). Missions 2 et 6 sur téléphone réussies tout juste à 3 gestes ; par le menu Formules, 6 gestes.
- Mission 3 : formulaire atteint en 1 geste partout ; confirmation en 15–16 gestes et moins de 25 s, mais deux boutons hors écran (Continuer à l'étape 1 sur téléphone, Envoyer au récapitulatif) et un titre « Demande reçue » coupé par l'en-tête.
- Principales gênes : pupitre animé qui affiche « De base » avec « Fin de soirée : 1 h » (contradiction avec 20 h – 3 h) ; carte de Contact sans mention « 50 km » et Uzès caché sous la barre basse sur téléphone ; libellé Pont-Saint-Esprit chevauché sur la carte ; point médian orphelin après « 100 € ».
- Aucune erreur de page relevée dans les journaux.
