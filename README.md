# DJ Ludo Remix · maquette v1 (direction « Plein feux »)

Maquette de démonstration du futur site de DJ Ludo Remix (Pont-Saint-Esprit, Gard), à partir du site actuel djludoremix.fr.
Adresse prévue : https://djludoremix-maquette.vercel.app

## Pages
Accueil · Soirées · Formules · Ludo · Contact · page 404.
Pages du site actuel non reprises (disponibles en v2) : DJ sans matériel (bars et restaurants, résumée dans Soirées), Vidéo, Playlist, Compilation CD, Actualités, Partenaires, Heures d'ouverture, pages de blog pour le référencement. La boutique Spreadshop est reliée depuis le pied de page et la page Contact.

## Fiche à compléter par le client
| Information | Où | État |
|---|---|---|
| Mentions légales (raison sociale, adresse, SIRET 751 501 529 à confirmer, directeur de la publication) | pied de page | à compléter |
| Politique de confidentialité (RGPD) | pied de page, formulaires | à compléter |
| Hébergeur : Vercel Inc. (adresse à vérifier sur vercel.com au moment de la mise en ligne) | mentions | à compléter |
| Adresse e-mail de contact (masquée sur le site actuel) | contact | à compléter |
| Assurance responsabilité civile professionnelle, si Ludo veut l'afficher | contact | à compléter |
| Confirmation du numéro 07 61 59 61 17 (le 07 87 32 89 20 du site actuel appartient à une pub voisine, « DanielKing – Photobooth ») | partout | à confirmer |
| Ancienneté : le site actuel dit 20 ans (accueil) et plus de 15 ans (biographie) ; la maquette n'affiche que des dates | Ludo | à trancher |
| Prix : la page Matériels donne 5 formules (400 à 1 250 €) alors que l'accueil dit « sur devis uniquement » ; la maquette affiche les prix des formules | Formules | à confirmer |
| Durée de l'heure supplémentaire de la formule Unlimited (non précisée) | Formules | à compléter |
| Livre d'or : cinq extraits repris mot pour mot ; 286 messages au total | Accueil, Ludo | à garder à jour |
| Politique de confidentialité et mentions légales (textes non fournis) | Pied de page, formulaires | à compléter |
| Images Grok d'ouverture (Soirées, Formules) : à remplacer en v2 par des salles des fêtes et des places de village | Soirées, Formules | v2 |

Retiré ou remplacé faute d'information : aucun avis inventé, aucun chiffre d'invités non sourcé, aucun horaire d'ouverture (la page « Heures d'ouverture » du site actuel ne donne rien d'exploitable).

## Crédits des images
- Photos de Ludo aux platines (mur de pierre) : **Yann Elissalde** (signature visible sur les originaux, recadrée : copies dans `recu/site/net/`).
- Photo de Ludo sous le pont de scène en plein air : **Christophe Restivo** (signature recadrée).
- Autres photos : archives DJ Ludo Remix (site actuel).
- Badges Zankyou : repris du site actuel.
- Illustrations générées par IA (Grok), marquées « Illustration générée » : ouvertures de Soirées et de Formules, salle du pupitre, Total Bodega, Kitsch Party, gala d'entreprise, ambiance UV, page 404. **Garder cette mention sur le site final.**

## À retirer à la mise en ligne définitive
- `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`).
- Formulaires simulés (réserver la date, demande de devis) : à brancher sur l'envoi réel (le formulaire Fillout actuel ou un service d'e-mail).
- Mentions « à compléter » du pied de page, une fois les textes fournis.

## Construction
Pages générées par `node outils/generer.mjs` à partir de `donnees/` et `source/` (ne jamais modifier les .html à la main).
Images : `plan-images.json` et le pipeline de la bibliothèque des maquettes. Audit : `node _audit/audit.mjs`.
