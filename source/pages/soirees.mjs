/* Soirées : ouverture plein cadre en contre-jour, index géant des occasions, Total Bodega et Kitsch Party,
   puis les quatre publics. Signature : la boule à facettes qui jette ses éclats (data-effet="eclats"). */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'soirees', fichier: 'soirees', imagePartage: 'grok/soirees-ouverture-1280.webp' };

const OCCASIONS = ['Anniversaires', 'Mariages', 'Cousinades', 'Garden parties', 'Communions', 'Départs en retraite', 'Fêtes votives', 'Bals', 'Kermesses', 'Arbres de Noël', 'Bodegas', 'Soirées de camping', 'Séminaires', 'Soirées de gala', 'Inaugurations', 'Soirées de bar', 'Conventions', 'Présentations de produits'];

export default (c) => html`
<section class="ouv-soirees" id="debut">
  ${c.media({ nom: 'grok/soirees-ouverture', alt: c.s('soirees.alt'), priorite: true, classe: 'ouv-soirees-fond', sizes: '100vw', attrs: 'data-fx="zoom"' })}
  <div class="ouv-soirees-texte conteneur">
    <p class="surtitre" data-anime="gsap">${c.t('soirees.sur')}</p>
    <h1 class="ouv-soirees-titre" data-grille="typo"><span class="hero-ligne" data-anime="gsap">${c.t('soirees.titre1')}</span> <span class="laser-titre hero-ligne" data-effet="laser-titre" data-texte="${c.s('soirees.titre2')}">${c.t('soirees.titre2')}</span></h1>
    <p class="masque-ecran-tres-bas" data-anime="gsap">${c.t('soirees.texte')}</p>
    <p class="hero-actions" data-anime="gsap">${c.lien('contact', { ancre: 'devis', classe: 'bouton', texte: html`${c.t('soirees.action')} →`, attrs: 'data-action-principale' })}<span class="hero-info" data-info-cle>${c.t('soirees.info')}</span></p>
  </div>
  <span class="ouv-soirees-boule" data-iris-centre="disque" aria-hidden="true"></span>
</section>

<section class="index-occasions" id="occasions">
  <div class="conteneur tete-section">
    <h2 data-anime="lignes">${c.t('soirees.index.titre')}</h2>
    <p data-anime>${c.t('soirees.index.texte')}</p>
  </div>
  <ul class="index-liste conteneur" data-effet="index-occasions" data-visuel>${OCCASIONS.map((o, i) => html`<li style="--i:${i}">${o}</li>`)}</ul>
</section>

<section class="concept concept--bodega" id="bodega" data-teinte="#ffb43a">
  ${c.media({ nom: 'grok/soirees-bodega', alt: c.s('soirees.bodega.alt'), classe: 'concept-fond', sizes: '100vw', attrs: 'data-fx="parallaxe"' })}
  <div class="concept-texte conteneur">
    <p class="surtitre">${c.t('soirees.bodega.sur')}</p>
    <h2 class="concept-titre" data-anime="lettres">${c.t('soirees.bodega.titre')}</h2>
    <p data-anime>${c.t('soirees.bodega.texte')}</p>
  </div>
</section>

<section class="concept concept--kitsch" id="kitsch" data-teinte="#ff3fae">
  ${c.media({ nom: 'grok/soirees-kitsch', alt: c.s('soirees.kitsch.alt'), classe: 'concept-fond', sizes: '100vw' })}
  <canvas class="eclats" data-effet="eclats" aria-hidden="true"></canvas>
  <div class="concept-texte conteneur">
    <p class="surtitre">${c.t('soirees.kitsch.sur')}</p>
    <h2 class="concept-titre concept-titre--neon" data-anime="lettres">${c.t('soirees.kitsch.titre')}</h2>
    <p data-anime>${c.t('soirees.kitsch.texte')}</p>
  </div>
</section>

<section class="publics conteneur" id="publics">
  <h2 data-anime="lignes">${c.t('soirees.publics.titre')}</h2>
  <div class="publics-liste">
    ${[['privee', 'soiree-privee', 'Ludo, casque rose, mixe en plein air sous une pergola au crépuscule', 'Anniversaire'],
       ['publique', 'ferrade', 'Ludo sous le pont de scène d\'une fête de village en plein air', 'Fête de village'],
       ['entreprise', 'grok/soirees-entreprise', 'Dîner de gala, tables dressées et éclairage d\'ambiance', 'Soirée d\'entreprise'],
       ['bar', 'bar-casquette', 'Ludo, casquette blanche, aux platines Numark à la tombée du jour', 'Bar ou restaurant']]
      .map(([cle, img, alt, type], i) => html`<article class="public${i % 2 ? ' public--inverse' : ''}" id="${cle}">
        ${c.media({ nom: img, alt, classe: 'public-media', sizes: '(max-width: 760px) 90vw, 40vw', attrs: 'data-anime="rideau"' })}
        <div class="public-texte">
          <span class="public-num">0${i + 1}</span>
          <h3 data-anime="lignes">${c.t('soirees.publics.' + cle)}</h3>
          <p data-anime>${c.t('soirees.publics.' + cle + 'Texte')}</p>
          ${c.lien('contact', { ancre: 'devis', params: 'type=' + encodeURIComponent(type), classe: 'lien-fleche', texte: c.t('soirees.publics.devis') })}
        </div>
      </article>`)}
  </div>
</section>

<section class="fin-page conteneur" id="fin">
  ${c.media({ nom: 'village', alt: 'Ludo sur la scène d\'une fête de village, sous l\'auvent rayé et les lyres violettes', classe: 'fin-page-media fin-page-media--petit', sizes: '(max-width: 760px) 90vw, 30vw', attrs: 'data-anime="rideau"' })}
  <div>
    <h2 data-anime="lignes">${c.t('soirees.fin.titre')}</h2>
    <p data-anime>${c.t('soirees.fin.texte')}</p>
    <p class="fin-actions" data-anime>${c.lien('contact', { ancre: 'devis', classe: 'bouton', texte: c.t('commun.devis') })} ${c.lien('formules', { classe: 'bouton bouton--contour', texte: c.t('soirees.fin.formules') })}</p>
  </div>
</section>
`;
