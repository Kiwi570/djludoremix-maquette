import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="introuvable" id="debut">
  ${c.media({ nom: 'grok/page-404', alt: c.s('introuvable.alt'), priorite: true, classe: 'introuvable-fond', sizes: '100vw', attrs: 'data-fx="zoom"' })}
  <div class="introuvable-texte conteneur">
    <p class="surtitre">404</p>
    <h1 data-grille="typo"><span class="laser-titre" data-effet="laser-titre" data-texte="${c.s('introuvable.titre')}">${c.t('introuvable.titre')}</span></h1>
    <p data-anime data-info-cle>${c.t('introuvable.texte')}</p>
    <p data-anime>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}</p>
  </div>
  <span class="introuvable-spot" data-iris-centre="disque" aria-hidden="true"></span>
</section>
`;
