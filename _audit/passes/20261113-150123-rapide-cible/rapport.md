# Rapport d’audit

Projet : `djludoremix-maquette` · 13/11/2026 16:11:12 · 10 min · 5 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/soirees,/formules,/ludo,/contact

## Résumé

- Statut : **133 échec(s)**
- Passe : `20261113-150123-rapide-cible` · version ?v=1
- Échecs : **133**
- À regarder : **23**
- Non lancé : **5**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (30), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (6), menu (1), clavier (5), liens et boutons (5), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), fluidité (5)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 5 page(s) |
| 6. La scène est un geste du métier | ✓ présent | geste du métier sur / |
| 7. L’action principale a un retour physique | ✓ présent | sur /contact, / |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (5)

- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `formules.html` — fichier introuvable : /assets/partage/formules-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `ludo.html` — fichier introuvable : /assets/partage/ludo-fr.jpg
- **image de partage** — `soirees.html` — fichier introuvable : /assets/partage/soirees-fr.jpg

### zone tactile sous 44 px (11)

- **zone tactile sous 44 px** — `/` — nav > ul > li:nth-of-type(4) > a « Ludo » — 36 × 44 px _(390×844 sansWebgl, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — nav > ul > li:nth-of-type(3) > a « Ludo » — 36 × 44 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/contact` — nav > ul > li:nth-of-type(4) > a « Ludo » — 36 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/contact` — nav > ul > li:nth-of-type(3) > a « Ludo » — 36 × 44 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/contact` — section#debut > div.ouv-contact-texte:nth-of-type(1) > p.ouv-contact-tel:nth-of-type(2) > a « 07 61 59 61 17 » — 209 × 42 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/formules` — nav > ul > li:nth-of-type(4) > a « Ludo » — 36 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/formules` — nav > ul > li:nth-of-type(3) > a « Ludo » — 36 × 44 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/ludo` — nav > ul > li:nth-of-type(4) > a « Ludo » — 36 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/ludo` — nav > ul > li:nth-of-type(3) > a « Ludo » — 36 × 44 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/soirees` — nav > ul > li:nth-of-type(4) > a « Ludo » — 36 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/soirees` — nav > ul > li:nth-of-type(3) > a « Ludo » — 36 × 44 px _(844×390 normal)_

### textes qui se chevauchent (53)

- **textes qui se chevauchent** — `/` — section#debut > div.hero-texte:nth-of-type(2) > h1.hero-titre > span.hero-ligne:nth-of-type(1) « VOTRE SOIRÉE » — avec section#debut > div.hero-texte:nth-of-type(2) > h1.hero-titre > span.laser-titre.hero-ligne:nth-of-type(2) « EN PLEIN FEUX » _(390×844 sansWebgl, 390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.rayon-boite:nth-of-type(2) > svg.rayon-carte > g.rayon-ville.est-dans:nth-of-type(4) > text — avec div.rayon-boite:nth-of-type(2) > svg.rayon-carte > g.rayon-ville.est-dans:nth-of-type(13) > text _(390×844 sansWebgl, 390×844 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.rayon-boite:nth-of-type(2) > svg.rayon-carte > g.rayon-ville.est-dans:nth-of-type(8) > text — avec div.rayon-boite:nth-of-type(2) > svg.rayon-carte > g.rayon-ville.est-dans:nth-of-type(9) > text _(390×844 sansWebgl, 390×844 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — section#debut > div.hero-texte:nth-of-type(2) > p.surtitre:nth-of-type(1) « DJ, SON, LUMIÈRE ET LASER · GARD, VAUCLUSE, DRÔME, » — avec section#debut > div.hero-texte:nth-of-type(2) > h1.hero-titre > span.hero-ligne:nth-of-type(1) « VOTRE SOIRÉE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — section#debut > div.hero-texte:nth-of-type(2) > h1.hero-titre > span.laser-titre.hero-ligne:nth-of-type(2) « EN PLEIN FEUX » — avec section#debut > p.hero-astuce > span.astuce-doigt:nth-of-type(2) « GLISSEZ POUR BOUGER LE FAISCEAU » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.ouv-contact-texte:nth-of-type(1) > h1 > span.hero-ligne:nth-of-type(1) « RÉSERVEZ » — avec section#debut > div.ouv-contact-texte:nth-of-type(1) > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « VOTRE DATE » _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/contact` — div.ouv-contact-carte.rayon-boite:nth-of-type(2) > svg.rayon-carte > g.rayon-ville.est-dans:nth-of-type(4) > text — avec div.ouv-contact-carte.rayon-boite:nth-of-type(2) > svg.rayon-carte > g.rayon-ville.est-dans:nth-of-type(13) > text _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/contact` — div.ouv-contact-carte.rayon-boite:nth-of-type(2) > svg.rayon-carte > g.rayon-ville.est-dans:nth-of-type(8) > text — avec div.ouv-contact-carte.rayon-boite:nth-of-type(2) > svg.rayon-carte > g.rayon-ville.est-dans:nth-of-type(9) > text _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.ouv-contact-texte:nth-of-type(1) > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « VOTRE DATE » — avec section#debut > div.ouv-contact-texte:nth-of-type(1) > p.ouv-contact-tel:nth-of-type(2) > a « 07 61 59 61 17 » _(1366×768 normal)_
- **textes qui se chevauchent** — `/formules` — section#debut > div.ouv-formules-texte > h1 > span.hero-ligne:nth-of-type(1) « COMPOSEZ » — avec section#debut > div.ouv-formules-texte > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « VOTRE LUMIÈRE » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/formules` — div.pupitre-grille.conteneur:nth-of-type(2) > form.pupitre-table > div.pupitre-resultat:nth-of-type(2) > p.pupitre-nom:nth-of-type(2) « 1ER PRIX » — avec form.pupitre-table > div.pupitre-resultat:nth-of-type(2) > p.pupitre-prix:nth-of-type(3) > span « 400 € » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/formules` — section#debut > div.ouv-formules-texte > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « VOTRE LUMIÈRE » — avec section#debut > div.ouv-formules-texte > p.ouv-formules-prix:nth-of-type(2) > span « DE 400 À 1 250 € » _(1366×768 normal)_
- **textes qui se chevauchent** — `/ludo` — section#debut > div.ouv-ludo-texte > h1 > span.hero-ligne:nth-of-type(1) « DERRIÈRE » — avec section#debut > div.ouv-ludo-texte > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « LES PLATINES » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#debut > div.ouv-soirees-texte.conteneur > h1.ouv-soirees-titre > span.hero-ligne:nth-of-type(1) « TOUTES LES FÊTES, » — avec section#debut > div.ouv-soirees-texte.conteneur > h1.ouv-soirees-titre > span.laser-titre.hero-ligne:nth-of-type(2) « UN SEUL DJ » _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(1) « ANNIVERSAIRES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(2) « MARIAGES » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(2) « MARIAGES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(3) « COUSINADES » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(3) « COUSINADES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(4) « GARDEN PARTIES » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(4) « GARDEN PARTIES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(5) « COMMUNIONS » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(5) « COMMUNIONS » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(6) « DÉPARTS EN RETRAITE » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(6) « DÉPARTS EN RETRAITE » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(7) « FÊTES VOTIVES » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(6) « DÉPARTS EN RETRAITE » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(8) « BALS » _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(7) « FÊTES VOTIVES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(9) « KERMESSES » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(9) « KERMESSES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(10) « ARBRES DE NOËL » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(10) « ARBRES DE NOËL » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(11) « BODEGAS » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(11) « BODEGAS » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(12) « SOIRÉES DE CAMPING » _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(12) « SOIRÉES DE CAMPING » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(13) « SÉMINAIRES » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(13) « SÉMINAIRES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(14) « SOIRÉES DE GALA » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(14) « SOIRÉES DE GALA » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(15) « INAUGURATIONS » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(15) « INAUGURATIONS » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(16) « SOIRÉES ÉTUDIANTES » _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(16) « SOIRÉES ÉTUDIANTES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(17) « DÎNERS DANSANTS » _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(17) « DÎNERS DANSANTS » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(18) « CLUBS SPORTIFS » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(1) « ANNIVERSAIRES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(3) « COUSINADES » _(844×390 normal, 1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(2) « MARIAGES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(4) « GARDEN PARTIES » _(844×390 normal, 1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(3) « COUSINADES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(5) « COMMUNIONS » _(844×390 normal, 1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(4) « GARDEN PARTIES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(6) « DÉPARTS EN RETRAITE » _(844×390 normal, 1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(5) « COMMUNIONS » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(7) « FÊTES VOTIVES » _(844×390 normal, 1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(6) « DÉPARTS EN RETRAITE » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(9) « KERMESSES » _(844×390 normal, 1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(7) « FÊTES VOTIVES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(10) « ARBRES DE NOËL » _(844×390 normal, 1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(8) « BALS » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(11) « BODEGAS » _(844×390 normal, 1366×768 normal)_
- **textes qui se chevauchent** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(9) « KERMESSES » — avec section#occasions > ul.index-liste.conteneur > li:nth-of-type(11) « BODEGAS » _(844×390 normal, 1366×768 normal)_
- … et 13 autres (rapport.json)

### contraste insuffisant (37)

- **contraste insuffisant** — `/` — section#debut > div.hero-texte:nth-of-type(2) > h1.hero-titre > span.laser-titre.hero-ligne:nth-of-type(2) « EN PLEIN FEUX » — 1.00:1 (minimum 3:1) _(390×844 sansWebgl, 390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#lumiere > div.lumiere-collant > div.lumiere-texte.conteneur:nth-of-type(3) > h2.laser-titre.trace-en-cours « UNE SCÈNE, MILLE COULEURS » — 1.00:1 (minimum 3:1) _(390×844 sansWebgl, 390×844 normal, 844×390 normal, 1366×768 normal)_
- **contraste insuffisant** — `/` — ul.livre-avis > li:nth-of-type(1) > blockquote > p.laser-titre.laser-titre--avis « « UN SHOW LASER ÉPOUSTOUFLANT » » — 1.00:1 (minimum 3:1) _(390×844 sansWebgl, 390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — ul.livre-avis > li:nth-of-type(2) > blockquote > p.laser-titre.laser-titre--avis « « LE SHOW LASER ÉTAIT ABSOLUMENT INCROYABLE ! » » — 1.00:1 (minimum 3:1) _(390×844 sansWebgl, 390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — ul.livre-avis > li:nth-of-type(3) > blockquote > p.laser-titre.laser-titre--avis « « UNE PRESTATION EXCEPTIONNELLE LORS DE NOTRE MARI » — 1.00:1 (minimum 3:1) _(390×844 sansWebgl, 390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — ul.livre-avis > li:nth-of-type(4) > blockquote > p.laser-titre.laser-titre--avis « « PROFESSIONNALISME, ÉCOUTE ET BONNE HUMEUR » » — 1.00:1 (minimum 3:1) _(390×844 sansWebgl, 390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#date > div.tete-section:nth-of-type(1) > h2.laser-titre.trace-en-cours « RÉSERVEZ LA DATE » — 1.00:1 (minimum 3:1) _(390×844 sansWebgl, 390×844 normal, 844×390 normal, 1366×768 normal)_
- **contraste insuffisant** — `/` — section#lumiere > div.lumiere-collant > div.lumiere-texte.conteneur:nth-of-type(3) > h2.laser-titre « UNE SCÈNE, MILLE COULEURS » — 1.00:1 (minimum 3:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#date > div.tete-section:nth-of-type(1) > h2.laser-titre « RÉSERVEZ LA DATE » — 1.00:1 (minimum 3:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/contact` — section#debut > div.ouv-contact-texte:nth-of-type(1) > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « VOTRE DATE » — 1.00:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 390×844 sansWebgl, 320×568 sansJs)_
- **contraste insuffisant** — `/contact` — section#devis > div.devis-grille > div.devis-tete > h2.laser-titre.trace-en-cours « DEMANDE DE DEVIS » — 1.00:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere.est-actif:nth-of-type(1) > span.fpe__num:nth-of-type(1) « 1 » — 3.65:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/contact` — section#devis > div.devis-grille > div.devis-tete > h2.laser-titre « DEMANDE DE DEVIS » — 1.00:1 (minimum 3:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/formules` — section#debut > div.ouv-formules-texte > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « VOTRE LUMIÈRE » — 1.00:1 (minimum 3:1) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **contraste insuffisant** — `/ludo` — section#debut > div.ouv-ludo-texte > h1 > span.laser-titre.hero-ligne:nth-of-type(2) « LES PLATINES » — 1.00:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(1) « ANNIVERSAIRES » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(2) « MARIAGES » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(3) « COUSINADES » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(4) « GARDEN PARTIES » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(5) « COMMUNIONS » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(6) « DÉPARTS EN RETRAITE » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(7) « FÊTES VOTIVES » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(8) « BALS » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(9) « KERMESSES » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(10) « ARBRES DE NOËL » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(11) « BODEGAS » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(12) « SOIRÉES DE CAMPING » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(13) « SÉMINAIRES » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(14) « SOIRÉES DE GALA » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(15) « INAUGURATIONS » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(16) « SOIRÉES ÉTUDIANTES » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(17) « DÎNERS DANSANTS » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — section#occasions > ul.index-liste.conteneur > li:nth-of-type(18) « CLUBS SPORTIFS » — 1.65:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal)_
- **contraste insuffisant** — `/soirees` — article#privee > div.public-texte > span.public-num « 01 » — 1.00:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/soirees` — article#publique > div.public-texte > span.public-num « 02 » — 1.00:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/soirees` — article#entreprise > div.public-texte > span.public-num « 03 » — 1.00:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/soirees` — article#bar > div.public-texte > span.public-num « 04 » — 1.00:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 320×568 sansJs)_

### photo faible affichée en grand (13)

- **photo faible affichée en grand** — `/` — div.lumiere-photos:nth-of-type(1) > figure.media.lumiere-photo:nth-of-type(2) > picture > img « Ludo aux platines sous une lumière verte » — ludo-vert (4/5, faible, 100 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal, 1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.lumiere-photos:nth-of-type(1) > figure.media.lumiere-photo:nth-of-type(3) > picture > img « Ludo mixe, casque bleu, mur éclairé en rouge et or » — ludo-rouge (4/5, faible, 100 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal, 1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.date-mur > figure.media.date-photo > picture > img — contact-ludo (4/5, faible, 28 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/contact` — section#reseaux > figure.media.reseaux-photo > picture > img « Lasers vert et rose au-dessus de la piste d'une sa » — salle-laser-1 (2/5, faible, 39 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal, 1366×768 normal)_
- **photo faible affichée en grand** — `/contact` — div.devis-tete > figure.media.devis-photo > picture > img « Ludo en casquette derrière ses platines, en extéri » — contact-ludo (4/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/formules` — section#faq > figure.media.faq-media > picture > img « Ludo derrière ses platines, lumière rouge sur la p » — ludo-braise (4/5, faible, 41 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/ludo` — div.photos-mur.conteneur:nth-of-type(2) > figure.media.photo:nth-of-type(1) > picture > img « Ludo aux platines sous une lumière verte » — ludo-vert (4/5, faible, 37 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/ludo` — div.photos-mur.conteneur:nth-of-type(2) > figure.media.photo:nth-of-type(1) > picture > img « Ludo aux platines sous une lumière verte » — ludo-vert (4/5, faible, 30 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/ludo` — section#fin > figure.media.fin-page-media > picture > img « Ludo derrière ses platines, lumière rouge sur la p » — ludo-braise (4/5, faible, 25 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/soirees` — article#privee > figure.media.public-media > picture > img « Ludo, casque rose, mixe en plein air sous une perg » — soiree-privee (4/5, faible, 25 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/soirees` — article#publique > figure.media.public-media > picture > img « Ludo sous le pont de scène d'une fête en plein air » — soiree-publique (3/5, faible, 25 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/soirees` — article#entreprise > figure.media.public-media > picture > img « Dîner de gala, tables dressées et éclairage d'ambi » — grok/soirees-entreprise (4/5, faible, 25 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/soirees` — article#bar > figure.media.public-media > picture > img « Ludo aux platines Numark, guirlande lumineuse derr » — bars-ludo (4/5, faible, 25 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(2) > p.hero-cles:nth-of-type(4) « dès 400 € formule son et lumière 50 km déplacement » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.ouv-contact-texte:nth-of-type(1) > p.hero-actions:nth-of-type(4) > span.hero-info « Réponse sous 48 h · Pont-Saint-Esprit · Gard » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/soirees` — section#debut > div.ouv-soirees-texte.conteneur > p.hero-actions:nth-of-type(3) > span.hero-info « Réponse sous 48 h » _(320×568 sansJs)_

### section sans visuel (7)

- **section sans visuel** — `/contact` — section#devis > div.devis-grille > section.fpe.fpe--actif « 1 Votre soirée 2 Date et lieu 3 Formule 4 Vos coor » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl)_
- **section sans visuel** — `/contact` — section#devis > div.devis-grille > section.fpe « QUELLE SOIRÉE PRÉPAREZ-VOUS ? Anniversaire ou cous » _(390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/formules` — section#tableau « LES CINQ FORMULES CÔTE À CÔTE 1ER PRIX 400 € Anniv » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/ludo` — section#parcours « LE PARCOURS, AU LASER Les dates de sa biographie.  » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/ludo` — section#livre « LE LIVRE D'OR 286 messages sur le site. Quelques-u » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/soirees` — section#occasions « ON FÊTE QUOI ? Les occasions que Ludo anime, d'apr » _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/soirees` — section#fin « VOTRE FÊTE EST DANS LA LISTE ? Et si elle n'y est  » _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 320×568 sansJs)_

### contraste sur image (2)

- **contraste sur image** — `/soirees` — section#debut > div.ouv-soirees-texte.conteneur > h1.ouv-soirees-titre > span.laser-titre.hero-ligne:nth-of-type(2) « UN SEUL DJ » — 1.29:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(390×844 normal)_
- **contraste sur image** — `/soirees` — section#debut > div.ouv-soirees-texte.conteneur > h1.ouv-soirees-titre > span.laser-titre.hero-ligne:nth-of-type(2) « UN SEUL DJ » — 1.09:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/soirees` — .index-liste > li:nth-child(1) ; .index-liste > li:nth-child(2) ; .index-liste > li:nth-child(3) — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### intro pas accélérée par un glissement (1)

- **intro pas accélérée par un glissement** — `/` — fin 1223 ms après l'action _(390×844 intro)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `index.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### texte de contenu sous 13 px (ordinateur) (8)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.trois.fx-fini:nth-of-type(2) > article.carte-soiree:nth-of-type(3) > figure.media.carte-soiree-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#formules > figure.media.pupitre-apercu-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/formules` — section#debut > figure.media.ouv-formules-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/formules` — div.pupitre-grille.conteneur:nth-of-type(2) > div.pupitre-salle > figure.media.pupitre-salle-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/soirees` — section#debut > figure.media.ouv-soirees-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/soirees` — section#bodega > figure.media.concept-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/soirees` — section#kitsch > figure.media.concept-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/soirees` — article#entreprise > figure.media.public-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### typographie française (10)

- **typographie française** — `/` — ul.livre-avis > li:nth-of-type(1) > blockquote > p.laser-titre.laser-titre--avis « « UN SHOW LASER ÉPOUSTOUFLANT » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/` — ul.livre-avis > li:nth-of-type(2) > blockquote > p.laser-titre.laser-titre--avis « « LE SHOW LASER ÉTAIT ABSOLUMENT INCROYABLE ! » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/` — ul.livre-avis > li:nth-of-type(3) > blockquote > p.laser-titre.laser-titre--avis « « UNE PRESTATION EXCEPTIONNELLE LORS DE NOTRE MARI » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/` — ul.livre-avis > li:nth-of-type(4) > blockquote > p.laser-titre.laser-titre--avis « « PROFESSIONNALISME, ÉCOUTE ET BONNE HUMEUR » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/ludo` — ul.livre-or-liste.fx-fini > li:nth-of-type(1) > blockquote > p « « UN SHOW LASER ÉPOUSTOUFLANT » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/ludo` — ul.livre-or-liste.fx-fini > li:nth-of-type(2) > blockquote > p « « LE SHOW LASER ÉTAIT ABSOLUMENT INCROYABLE ! » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/ludo` — ul.livre-or-liste.fx-fini > li:nth-of-type(3) > blockquote > p « « UNE PRESTATION EXCEPTIONNELLE LORS DE NOTRE MARI » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/ludo` — ul.livre-or-liste.fx-fini > li:nth-of-type(4) > blockquote > p « « PROFESSIONNALISME, ÉCOUTE ET BONNE HUMEUR » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/ludo` — ul.livre-or-liste.fx-fini > li:nth-of-type(5) > blockquote > p « « TRÈS À L'ÉCOUTE ET RÉACTIF PENDANT LES PRÉPARATI » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/ludo` — ul.livre-or-liste.fx-fini > li:nth-of-type(6) > blockquote > p « « LUDO ANIME NOS SOIRÉES DU VENDREDI RÉGULIÈREMENT » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/contact` — écran différent à la même position après rechargement (6.3 %), voir comparaisons/rechargement-contact-*.png _(1366×768)_

### fluidité (1)

- **fluidité** — `/` — 8 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## Non lancé

- **fluidite** : browserContext.close: Protocol error (Target.disposeBrowserContext): Failed to find context with id 410AA37AAB80EF9196FAC1EC5A76F701
- **mouvement** : browser.newContext: Target page, context or browser has been closed
- **vitesse** : browser.newContext: Target page, context or browser has been closed
- **captures** : browser.newContext: Target page, context or browser has been closed
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 2 étape(s) notée(s), 27 min de travail pour 50 min de budget, 15 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /, /contact, /formules, /ludo, /soirees.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2616 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2482 ms depuis le premier octet
- Ouverture /formules (1366×768) : 2618 ms depuis le premier octet
- Ouverture /ludo (1366×768) : 2430 ms depuis le premier octet
- Ouverture /soirees (1366×768) : 2437 ms depuis le premier octet
- Ouverture / (390×844) : 2609 ms depuis le premier octet
- Ouverture /contact (390×844) : 2426 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /formules (390×844) : 2498 ms depuis le premier octet
- Ouverture /ludo (390×844) : 2460 ms depuis le premier octet
- Ouverture /soirees (390×844) : 2493 ms depuis le premier octet
- bords de l’écran /soirees 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 254 images d’intro, 22 de voile et 164 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /formules : aucune section épinglée ou plein écran.
- Tient dans l'écran /ludo : aucune section épinglée ou plein écran.
- Tient dans l'écran /soirees : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 187, tâche la plus longue 0 ms
- Fluidité /formules 1366×768 (molette) : 0 % d'images lentes sur 239, tâche la plus longue 0 ms
- Fluidité /ludo 1366×768 (molette) : 0 % d'images lentes sur 291, tâche la plus longue 0 ms
- Fluidité /soirees 1366×768 (molette) : 1 % d'images lentes sur 329, tâche la plus longue 82 ms

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours,fluidite,mouvement,vitesse,captures
```
