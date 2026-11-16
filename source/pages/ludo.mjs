/* Ludo : « LUDO » en lettres géantes, la photo vue à travers, qui s'ouvrent au défilement ; le parcours en défilement
   horizontal sous une lyre qui allume chaque date ; mur de photos ; livre d'or en cartes qui s'empilent. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'ludo', fichier: 'ludo', imagePartage: 'accueil-console-1280.webp' };

export default (c) => html`
<section class="ouv-lettres" id="debut" data-effet="lettres-ludo" data-scene>
  <div class="ouv-lettres-collant" data-collant>
    ${c.media({ nom: 'accueil-console', alt: c.s('ludo.alt'), priorite: true, classe: 'ouv-lettres-photo', sizes: '100vw', cadrage: '50% 22%', attrs: 'data-iris-centre' })}
    <div class="ouv-lettres-masque" aria-hidden="true" data-superpose data-audit-ignorer><span><b>Lu</b><b>do</b></span></div>
    <div class="ouv-lettres-texte conteneur">
      <p class="surtitre" data-anime="gsap">${c.t('ludo.sur')}</p>
      <h1 data-grille="typo"><span class="hero-ligne" data-anime="gsap">${c.t('ludo.titre1')}</span> <span class="laser-titre hero-ligne" data-effet="laser-titre" data-texte="${c.s('ludo.titre2')}">${c.t('ludo.titre2')}</span></h1>
      <div class="ouv-lettres-cote">
        <p class="masque-ecran-bas" data-anime="gsap">${c.t('ludo.texte')}</p>
        <p class="hero-actions" data-anime="gsap">${c.lien('contact', { ancre: 'devis', classe: 'bouton', texte: html`${c.t('ludo.action')} →`, attrs: 'data-action-principale' })}<span class="hero-info" data-info-cle>${c.t('ludo.info')}</span></p>
      </div>
    </div>
  </div>
</section>

<section class="frise2" id="parcours" data-effet="frise-faisceau" data-scene>
  <div class="frise2-collant" data-collant>
    <div class="frise2-tete conteneur">
      <h2 data-anime="lignes">${c.t('ludo.parcours.titre')}</h2>
      <p class="masque-ecran-bas" data-anime>${c.t('ludo.parcours.texte')}</p>
    </div>
    <div class="frise2-lyre" aria-hidden="true"><span class="frise2-corps"></span><span class="frise2-cone"></span></div>
    <div class="frise2-fenetre" data-visuel>
      <ol class="frise2-piste" data-galerie>
        ${c.donnees.parcours.map((p) => html`<li class="frise2-item"><span class="frise2-annee">${p.annee}</span><h3>${p.titre}</h3><p>${p.texte}</p></li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="photos" id="photos">
  <div class="conteneur tete-section">
    <h2 data-anime="lignes">${c.t('ludo.photos.titre')}</h2>
    <p data-anime>${c.t('ludo.photos.texte')}</p>
  </div>
  <div class="photos-mur conteneur" data-anime="cascade">
    ${[['accueil-ludo', 'Ludo penché sur ses platines, mur éclairé en bleu et rouge', 'grand'], ['ludo-vert', 'Ludo aux platines sous une lumière verte', ''], ['ludo-olive', 'Ludo concentré sur son mix', ''], ['ludo-violet', 'Ludo aux platines, mur éclairé en violet et vert', ''],
       ['salle-piste', 'Piste de danse pleine sous les lumières', ''], ['ludo-rouge', 'Ludo mixe, casque bleu, mur éclairé en rouge et orange', ''], ['ludo-ouverture', 'Ludo penché sur ses platines devant le mur de pierre', ''], ['ludo-pergola', 'Ludo, casque rose, aux platines Numark sous la pergola', 'haut']]
      .map(([n, alt, cl]) => c.media({ nom: n, alt, classe: 'photo ' + (cl ? 'photo--' + cl : ''), sizes: '(max-width: 760px) 45vw, 25vw', attrs: 'data-fx="vitesse"' }))}
  </div>
</section>

<section class="livre-or conteneur" id="livre">
  <div class="tete-section">
    <h2 data-anime="lignes">${c.t('ludo.livre.titre')}</h2>
    <p data-anime>${c.t('ludo.livre.texte')}</p>
  </div>
  <ul class="livre-or-liste livre-pile" data-visuel>
    ${c.donnees.avis.map((a, i) => html`<li style="--i:${i}"><blockquote><p>«\u00a0${a.texte}\u00a0»</p></blockquote><p class="livre-qui">${a.nom}${a.lieu ? `, ${a.lieu}` : ''} · ${a.occasion} · ${a.date}</p></li>`)}
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
