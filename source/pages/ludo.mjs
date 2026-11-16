/* Ludo : portrait scindé (photo à gauche, texte à droite), frise du parcours tracée au laser,
   mur de photos, livre d'or. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'ludo', fichier: 'ludo', imagePartage: 'ludo-ouverture-784.webp' };

export default (c) => html`
<section class="ouv-ludo conteneur" id="debut">
  ${c.media({ nom: 'ludo-ouverture', alt: c.s('ludo.alt'), priorite: true, classe: 'ouv-ludo-media', sizes: '(max-width: 760px) 70vw, 36vw', cadrage: '50% 30%', attrs: 'data-iris-centre data-effet="gel-portrait"' })}
  <div class="ouv-ludo-texte">
    <p class="surtitre" data-anime="gsap">${c.t('ludo.sur')}</p>
    <h1 data-grille="typo"><span class="hero-ligne" data-anime="gsap">${c.t('ludo.titre1')}</span> <span class="laser-titre hero-ligne" data-effet="laser-titre" data-texte="${c.s('ludo.titre2')}">${c.t('ludo.titre2')}</span></h1>
    <p class="masque-ecran-tres-bas" data-anime="gsap">${c.t('ludo.texte')}</p>
    <p class="hero-actions" data-anime="gsap">${c.lien('contact', { ancre: 'devis', classe: 'bouton', texte: html`${c.t('ludo.action')} →`, attrs: 'data-action-principale' })}<span class="hero-info" data-info-cle>${c.t('ludo.info')}</span></p>
  </div>
</section>

<section class="frise conteneur" id="parcours">
  <div class="tete-section">
    <h2 data-anime="lignes">${c.t('ludo.parcours.titre')}</h2>
    <p data-anime>${c.t('ludo.parcours.texte')}</p>
  </div>
  <div class="frise-corps" data-visuel>
    <svg class="frise-trait" viewBox="0 0 20 1000" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M10 0 V1000" pathLength="1" fill="none" stroke="#ff2d55" stroke-width="3"/></svg>
    <ol class="frise-liste">
      ${c.donnees.parcours.map((p, i) => html`<li class="frise-item" data-anime><span class="frise-annee">${p.annee}</span><h3>${p.titre}</h3><p>${p.texte}</p></li>`)}
    </ol>
  </div>
</section>

<section class="photos" id="photos">
  <div class="conteneur tete-section">
    <h2 data-anime="lignes">${c.t('ludo.photos.titre')}</h2>
    <p data-anime>${c.t('ludo.photos.texte')}</p>
  </div>
  <div class="photos-mur conteneur" data-anime="cascade">
    ${[['accueil-ludo', 'Ludo penché sur ses platines, mur éclairé en bleu et rouge', 'grand'], ['ludo-vert', 'Ludo aux platines sous une lumière verte', ''], ['ludo-olive', 'Ludo concentré sur son mix', ''], ['ludo-violet', 'Ludo aux platines, mur éclairé en violet et vert', ''],
       ['salle-piste', 'Piste de danse pleine sous les lumières', ''], ['ludo-rouge', 'Ludo mixe, casque bleu, mur éclairé en rouge et orange', ''], ['ludo-braise', 'Ludo derrière ses platines, lumière rouge sur la pierre', ''], ['ludo-pergola', 'Ludo, casque rose, aux platines Numark sous la pergola', 'haut']]
      .map(([n, alt, cl]) => c.media({ nom: n, alt, classe: 'photo ' + (cl ? 'photo--' + cl : ''), sizes: '(max-width: 760px) 45vw, 25vw', attrs: 'data-fx="vitesse"' }))}
  </div>
</section>

<section class="livre-or conteneur" id="livre">
  <div class="tete-section">
    <h2 data-anime="lignes">${c.t('ludo.livre.titre')}</h2>
    <p data-anime>${c.t('ludo.livre.texte')}</p>
  </div>
  <div class="livre-or-photos" data-anime="cascade">
    ${c.media({ nom: 'salle-laser-2', alt: 'Faisceaux laser sur des danseurs', classe: 'livre-photo', sizes: '(max-width: 760px) 45vw, 16vw' })}
    ${c.media({ nom: 'salle-laser-1', alt: 'Lasers vert et rose au-dessus de la piste d\'une salle des fêtes', classe: 'livre-photo', sizes: '(max-width: 760px) 45vw, 16vw' })}
  </div>
  <ul class="livre-or-liste" data-anime="cascade">
    ${c.donnees.avis.map((a) => html`<li><blockquote><p>«\u00a0${a.texte}\u00a0»</p></blockquote><p class="livre-qui">${a.nom}${a.lieu ? `, ${a.lieu}` : ''} · ${a.occasion} · ${a.date}</p></li>`)}
  </ul>
</section>

<section class="fin-page conteneur" id="fin">
  ${c.media({ nom: 'ferrade', alt: 'Ludo sous le pont de scène d\'une fête de village en plein air', classe: 'fin-page-media fin-page-media--petit', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-anime="rideau"' })}
  <div>
    <h2 data-anime="lignes">${c.t('ludo.fin.titre')}</h2>
    <p data-anime>${c.t('ludo.fin.texte')}</p>
    <p class="fin-actions" data-anime>${c.lien('contact', { ancre: 'devis', classe: 'bouton', texte: c.t('commun.devis') })}</p>
  </div>
</section>
`;
