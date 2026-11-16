# Test vrai visiteur, v2

Persona : une maman qui prépare les 18 ans de sa fille dans une salle des fêtes près d'Uzès, un samedi de juin, environ 80 invités, son et lumière jusqu'à 2 h ou 3 h. Elle n'est pas une association.
Barème : 3 gestes au plus et 30 s au plus par mission, en partant de l'accueil (un écran défilé ou un clic compte un geste).
Les secondes sont celles du chronomètre de `visiteur.mjs` (chargement compris, lecture humaine non comptée).
Les chemins des captures partent de `_audit/visiteur/`.

Formule qui convient, une fois trouvée : **De base, 550 €, 20 h – 3 h**, avec 2 lyres LED, 1 laser et du brouillard (plus 2 enceintes 715A), **heure en plus : 100 €**. Association (500 €, jusqu'à 2 h) est réservée aux associations, ce que la carte en bas de la page Formules et la case « Nous sommes une association » (ordinateur) précisent.

## Tableau

| Mission | Format | Résultat | Gestes | Secondes | Capture de preuve |
|---|---|---|---|---|---|
| 2. Prix de la formule jusqu'à 2 h / 3 h | Téléphone | **Échec au barème** (trouvé en 5 gestes) | 5 (menu, Formules, défiler ×3) | 10,8 | `prix-v2-390x844/etape-6.png` (De base 550 €, 3 h) ; 4 gestes pour Association 2 h : `prix-v2-390x844/etape-4.png` |
| 2. idem, raccourci possible | Téléphone | Réussite possible, mais au hasard | 3 (menu, Formules, clic colonne « De base ») | 8,3 | `prix-colonne-v2-390x844/etape-3.png` |
| 2. Prix | Ordinateur | **Réussie** | 2 (défiler ×2 sur l'accueil) | 4,6 | `prix-v2-1440x900/etape-3.png` |
| 2. Prix, par la page Formules | Ordinateur | Réussie | 2 (Formules, clic colonne « De base ») | 7,6 | `prix-formules-v2-1440x900/etape-2.png` |
| 6. Matériel lumière + heure en plus | Téléphone | **Échec** : lumière en 3 gestes, heure en plus seulement au 10e geste | 10 (défiler ×2, puce « De base », défiler ×7) | 16,0 | lumière : `materiel-v2-390x844/etape-3.png` ; heure en plus : `materiel-v2-390x844/etape-16.png` |
| 6. Matériel lumière + heure en plus | Ordinateur | **Réussie** | 2 (défiler ×2 sur l'accueil) | 4,7 | `materiel-v2-1440x900/etape-1.png` (aussi `formules-choix-v2-1440x900/etape-3.png`) |
| Page Formules : comprendre les colonnes en arrivant | Téléphone | **Non compris** | 0 sur la page | – | `prix-v2-390x844/etape-2.png` (arrivée sur /formules) |
| Page Formules : comprendre les colonnes en arrivant | Ordinateur | **Non compris** | 0 sur la page | – | `formules-v2-1440x900/etape-2.png` |
| Page Formules : choisir une formule | Téléphone | Réussie, mais 4 gestes depuis l'accueil (2 sur la page) | 4 (menu, Formules, colonne « De base », Demander ce devis) | 10,5 | `formules-choix-v2-390x844/etape-5.png`, `formules-choix-v2-390x844/etape-6.png` |
| Page Formules : choisir une formule | Ordinateur | **Réussie** | 3 (Formules, colonne « De base », Demander ce devis) | 9,9 | `formules-choix-v2-1440x900/etape-3.png`, `formules-choix-v2-1440x900/etape-4.png` |

## Mission 2 : le prix de la formule jusqu'à 2 h ou 3 h

### Téléphone (390x844) : échec au barème
- Accueil (`prix-v2-390x844/etape-0.png`) : la table de mixage affiche « 1er prix 400 € » et « Finir vers 1 h ». Rien ne dit qu'on peut finir plus tard ni à quel prix.
- En défilant l'accueil (`prix-accueil-v2-390x844/etape-2.png`, `etape-4.png`), la démo passe à De base 550 €, puis à Unlimited 1 250 € (`prix-accueil-attente-v2-390x844/etape-3.png`), mais **le fader « Finir vers » reste à 1 h** pour toutes les formules. Je comprends donc « tout finit à 1 h », c'est faux et ça décourage. Les puces de prix en dessous (400 / 500 / 550 / 700 / 1 250 €) ne donnent pas les horaires.
- Menu, puis Formules (`prix-v2-390x844/etape-2.png`) : « de 400 à 1 250 € », cinq colonnes avec leurs prix, mais aucune heure de fin. Le texte annonce « de 20 h jusqu'à la fin de la nuit » pour les cinq formules, ce qui contredit le 1 h de l'accueil.
- Il faut ensuite défiler dans le pupitre qui avance tout seul : 1er prix 1 h (`etape-3.png`), « 2 h » au 4e geste (`etape-4.png`), « 3 h » De base 550 € au 5e geste (`etape-6.png`).
- Ce qui a gêné :
  - aucune heure de fin sur les colonnes ni sur les puces ;
  - le fader « Finir vers » est bloqué à 1 h sur l'accueil ;
  - au 4e geste, la puce « Association » est allumée mais l'étiquette dit « 1ER PRIX 500 € » (`prix-v2-390x844/etape-4.png`). Je ne sais plus quelle formule je regarde.
- Raccourci en 3 gestes (`prix-colonne-v2-390x844/etape-3.png`) : un clic sur la colonne « De base » ouvre le pupitre réglé sur 3 h, 550 €. Mais rien n'indique qu'il faut cliquer celle-là plutôt qu'une autre : c'est du hasard.
- Le pupitre dit « Montez les faders », mais cliquer le fader « Finir vers » n'a rien changé (`fader-v2-390x844/etape-4.png`). L'outil ne sait pas glisser, donc ce point n'est pas tranché.

### Ordinateur (1440x900) : réussie
- L'accueil (`prix-v2-1440x900/etape-0.png`) donne déjà une ligne de détail sous le prix : « 4 jeux de lumière LED · 1 laser · Brouillard · 2 enceintes 715A · 20 h – 1 h · heure en plus : 100 € ».
- Le 1er défilement ne change rien à l'écran (`prix-v2-1440x900/etape-2.png`, identique à l'arrivée). J'ai cru que la page était bloquée.
- Au 2e défilement (`prix-v2-1440x900/etape-3.png`) : « De base 550 € … 20 h – 3 h … heure en plus : 100 € ». Trouvé.
- Ce qui a gêné, sur le même écran :
  - le fader « Finir vers » est toujours à 1 h, et la ligne dit « 20 h – 3 h · **fin vers 1 h : comprise** » : je ne comprends pas si ça finit à 1 h ou à 3 h ;
  - le fader « Lasers » est à « non » alors que la ligne annonce « 1 laser » ;
  - la démo saute Association : on passe directement de 1er prix à De base.
- Par la page Formules (`prix-formules-v2-1440x900/etape-2.png`) : Formules, puis clic sur la colonne De base, et la fiche complète s'affiche (2 gestes). Il fallait quand même deviner la colonne.

## Mission 6 : le matériel lumière de la formule et le prix d'une heure en plus

### Téléphone (390x844) : échec
- Accueil, défiler 2, puis la puce « De base 550 € » (3 gestes, 7,7 s) mène au pupitre (`materiel-v2-390x844/etape-3.png`) : 2 lyres, 1 laser, UV non, disco non, 3 h. La lumière est trouvée, en partie seulement (le brouillard n'y est pas).
- Sur téléphone, **le pupitre n'a pas la ligne de détail** de l'ordinateur : ni heure en plus, ni brouillard, ni enceintes.
- Bug sur cet écran : la puce **« 1er prix » reste allumée** alors que le pupitre affiche De base 550 € (`materiel-v2-390x844/etape-3.png`, `etape-9.png`). Ça arrive quand on vient de la puce de l'accueil (`?formule=de-base`). Depuis la colonne de la page Formules, la bonne puce s'allume.
- Le pupitre reste épinglé pendant 5 écrans sans que rien ne bouge, puisque la formule est choisie (`materiel-v2-390x844/etape-5.png` à `etape-11.png`). J'ai l'impression que la page ne défile plus.
- « Heure en plus : 100 € » n'apparaît que sur la carte De base de la section « Les cinq formules côte à côte », au 10e geste, à 16 s (`materiel-v2-390x844/etape-16.png`). Rien ne mène directement à cette carte.

### Ordinateur (1440x900) : réussie
- Accueil, défiler 2 (`materiel-v2-1440x900/etape-1.png`) : « 2 lyres LED · 1 laser · Brouillard · 2 enceintes 715A · 20 h – 3 h · … heure en plus : 100 € ». Tout est là.
- Les faders contredisent le texte, comme pour la mission 2 : Lasers à non, Finir vers à 1 h, et « fin vers 1 h : comprise ».
- La même information, plus propre, est sur le pupitre de la page Formules après un clic sur la colonne De base (`formules-choix-v2-1440x900/etape-3.png`).

## Page Formules : comprendre les colonnes, puis choisir

### Comprendre en arrivant : non compris, sur les deux formats
- Téléphone (`prix-v2-390x844/etape-2.png`) et ordinateur (`formules-v2-1440x900/etape-2.png`) : cinq colonnes de barres façon vumètre, de plus en plus hautes. Chacune a son prix en haut et son nom en bas.
- Aucune légende ne dit ce que mesure la hauteur : plus de lumière ? plus d'heures ? plus de puissance ? Je devine « plus c'est cher, plus il y en a », sans savoir de quoi.
- Le texte juste au-dessus parle des « faders du pupitre », pas de ces colonnes.
- Rien ne dit non plus que **les colonnes sont cliquables** : j'ai découvert par hasard qu'elles ouvrent le pupitre réglé.
- Les noms ne m'aident pas à choisir : « De base » et « BlackLight » ne disent pas l'heure de fin, et « Association » ne dit pas que c'est réservé aux associations.

### Choisir une formule
- Téléphone : menu, Formules, colonne « De base », puis « Demander ce devis ». Ça fait 4 gestes et 10,5 s depuis l'accueil, 2 depuis l'arrivée sur la page.
  - Le formulaire de devis s'ouvre avec « De base » déjà repris (`formules-choix-v2-390x844/etape-6.png`), c'est rassurant.
  - Sur cet écran, le bouton flottant « Continuer » et sa bande noire cachent la description de la première réponse, « Anniversaire » : c'est justement la mienne.
- Ordinateur : Formules, colonne « De base », puis « Demander ce devis ». Ça fait 3 gestes et 9,9 s : réussie.
  - Après le clic sur la colonne, le bouton « Demander ce devis » est coupé à moitié en bas de l'écran (`formules-choix-v2-1440x900/etape-3.png`).
  - Le formulaire reprend « De base » (`formules-choix-v2-1440x900/etape-4.png`).
- Démo du pupitre sur ordinateur (`formules-v2-1440x900/etape-6.png`) :
  - au passage sur la puce « Association », la case **« Nous sommes une association » se coche toute seule** ;
  - l'étiquette affiche alors « 1ER PRIX 500 € … + 1 h jusqu'à 2 h (100 €) ».
  - Je ne sais pas si 500 € jusqu'à 2 h est pour moi ou pour une association.

## Autres incohérences relevées en chemin
- 1er prix : le pupitre téléphone affiche Lasers « non » (`prix-v2-390x844/etape-3.png`), alors que la carte annonce « 1 laser » (`formules-fin-v2-390x844/etape-6.png`).
- « De 20 h jusqu'à la fin de la nuit » en tête de la page Formules, alors que quatre formules sur cinq ont une heure de fin (1 h, 2 h, 3 h, 5 h).
- Les cartes en bas de la page Formules sont claires : horaire, heure en plus, matériel (`formules-fin-v2-390x844/etape-6.png` à `etape-11.png`). Mais elles sont à 6 à 8 écrans du haut sur téléphone, et seul le défilement y mène.
