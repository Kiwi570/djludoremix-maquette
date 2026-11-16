# DJ Ludo Remix — plans de la v1 (direction « Plein feux »)

Français seul, sans son. Pas d'ancienneté affichée : des dates (« résident des Bodega Feria depuis 2011 »).
Téléphone : 07 61 59 61 17. Voile : iris (douche de poursuite). Plan de l'accueil : objet-unique (la lyre et son faisceau).

## Plan du site (v1 en gras)
| Page | Ouverture (composition · objet · mouvement) | Signature après l'ouverture | Fond dominant |
|---|---|---|---|
| **Accueil** | plein cadre, noir et brouillard · la lyre accrochée au pont · le laser trace le titre, le faisceau descend sur Ludo | faisceau qu'on promène, lumière qui change de couleur à chaque section | noir fumée |
| **Formules** | compacte, scindée · photo du pupitre (Grok) et « dès 400 € » en très grand · les faders montent un par un | pupitre lumière : on pousse les faders, la salle s'allume et la formule se choisit avec son vrai prix | anthracite + UV |
| **Soirées** | plein cadre en contre-jour · la piste sous les lasers (Grok) · le titre s'écrit en index géant | Total Bodega et Kitsch Party : la boule à facettes jette ses éclats au défilement ; index géant des occasions | rouge braise puis rose |
| **Ludo** | portrait scindé, texte à droite · Ludo debout (photo de Yann Elissalde) · la photo passe du bleu au rouge | frise du parcours (2010 → 2021) tracée au laser ; mur des photos ; livre d'or | pierre chaude |
| **Contact** | compacte · le numéro en très grand, carte du rayon de 50 km · le cercle se trace | demande de devis en étapes ; la date s'écrit au laser et se tamponne « reçu » | noir |
| 404 | piste vide sous une seule poursuite (Grok) | | noir |
Hors v1 (disponibles en v2) : DJ sans matériel (bars), Vidéo, Playlist, Compilation CD, Actualités, Partenaires, Boutique (lien externe Spreadshop dans le pied de page).

## Accueil, section par section (8 écrans environ)
1. **Ouverture** : lyre au pont + faisceau (`data-grille="manipuler"`, `data-iris-centre` sur la lentille), titre « Votre soirée / en plein feux » (`data-grille="typo"`, laser), dès 400 €, 50 km compris, devis, téléphone.
2. **Trois soirées** (privées, publiques, entreprises) : cartes photo, le faisceau saute de carte en carte au défilement (`data-grille="fil"`).
3. **La lumière change** (scène épinglée, `data-grille="scene"`) : la même scène de Ludo en violet, rouge, vert puis braise ; la lyre change de gel à chaque cran, la page se teinte. Repères vrais : résident Bodega Feria 2011, 89 prestations en 2015, 7 h de mix devant 500 personnes.
4. **Les formules au pupitre** (aperçu) : 5 faders, 5 vrais prix, UV qui fait briller le blanc. Lien vers Formules.
5. **Le show laser** : avis réels du livre d'or tracés au laser, badges Zankyou et Mariages.net.
6. **Le rayon** : carte des 4 départements, cercle de 50 km autour de Pont-Saint-Esprit balayé par le faisceau.
7. **Réservez la date** : formulaire court ; à l'envoi, la date s'écrit au laser et un tampon « reçu » se pose (`data-grille="retour"`).

## Intro, instant par instant (moins de 3 s)
- 0,0 s : noir fumée, brouillard qui dérive.
- 0,5 s : la lentille de la lyre s'allume (point bleu), le pont apparaît.
- 1,0 s : un trait de laser rouge trace « LUDO REMIX » d'un seul geste au centre.
- 1,8 s : le faisceau s'ouvre en cône et descend ; le tracé du logo glisse jusqu'à la lentille (`versObjet`).
- 2,3 s : la page s'ouvre en cercle depuis la lentille, Ludo apparaît dans le faisceau, le titre arrive.

## Grille wouahou
1. **Manipuler** : on attrape le faisceau (souris ou doigt) et on le promène dans le brouillard, il garde son élan et révèle la photo. Il bouge seul pendant 2 s après l'intro. Effet propre `faisceau` (WebGL, repli en masque CSS).
2. **L'intro devient la page** : le tracé laser du logo rejoint la lentille de la lyre (`versObjet`, `data-iris-centre="disque"`).
3. **Voile** : `formeVoile: "iris"`, une poursuite qui s'ouvre depuis le clic sur l'objet de la page suivante.
4. **Fil** : le faisceau de la lyre suit la lecture et se pose sur chaque section ; sur les autres pages, une petite lyre dans la marge haute pointe le titre en cours.
5. **Typo** : titres tracés en un seul trait de laser (`texte-grave-en-direct`, habillé en laser) sur chaque page.
6. **Scène** : le pupitre lumière (Formules) et la lumière qui change (Accueil), deux gestes d'éclairagiste.
7. **Retour** : la date demandée s'écrit au laser et se tamponne « reçu, réponse sous 48 h ».
8. **Effets modernes** : accueil lumiere-pointeur (signature), ambiance-qui-change, trait-qui-se-dessine ; Formules ambiance-qui-change (la salle qui s'allume) ; Soirées particules (éclats de boule à facettes) et typo-geante ; Ludo trait-qui-se-dessine (frise) ; Contact trait-qui-se-dessine (cercle du rayon).

## Effets propres (`data-effet`)
faisceau · laser-titre · lumiere-change · pupitre · uv · rayon-50km · date-laser · eclats

## Plan des images
`plan-images.json` : vraies photos (séance de Yann Elissalde notée 4 en grand ; pergola au crépuscule 4 ; ferrade 3 ; salles des fêtes et lasers 2 en vignettes) + 10 images Grok (document `djludoremix-images-grok.docx`).
