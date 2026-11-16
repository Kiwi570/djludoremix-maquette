# Regard neuf sur la v2 — DJ Ludo Remix

16 novembre 2026. Regard extérieur, sans avoir vu la construction.

**Sources**
- Captures de la passe `_audit/passes/20261116-143554-standard/captures/` (formules, ludo, contact, soirees, accueil, en 1366, 768 et 390).
- Films d'ouverture du même dossier (`films/ouverture-*-1366.png` et `-390.png`).
- Mes captures complémentaires, faites avec `shots.mjs` et un parcours de devis complet (Mariage, 19/06/2027, Uzès, 120 invités, BlackLight), en 1366×768 et 390×844.
- `regard-neuf.md`, `plan-v2.md`, `releve.md`, `_audit/regard-da.md`.

Les doublons à la jonction de deux captures ne sont pas comptés.

---

## 1. Les quatre ouvertures, côte à côte

| | Formules | Ludo | Contact | Soirées |
|---|---|---|---|---|
| Objet | VU-mètre : cinq colonnes de LED, une par formule, prix au-dessus | « LUDO » géant, la photo vue à travers les lettres | Le numéro 07 61 59 61 17 en chiffres néon géants | Photo générée plein cadre et boule à facettes en haut à droite |
| Photo | Aucune | Portrait Elissalde (violet) | Aucune, des faisceaux laser en fond | Scène de festival générée (la même qu'en v1) |
| Titre | « COMPOSEZ / votre lumière », à gauche | « DERRIÈRE / les platines », en bas | « RÉSERVEZ / votre date », au-dessus du numéro | « TOUTES LES FÊTES, / un seul DJ », à gauche |
| Mouvement seul | Les colonnes dansent (film, 2,6 à 4 s) | Au défilement, les lettres s'ouvrent jusqu'à la photo pleine | Le numéro apparaît dans l'iris, puis reste fixe | La boule tourne et des taches de lumière flottent |
| Captures | `formules-1366-01`, `formules-768-01`, `formules-390-01` | `ludo-1366-01`, `ludo-768-01`, `ludo-390-01` | `contact-1366-01`, `contact-768-01`, `contact-390-01` | `soirees-1366-01`, `soirees-390-01` |

**Verdict : oui, chaque page a maintenant sa composition.** On ne peut plus confondre Formules, Ludo et Contact à 1366. C'est le plus grand progrès de la v2.

Deux réserves :
- **Le titre reste le même partout** (blanc gras, puis néon fin). C'est une marque de la maison, et je l'accepte.
- **Deux ouvertures se cassent sur les petits écrans** :
  - **Ludo, 768 et 390** : les lettres « LUDO » n'occupent que le haut. Dessous, il reste 350 à 380 px de noir presque pur avant le titre (`ludo-768-01`, film `ouverture-ludo-390`, ma capture à 390 décalée de 400 px).
  - **Contact, 768** : le paragraphe est coincé dans une colonne d'environ 110 px, à un ou deux mots par ligne, sur 13 lignes (`contact-768-01`).

## 2. Les signatures après l'ouverture

- **Formules : la salle et le pupitre épinglés. Réussi en partie.**
  - Ce qui marche : la salle passe en pleine largeur. Au défilement, le pupitre passe seul de 1er prix à Unlimited. Les faders bougent, les lasers changent (rouges seuls, puis rouges et verts) et le prix suit (`formules-1366-02` à `-06`). C'est enfin une scène, et plus un encadré.
  - Ce qui ne va pas :
    - La salle est une scène de concert générée, avec des ponts et une dizaine de lyres. Ce n'est pas une salle des fêtes avec deux lyres.
    - Le pupitre, en carte sombre, couvre la moitié basse : on voit la salle « allumée » sur à peine 40 % de l'écran.
    - L'état Association est faux (voir la liste « À corriger », point 1).
    - Après la scène, les cinq cartes à bordure sont toujours là. Elles font quatre écrans sur 390 (`formules-390-07` à `-10`).
- **Ludo : la frise laser. Réussie. Le livre d'or en pile : moyen.**
  - Ce qui marche dans la frise : elle défile à l'horizontale. Une lyre en haut projette un vrai cône rouge, et la date sous le cône s'allume en néon (`ludo-1366-03` à `-07`, `ludo-390-04`). La promesse « au laser » est tenue.
  - Ce qui ne va pas dans le livre d'or :
    - Ce sont toujours des cartes à bordure, de 820 px de large et à moitié vides.
    - Sur une image fixe, la pile coupe la citation du dessous (« LE SHOW LASER ÉTAIT ABSOLUMENT », coupé net, `ludo-1366-11`).
    - La citation inventée de Claire a disparu : bien.
- **Contact : l'affiche qui se compose. La meilleure idée de la v2.**
  - Ce qui marche :
    - À chaque étape, l'affiche se remplit : « MARIAGE / SAM 19 JUIN / UZÈS / 120 invités · BlackLight ». Le 19/06/2027 est bien un samedi.
    - À l'envoi, la date s'écrit en néon et un tampon rond « REÇU · réponse sous 48 h » se pose dessus.
    - Le titre « Demande reçue » est visible, et n'est plus caché sous l'en-tête.
  - Ce qui ne va pas :
    - Deux tampons « REÇU » se répètent : un sur l'affiche, un sur la date.
    - Sur 390, « Suivre Ludo » s'affiche encore juste sous la confirmation.
- **Soirées : la boule à facettes. Ratée en partie.**
  - C'est une sphère, ce n'est plus la spirale d'hypnose.
  - Mais ses facettes sont des carreaux pastel unis (beige, lilas, gris), sans reflet de la salle, avec une croix blanche en guise d'éclat. On dirait une mosaïque dessinée en code.
  - Les « reflets » jetés sur la page sont des ovales gris-lilas plats et opaques. Ils passent sur le titre et sur le texte, comme des confettis ou des taches (ma capture `/soirees` 1366 à 6 s, `soirees-390-01`).
  - Juste dessous, la boule de l'image Kitsch Party, elle, a l'air vraie (`soirees-1366-05`). La comparaison écrase la boule en code.
  - L'index géant « On fête quoi ? » et les bandeaux Total Bodega et Kitsch Party tiennent toujours. Le zigzag 01 à 04 est resté.

## 3. Les points du regard neuf v1

| N° | Point | État | Une ligne |
|---|---|---|---|
| 1 | Formules sans signature, liste des prix en double sur l'accueil | **En partie** | La salle épinglée existe. La liste de l'accueil est devenue une bande de cinq pastilles. Mais les cinq cartes restent sur Formules : le prix y est donné trois fois (VU-mètre, pupitre, cartes). |
| 2 | Trois ouvertures identiques | **Oui** | Quatre compositions distinctes. Défauts à 768 et 390 sur Ludo, et à 768 sur Contact. |
| 3 | Frise « au laser » réduite à un filet, livre d'or en collage | **En partie** | La frise est réussie. Le livre d'or reste fait de cartes à bordure. |
| 4 | Boule à facettes en disque plat | **En partie** | C'est maintenant une sphère, mais à carreaux pastel et à reflets en ovales gris. L'image du festival n'a pas été remplacée : le fichier `soirees-ouverture` est du 13 novembre et `soirees-place` n'existe pas. |
| 5 | Retour du devis en simple carte de texte | **Oui, presque** | La date s'écrit au laser, avec le tampon, et le titre est visible. « Envoyer la demande » et « Continuer » restent visibles grâce à la barre collante. Sur 390, « Suivre Ludo » n'est pas masqué. |
| 10 | Mêmes photos trop souvent | **En partie** | Les fins de Formules et de Ludo sont maintenant différentes. Mais trois photos reviennent encore : « LE CLAN » (accueil et Soirées 04), le barnum (accueil et fin de Soirées), la salle des fêtes aux lasers (accueil, galerie de Ludo, Contact). |
| 16 | Accueil 768 : le bouton chevauche le prix ; faders trop petits sur 390 | **Oui** | À 768, le bouton est à 22 px du prix. Les faders font 44 px sur 390. Les libellés font encore 12,5 px sur 390. |
| 18 | Fil invisible | **En partie** | La lyre fait 30 px, avec un cône, sur un trait rouge de toute la hauteur : on la voit. Mais le cône n'éclaire aucun titre. Le trait passe sur les photos (bandeau Total Bodega à 1366) et la lyre déborde sur les cartes (Ludo et Contact, 390). |

## 4. Ce qui fait encore clip-art, générique ou cassé

- **Clip-art**
  - La boule de Soirées et ses ovales gris (voir plus haut).
  - Les petits pictogrammes en tête des cinq cartes de Formules : points rouges et trait en biais, triangles gris, trapèze violet (`formules-1366-07`, `formules-390-07`).
- **Générique**
  - Les deux grandes images générées, la salle de Formules et l'ouverture de Soirées, sont de la même famille « festival » : ponts, rangées de lyres, laser. Elles mentent sur l'échelle du métier (le relevé dit « pas de grand club »).
  - Le zigzag photo/texte 01 à 04 de Soirées.
  - Les cartes de tarifs et de citations.
- **Cassé**
  - L'état Association du pupitre de Formules.
  - L'ouverture de Contact à 768.
  - Le vide noir sous « LUDO » à 768 et 390.
  - Sur la demande de Contact, la barre collante « Continuer » est un aplat noir rectangulaire posé dans la carte. À 1366, il fait une bande sombre sous les tuiles. Sur 390, il recouvre la tuile « Entreprise » (`contact-1366-02`, `contact-390-02`).

---

## À corriger avant livraison

1. **Formules, 1366 et 390 : l'état Association contredit le relevé** (`formules-1366-03`, `formules-390-03`).
   - On lit « 1ER PRIX · 500 € · 4 jeux de lumière LED… 20 h – 1 h · + 1 h jusqu'à 2 h (100 €) », case « Nous sommes une association » cochée et pastille Association allumée.
   - Le relevé dit que la formule Association est un pack à elle : 2 jeux LED, 1 laser, brouillard, 2 enceintes, platines Pioneer, 500 €, 20 h – 2 h.
   - Afficher « ASSOCIATION » et son vrai matériel.
2. **Ludo, 768 et 390 : environ 350 px de noir sous « LUDO » dans l'ouverture** (`ludo-768-01`, film `ouverture-ludo-390`).
   - Agrandir les lettres en hauteur jusqu'au titre, ou faire remonter le titre sous les lettres.
3. **Contact, 768 : le paragraphe d'ouverture tient sur une colonne d'environ 110 px et 13 lignes** (`contact-768-01`, confirmé par ma capture).
   - Le passer en pleine largeur sous le numéro, avec le bouton dessous.
4. **Soirées, premier écran, 1366 et 390 : la boule et ses reflets font clip-art** (ma capture 1366 à 6 s, `soirees-390-01`).
   - Facettes miroir : chacune doit refléter les couleurs de la salle et changer d'éclat en tournant.
   - Reflets : de petits points lumineux, flous, en mode écran. Pas d'ovales opaques sur le titre.
   - Sinon, reprendre la boule de l'image Kitsch Party.
5. **Soirées, ouverture, et Formules, salle (tous formats) : les images de festival générées.**
   - L'image `soirees-place` prévue par le plan n'a pas été posée.
   - Il faut une place de village et une salle des fêtes à deux lyres, ou une vraie photo notée 4.
6. **Accueil, pupitre, 1366 et 390 : « BlackLight · 20 h – 5 h · fin vers 1 h : comprise »** (`accueil-1366-02`).
   - Le point 7 de la v1 est toujours ouvert. Le fader « Finir vers » doit partir de l'heure de fin réelle de la formule.

## Mineur

- **Contact**
  - Deux tampons « REÇU » à l'envoi : en garder un, celui posé sur la date.
  - Sur 390, masquer « Suivre Ludo » sous la confirmation.
  - La barre « Continuer » est un aplat noir dur : la rendre transparente, ou la sortir de la carte (`contact-1366-02`, `contact-390-02`).
  - « DJ LUDO REMIX PRÉSENTE » fait 12 px sur l'affiche (audit).
- **Formules**
  - Les cinq cartes à pictogrammes doublent le pupitre. Les réduire à un tableau sobre sans pictos, ou les retirer.
  - Les noms sous les colonnes du VU-mètre font environ 11 px. Ils sont horizontaux, alors que le plan les voulait à la verticale.
  - « Choisir Association » passe sur deux lignes.
  - À 390, le VU-mètre n'occupe qu'un sixième du premier écran (`formules-390-01`).
  - Le bouton « Appeler » de la barre est à 2,84:1 sur la photo, à 390 (échec de l'audit).
- **Ludo**
  - La galerie laisse une case vide en bas à droite (`ludo-1366-08`, `ludo-390-07`).
  - Le bandeau du titre d'ouverture s'arrête net à environ 950 px sur la photo pleine (ma capture à 300 px).
- **Le fil**
  - La lyre et le trait passent sur les images et sur le bord droit des cartes (Total Bodega à 1366, cartes de Ludo et formulaire de Contact à 390).
  - Les décaler, ou faire tomber le cône sur le titre de la section.
- **Photos répétées** : « LE CLAN », le barnum et la salle aux lasers (voir le point 10).
- **Soirées** : la mention « Illustration générée » est presque invisible sous Kitsch Party (`soirees-1366-06`).
- **Accueil, 390** : les libellés des faders font 12,5 px.

## À garder

- **Contact** : l'affiche qui se compose, puis la date au néon tamponnée. C'est un vrai retour physique, propre au métier.
- **Ludo** : la frise horizontale sous la lyre qui brûle les dates, et le masque « LUDO » à 1366.
- **Formules** : le VU-mètre d'ouverture (1366 et 768) et la salle qui change de lumière quand le pupitre défile seul.
- **Accueil** : la bande de cinq pastilles à la place de la liste des prix. Elle est sobre et claire.
- **Soirées** : l'index « On fête quoi ? », maintenant aligné à 48 px, avec des occasions tirées du relevé, et les bandeaux Total Bodega et Kitsch Party.
- **Le voile en iris** entre les pages.

---

## Résumé

- Les quatre ouvertures sont enfin différentes : VU-mètre, masque « LUDO », numéro géant, photo et boule.
- Les signatures : Contact (affiche et tampon) et la frise de Ludo sont réussies. Formules est à moitié faite (scène, mais cartes et image de festival). La boule de Soirées est encore du clip-art.
- Points v1 : 2 et 16 réglés, 5 presque. Les points 1, 3, 4, 10 et 18 sont faits en partie.
- À corriger :
  - l'état Association faux sur Formules ;
  - le vide sous « LUDO » à 768 et 390 ;
  - le paragraphe de Contact à 768 ;
  - la boule et ses ovales ;
  - les deux images de festival (l'image `soirees-place` n'est pas posée) ;
  - « fin vers 1 h » à l'accueil.
