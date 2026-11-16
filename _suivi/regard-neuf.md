# Regard neuf sur la v1 — DJ Ludo Remix

16 novembre 2026. Regard extérieur, sans avoir vu la construction, dans la peau d'un client exigeant ou d'un directeur artistique habitué aux sites primés.

**Sources**
- Captures `_audit/rapport/captures/` : accueil, soirees, formules, ludo, contact et 404, en 1366, 768 et 390.
- Films d'ouverture et de transition (`_audit/rapport/films/`) et test « vrai visiteur » (`_audit/visiteur/`).
- Relevé (`_suivi/releve.md`), plan (`_suivi/plan.md`) et dernier regard sur l'accueil (`regard-da-6.md`).
- Grille wouahou de `rapport.md`.
- Planches du palmarès : ouverture, tarifs, contact, galerie et témoignages.
- Ouvertures p1440 des trois dernières maquettes : Jardins de l'Hacienda 2 (`header`), Lo Componairo (`debut`) et QD2A (`debut`).

Avertissement de lecture : les captures successives d'une même page se chevauchent d'environ 200 px. Les doublons qu'on voit à la jonction de deux captures ne sont pas des bugs du site. Exemples : « Cinq vrais prix », « Votre téléphone » ou « Le livre d'or » répétés, une photo coupée en deux. Je les ai vérifiés et je ne les compte pas.

---

## Les cinq questions

### 1. Qu'est-ce que le visiteur peut toucher ?

- **Accueil**
  - Les cinq faders du pupitre dans le premier écran : Lyres, Lasers, UV, Disco, Fin de soirée. La photo change, les lasers s'ouvrent et le prix suit.
  - La poursuite (« Promenez la lumière »), qu'on traîne sur la photo.
  - Les lignes « Cinq formules », qu'on touche pour régler le pupitre.
  - Les quatre citations du livre d'or, qui s'écrivent au laser.
  - Le petit formulaire « Écrire ma date au laser ».
- **Formules** : un second pupitre, cette fois encadré à côté d'une salle générée qui s'allume. Puis cinq cartes « Choisir… » et une FAQ en accordéon.
- **Contact** : une demande en cinq étapes, avec des tuiles à choisir (Anniversaire, Mariage, Fête de village…).
- **Soirées** et **Ludo** : rien d'autre que des liens. L'index géant, les bandeaux Total Bodega et Kitsch Party, la frise et la galerie se regardent mais ne se touchent pas.
- **404** : une poursuite molle.

Bilan : tout le jeu tient dans l'accueil, et deux fois dans le même objet (le pupitre). Deux pages d'onglet sur quatre n'offrent rien à manipuler.

### 2. Qu'est-ce qui relie les pages entre elles ?

- **L'intro**
  - Elle est la même sur toutes les pages, au premier chargement : point bleu de la lentille, « LUDO REMIX » tracé en laser rouge, puis le disque s'ouvre en iris sur l'ouverture.
  - Elle dure environ 2,2 s. Elle est propre et bien liée au métier.
  - Elle est rejouée à l'identique sur Ludo ou Contact quand on y arrive directement.
- **Le voile**
  - C'est un iris : le cercle se referme sur le point cliqué, puis un écran noir montre la lentille et le nom de la page (« FORMULES ») pendant environ 0,7 s. Enfin, un disque s'ouvre sur l'image de la page suivante (`transition-soirees-vers-formules-1366`).
  - C'est le meilleur lien du site, cohérent avec la poursuite.
- **Le fil**
  - C'est une colonne de points dans la marge droite, avec une minuscule lyre d'environ 10 px qui change de couleur.
  - Sur toutes les captures, on ne le voit qu'en le cherchant. Ce n'est pas un fil qu'un visiteur remarque.
- **Le reste**
  - La typographie : un titre en deux lignes, blanc gras puis néon fin, sur chaque page. Elle relie, mais de façon trop mécanique (voir la question 5).
  - Le noir néon et le même pied de page partout.

### 3. Que se passe-t-il quand il fait l'action principale (demander un devis) ?

- **Accueil**
  - Le bouton rouge « Demander ce devis » est sur la ligne du prix, dans le premier écran.
  - Le formulaire court du bas promet que la date « s'écrit au laser » et qu'un tampon « reçu » se pose.
  - Ce retour n'apparaît dans aucune capture : il reste à vérifier dans le film.
- **Contact**, qui est le vrai parcours, testé en 15 et 16 gestes (`visiteur/devis-1440x900/etape-17.png`)
  - On obtient une carte de texte : « Demande reçue · Demande simulée : rien n'a été envoyé… · Anniversaire · 19/06/2027 · De base · 550 € · Martine Durand ».
  - Le titre « Demande reçue » est coupé par l'en-tête fixe. Le bloc « Suivre Ludo » occupe le reste de l'écran.
  - Il n'y a ni laser, ni tampon, ni lumière : le retour physique promis par la grille (point 7) n'est pas là où le visiteur arrive vraiment.
  - « Envoyer la demande » est sous la ligne de flottaison au récapitulatif, sur ordinateur comme sur téléphone. « Continuer » l'est aussi à l'étape 1 sur téléphone.

### 4. Qu'est-ce qui est spectaculaire au premier défilement de l'accueil ? Trois familles, et au moins une par page d'onglet ?

**Accueil.** Les trois familles y sont :
- **lumière sous la main** : la poursuite qu'on promène, sur une vraie photo de Ludo par Yann Elissalde ;
- **ambiance qui change** : le pupitre qui joue seul, coupe la photo au stroboscope, ouvre les lasers ILDA et fait sauter le prix ;
- **trait qui se dessine** : le titre et les citations du livre d'or écrits au laser, et le cercle des 50 km.

C'est spectaculaire pendant les cinq premières secondes. Ensuite, le défilement redevient calme :
- une liste de prix ;
- trois cartes photo ;
- les badges ;
- une carte ;
- un formulaire.

La scène épinglée « La lumière change » du plan (section 3) a disparu : l'audit relève « aucune section épinglée ». Le premier écran fait aussi apparaître un voile blanc laiteux sur les deux tiers de l'image (`accueil-1366-01`, `accueil-390-01`), sans doute un flash du stroboscope. Il délave le titre et pose une question de sécurité (flashs).

**Pages d'onglet.** Il y a au moins une famille par page, mais le niveau est très inégal :
- **Soirées** : typographie géante (l'index des occasions), particules sur Kitsch Party et une « boule à facettes ». C'est la plus riche. Mais la boule est un disque plat à rayons gris, dessiné en code : un effet raté.
- **Formules** : « la salle s'allume » au pupitre. L'audit dit qu'il ne bouge ni au défilement ni tout seul, et c'est le même objet que le premier écran de l'accueil. Trop sage, et déjà vu.
- **Ludo** : « Le parcours, au laser » est un filet rouge de 3 px à gauche de la frise. Le titre promet un laser, la page montre une bordure. Trop sage.
- **Contact** : le cercle des 50 km, la même carte que l'accueil, déplacée dans le premier écran. Déjà vu.

### 5. Chaque page a-t-elle sa signature après l'ouverture ?

Non. Seuls l'accueil et Soirées ont la leur.

- **Accueil** : le pupitre et la poursuite, le livre d'or au laser. C'est une vraie signature.
- **Soirées** : l'index géant « On fête quoi ? » et les deux bandeaux pleine largeur Total Bodega et Kitsch Party. Elle a son identité. Ensuite, elle retombe dans un zigzag photo/texte numéroté 01-04, le modèle d'agence le plus courant.
- **Formules** : sa signature (le pupitre) a été donnée à l'accueil. Il lui reste une version plus petite et encadrée du même pupitre, puis cinq cartes à bordure et une FAQ. On a déjà tout vu sur l'accueil : les prix y sont donnés deux fois, au pupitre puis dans la liste.
- **Ludo** : un portrait encadré, une frise en liste, une galerie mosaïque et six cartes de citations à bordure. Aucun moment propre.
- **Contact** : la carte de l'accueil, un formulaire en étapes classique et une liste de réseaux.

**Ouvertures.**
- Formules, Ludo et Contact ont la même composition sur fond noir : le titre en deux lignes d'un côté, un visuel encadré aux coins arrondis de l'autre, un bouton rouge dessous. Ludo est le même schéma en miroir. Les trois pages sont interchangeables à 768 comme à 1366 (`tablettes.jpg`).
- Les cinq titres suivent la même formule (« VOTRE SOIRÉE / en plein feux », « TOUTES LES FÊTES, / un seul DJ », « COMPOSEZ / votre lumière », « DERRIÈRE / les platines », « RÉSERVEZ / votre date »).
- Les fins de page aussi se ressemblent : « photo à gauche, titre, bouton rouge » sur Soirées et sur Ludo.

---

## Ressemblance avec les trois dernières maquettes

Visuellement, non : c'est un noir néon en capitales condensées, contre le crème éditorial à empattements de Hacienda, Lo Componairo et QD2A. Pour la charpente, oui :
- les pages intérieures ont le même plan « titre à gauche, visuel encadré à droite » que Lo Componairo et QD2A ;
- les modules sont les mêmes que d'habitude : demande en 5 étapes façon Myrtille, FAQ en accordéon, cartes de tarifs côte à côte, mosaïque de galerie.

---

## Ce qu'un client exigeant relèverait

### À corriger avant livraison

**Pages et signatures**

1. **Formules, tous formats : la page n'a plus de signature.**
   - Le pupitre est déjà le premier écran de l'accueil, et les cinq prix y sont déjà listés.
   - Sur Formules, il revient plus petit, encadré, immobile (audit : « pupitre ne bouge ni au défilement ni tout seul »), puis cinq cartes à bordure. Sur 390, cela fait cinq écrans de cartes empilées.
   - À la place : faire de Formules la salle de fête en grand, que les faders allument en plein écran. Les cinq formules deviennent cinq états de la même salle, au lieu de cinq cartes.
   - Côté accueil : retirer la liste « Cinq formules, cinq vrais prix », qui double le pupitre et que l'audit relève comme « section sans visuel ». Garder un seul renvoi vers Formules.
2. **Formules, Ludo, Contact, 1366 et 768 : trois ouvertures identiques.**
   - C'est le même bloc titre en deux lignes, à côté d'un visuel encadré aux coins arrondis, sur du noir.
   - Il faut donner à chacune une composition à elle :
     - **Ludo** : le portrait en plein cadre, avec la lumière qui passe du bleu au rouge, comme le prévoit le plan.
     - **Contact** : le numéro géant seul, sous une poursuite.
     - **Formules** : la salle qui s'allume.
3. **Ludo, 1366 et 390 : la frise « au laser » n'est qu'un filet rouge de 3 px.**
   - Il faut que le trait laser soit vrai : un faisceau qui court d'une date à l'autre au défilement, avec les années qui s'allument en néon à son passage.
   - Le livre d'or de Ludo est un collage :
     - deux vignettes floues de salles des fêtes calées à gauche, avec un grand vide à droite ;
     - puis six cartes de citations à bordure.
   - À la place, reprendre le mur au laser de l'accueil, ou supprimer cette section et renvoyer vers l'accueil.

**Effets ratés**

4. **Soirées, premier écran, tous formats : la « boule à facettes » est un disque plat à rayons gris et blancs.**
   - Elle ressemble à une spirale d'hypnose. C'est exactement le « clip-art dessiné en code » que la grille sanctionne.
   - À remplacer par une vraie boule : une sphère à facettes avec reflets, ou la boule de l'image Kitsch Party détourée, qui jette des éclats sur la page au défilement. Sinon, la retirer.
5. **Contact, ordinateur et téléphone : le retour de l'action principale est une carte de texte.**
   - Il n'y a ni laser ni tampon, et le titre « Demande reçue » est caché sous l'en-tête fixe (`visiteur/devis-1440x900/etape-17.png`).
   - À la place :
     - remonter la confirmation sous l'en-tête ;
     - écrire la date au laser et poser le tampon « reçu, réponse sous 48 h », comme promis à l'accueil ;
     - masquer « Suivre Ludo » à ce moment-là.
   - Remonter aussi « Envoyer la demande » au-dessus de la ligne de flottaison au récapitulatif, et « Continuer » à l'étape 1 sur 390.
6. **Accueil, premier écran, 1366 et 390 : un voile blanc laiteux sur les deux tiers de l'image** (`accueil-1366-01`, `accueil-390-01`).
   - Le titre devient gris sur blanc. C'est sans doute un flash du stroboscope.
   - Plafonner la luminosité des flashs, ne jamais blanchir l'écran entier, et rester sous trois flashs par seconde.
   - Avec « réduire les animations », supprimer complètement le stroboscope.
7. **Accueil, pupitre, tous formats : « Fin de soirée : 1 h » contredit les horaires des formules.**
   - On lit à côté « BlackLight · 20 h – 5 h » (1366-02) ou « De base · 20 h – 3 h ». Le test visiteur s'y est trompé.
   - Le fader doit afficher l'heure de fin réelle de la formule choisie (3 h, 5 h, « fin de soirée »), ou s'appeler « Heures en plus ».

**Images**

8. **Soirées (fin de page, 1366 et 390) et Ludo (galerie) : la photo de fête votive porte l'incrustation orange « Dj Ludo Remix ».**
   - C'est précisément le défaut qu'on avait retiré de la carte de l'accueil.
   - Utiliser la version recadrée sans lettres, ou une autre photo.
9. **Ludo, galerie, 1366 et 390 : la signature « Yann Elissalde » est visible** en haut à droite de la grande photo violette et de la photo verte.
   - Le relevé demande de la recadrer : le crédit est déjà dans le pied de page.
10. **Toutes les pages : la même photo revient trop souvent.**
    - **Casque rose (dj-sans-materiel)** : quatre fois. Sur le formulaire de l'accueil, sur Soirées (sections 01 et 04 de la même page) et dans la galerie de Ludo.
    - **Casquette « LE CLAN »** : sur l'accueil (carte) et sur Contact.
    - **Photo orangée aux platines** : en fin de Formules et en fin de Ludo.
    - **Fête votive** : trois fois.
    - Il y a assez de photos notées 4 (séance de Yann Elissalde en LED rouge, verte, bleue, violette, et la série de la pergola) pour ne jamais répéter une photo sur une même page, ni une même photo deux fois en fin de page.
11. **Soirées et Formules, premiers écrans : des images générées qui mentent sur l'échelle.**
    - On y voit une scène de festival avec ponts, rangées de lyres et piste immense (Soirées), et une grande console lumière de concert (Formules).
    - Le relevé dit « pas de grand club » : Ludo a deux lyres, des platines Pioneer, et joue dans des salles des fêtes, sous des barnums et des pergolas.
    - Les vraies photos ont déjà été notées 4 : mettre l'une d'elles en ouverture de Soirées, et une image générée fidèle au vrai matériel (deux lyres, brouillard, salle des fêtes) pour Formules.

**Textes et écarts avec le relevé**

12. **Soirées (index et premier écran) et Formules (cartes) : des occasions absentes du relevé.**
    - Il s'agit de « Soirées étudiantes », « Dîners dansants », « Clubs sportifs », « du dîner dansant au séminaire », « Soirée blanche, soirée étudiante » (BlackLight) et « Associations, comités des fêtes, clubs ».
    - La page affirme « d'après son site » : retirer ces occasions, ou les sourcer dans le relevé.
    - Les usages attribués à chaque formule (« Mariage, anniversaire, soirée privée » pour De base…) sont inventés eux aussi. Les supprimer, ou les présenter comme des exemples.
13. **Ludo, livre d'or, 1366 et 390 : une citation fabriquée.**
    - On lit « « Ludo anime nos soirées du vendredi régulièrement dans notre bar » — Claire, Brive », dans une section qui dit « mot pour mot ».
    - Le relevé ne donne pas de citation de Claire, seulement le sujet. Retirer les guillemets et en faire une mention (« Claire, Brive : les soirées du vendredi dans son bar »), ou retrouver le texte exact.
14. **Accueil (formulaire) et Contact : « Politique de confidentialité : à compléter » est visible dans le formulaire lui-même.**
    - L'audit le relève sur `index.html` et `contact.html`.
    - Mettre une phrase vraie, ou un lien vers la page de mentions.
15. **Accueil, premier écran, 390 : on ne sait ni où ni pour qui** (mission 1 du test visiteur, ratée).
    - La ligne « DJ, son, lumière et laser · Gard, Vaucluse, Drôme, Ardèche » est remplacée par « Glissez pour bouger la lumière ».
    - Garder la ligne de lieu au-dessus du titre, et déplacer la consigne sur le pupitre.
    - À 1366×768, la phrase « pour qui » (anniversaires, mariages, fêtes de village) a disparu aussi : elle ne s'affiche qu'à 768 et 1440.

**Défauts techniques encore ouverts**

16. **Accueil, 768 : le bouton « Demander ce devis » chevauche le bloc prix,** et le détail de la formule est coupé (audit : « texte coupé »).
    - Sur 390, les faders font 40 px de large, sous les 44 px.
    - Leurs libellés (« FIN DE SOIRÉE » sur deux lignes, « 2 lyres ») font environ 9 à 11 px.
17. **Accueil, toutes tailles : erreur de console** « pupitre TypeError: Cannot read properties of null (reading 'getContext') », sur 21 combinaisons de l'audit.
    - Un pupitre (sans doute celui de l'accueil ou de Formules) démarre sans son canvas.
18. **Le fil d'une page à l'autre est invisible.**
    - La colonne de points et la lyre de 10 px dans la marge droite ne relient rien aux yeux du visiteur.
    - Le plan promettait un faisceau qui saute de section en section. Il faut au minimum :
      - une lyre de 24 à 32 px, qui projette un vrai cône sur le titre de la section en cours ;
      - ou un trait laser qui court sur toute la hauteur de la page.

### Mineur

**Composition**
- **Soirées, Formules et Ludo, 1366** : les titres « On fête quoi ? », « Le pupitre » et « En lumière » commencent à environ 296 px. Tout le reste s'aligne à 48 px. On dirait une erreur d'alignement : les aligner, ou assumer franchement une colonne décalée.
- **Ludo, galerie 1366** : la mosaïque laisse une case vide à droite de la photo verticale, en bas. Combler ou recomposer la grille.
- **Accueil, 1366** :
  - environ 260 px de noir entre « Composer ma soirée au pupitre » et « Trois façons de faire la fête » ;
  - environ 170 px entre la carte et « Une date en tête ? ».
  - Le regard 6 demandait environ 96 px : à moitié fait.
- **Accueil, ordre des sections** : les prix arrivent (deux fois) avant de dire pour qui joue Ludo. Le plan mettait « trois soirées » juste après l'ouverture.
- **Accueil, livre d'or** : les faisceaux semblent s'arrêter au-dessus de la citation. Vérifier dans le film qu'ils rejoignent bien la pointe qui écrit (point 3 du regard 6).
- **Pied de page, tous formats**
  - Le logo GIF « DJ LUDO REMIX » en dégradé pixelisé détonne à côté de la typographie. Le remplacer par le logotype du site, ou le passer en SVG.
  - Sur 390, il fait deux écrans de liens empilés : passer Sommaire et Suivre Ludo sur deux colonnes.

**Typographie**
- **Toutes les pages** : l'audit voit les deux lignes de chaque titre qui se chevauchent, à cause de la lueur néon ou d'un interlignage trop serré. On ne le voit pas sur les captures, mais il faut desserrer légèrement.
- **Soirées, 1920** : les numéros 01 à 04 touchent les titres h3.

**Textes et réseaux**
- **Contact, 1366 et 390** : le même paragraphe « Appelez Ludo ou décrivez votre soirée… » est écrit deux fois, dans l'ouverture puis sous « Demande de devis ».
- **Libellés répétés** : « Voir toutes les soirées » trois fois sur l'accueil (cartes), « Un devis pour ça » quatre fois sur Soirées. Varier ou cibler (« Un devis pour un mariage »…).
- **Formules, Unlimited** : « Heure en plus : non précisé » sonne comme une case vide. Écrire « sans heure de fin ».
- **Formules, 1366** : « Choisir Association » passe sur deux lignes, contre une seule pour les autres boutons.
- **Zone** : le relevé cite aussi la Lozère et l'Auvergne-Rhône-Alpes. Le texte de l'accueil et le pied de page s'arrêtent à quatre départements.
- **Réseaux** : le compte X (/DjludoDjludo472) manque dans « Suivre Ludo ».
- **Formules** : le nouveau système de 3 000 W pour 500 personnes, un vrai argument du relevé, n'est cité nulle part.

**Carte**
- **Accueil et Contact** :
  - le point de Lapalud chevauche le libellé « Pont-Saint-Esprit », et le point blanc du centre n'est pas sous le nom ;
  - sur Contact, aucune légende « 50 km, déplacement compris » n'explique le cercle.
- **Contact, 390** : Uzès est caché sous la barre « Appeler / Devis sous 48 h ».

**Autres**
- **Contact et Ludo** : il reste des vignettes floues de salles des fêtes (note 2), à environ 380 × 280 px sur Contact. C'est acceptable en vignette, mais pas en vis-à-vis d'un titre de 80 px.
- **Soirées, 1366 sans JS** : « Demander un devis » et « Réponse sous 48 h » passent sous le premier écran.
- **404** : elle est cohérente (« Piste vide », « Retour sur la piste »), mais la poursuite n'est qu'un halo flou. Mineur.

### À garder

- **Accueil** : la poursuite sur une vraie photo de Ludo, le pupitre aux vrais prix et au vrai matériel, et le livre d'or écrit au laser. C'est une ouverture qui appartient à ce client.
- **Le voile en iris** entre les pages, avec la lentille et le nom de la page : c'est le lien le plus réussi.
- **Soirées** : l'index géant « On fête quoi ? » et les bandeaux Total Bodega et Kitsch Party, la seule page d'onglet qui ait de l'allure.
