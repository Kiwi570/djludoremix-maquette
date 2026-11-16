/* Formules : ouverture compacte scindée (le prix en très grand, le pupitre en photo), puis le pupitre lumière :
   on monte les faders, la salle s'allume et la formule se choisit avec son vrai prix (data-effet="pupitre"). */
import { html, brut } from '../../outils/gabarit.mjs';
import { lumieresSalle, tablePupitre } from '../gabarits/pupitre.mjs';

export const page = { cle: 'formules', fichier: 'formules', imagePartage: 'grok/formules-ouverture-1280.webp' };

const euros = (n) => new Intl.NumberFormat('fr-FR').format(n).replace(/[  ]/g, ' ') + ' €';

export default (c) => html`
<section class="ouv-formules conteneur" id="debut">
  <div class="ouv-formules-texte">
    <p class="surtitre" data-anime="gsap">${c.t('formules.sur')}</p>
    <h1 data-grille="typo"><span class="hero-ligne" data-anime="gsap">${c.t('formules.titre1')}</span> <span class="laser-titre hero-ligne" data-effet="laser-titre" data-texte="${c.s('formules.titre2')}">${c.t('formules.titre2')}</span></h1>
    <p class="ouv-formules-prix" data-info-cle data-anime="gsap"><span data-prix>${c.t('formules.info')}</span></p>
    <p class="masque-ecran-tres-bas" data-anime="gsap">${c.t('formules.texte')}</p>
    <p data-anime="gsap"><a class="bouton" href="#pupitre" data-action-principale>${c.t('formules.action')} ↓</a></p>
  </div>
  ${c.media({ nom: 'grok/formules-ouverture', alt: c.s('formules.alt'), priorite: true, classe: 'ouv-formules-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-iris-centre data-fx="parallaxe"' })}
</section>

<section class="pupitre" id="pupitre" data-effet="pupitre" aria-label="${c.s('formules.pupitre.region')}">
  <div class="conteneur tete-section">
    <h2 data-anime="lignes">${c.t('formules.pupitre.titre')}</h2>
    <p data-anime>${c.t('formules.pupitre.texte')}</p>
  </div>
  <div class="pupitre-grille conteneur">
    <div class="pupitre-salle" data-visuel>
      ${c.media({ nom: 'grok/formules-salle', alt: c.s('formules.pupitre.alt'), classe: 'pupitre-salle-photo', sizes: '(max-width: 760px) 100vw, 60vw' })}
      ${lumieresSalle()}
    </div>
    ${tablePupitre(c)}
  </div>
  <script type="application/json" data-pupitre-donnees>${brut(JSON.stringify(c.donnees.formules).replace(/</g, '\u003c'))}</script>
</section>

<section class="tableau conteneur" id="tableau">
  <h2 data-anime="lignes">${c.t('formules.tableau.titre')}</h2>
  <div class="tableau-cartes" data-anime="cascade">
    ${c.donnees.formules.map((f) => html`<article class="formule" id="formule-${f.cle}" data-survol="incline">
      <svg class="formule-picto" viewBox="0 0 120 60" aria-hidden="true" data-visuel>${f.niveau[1] ? html`<polygon points="30,0 8,60 40,60" class="p-lyre"/><polygon points="90,0 80,60 112,60" class="p-lyre"/>` : html`${[0, 1, 2, 3].map((k) => html`<circle cx="${18 + k * 28}" cy="48" r="7" class="p-led"/>`)}`}${[...Array(f.niveau[2])].map((_, k) => html`<path d="M60 0 L${20 + k * 80} 60 M60 0 L${40 + k * 40} 60" class="p-laser${k ? ' p-laser--2' : ''}"/>`)}${f.niveau[3] ? html`<rect x="0" y="0" width="120" height="60" class="p-uv"/>` : ''}${f.niveau[4] ? html`${[10, 34, 58, 82, 106].map((x, k) => html`<circle cx="${x}" cy="${12 + (k % 3) * 14}" r="2.4" class="p-disco"/>`)}` : ''}</svg>
      <h3>${f.nom}</h3>
      <p class="formule-prix" data-prix>${euros(f.prix)}</p>
      <p class="formule-pour">${f.pour}</p>
      <ul>${f.materiel.map((m) => html`<li>${m}</li>`)}</ul>
      <dl><div><dt>${c.t('formules.tableau.horaire')}</dt><dd>${f.debut} – ${f.fin}</dd></div><div><dt>${c.t('formules.tableau.sup')}</dt><dd>${f.heureSup ? euros(f.heureSup) : c.t('formules.tableau.nonPrecise')}</dd></div></dl>
      <a class="bouton bouton--contour" href="${c.url('contact', 'devis', 'formule=' + f.cle)}" data-libelle="${c.libelle('contact')}">${c.t('formules.tableau.choisir')} ${f.nom}</a>
    </article>`)}
  </div>
</section>

<section class="faq-formules conteneur" id="faq">
  <div>
    <h2 data-anime="lignes">${c.t('formules.faq.titre')}</h2>
    ${[1, 2, 3, 4].map((n) => html`<details class="faq-item" data-anime><summary>${c.t('formules.faq.q' + n)}</summary><p>${c.t('formules.faq.r' + n)}</p></details>`)}
    <p class="fin-actions" data-anime>${c.lien('contact', { ancre: 'devis', classe: 'bouton', texte: c.t('commun.devis') })}</p>
  </div>
  ${c.media({ nom: 'ludo-braise', alt: 'Ludo derrière ses platines, lumière rouge sur la pierre', classe: 'faq-media', sizes: '(max-width: 760px) 100vw, 35vw', attrs: 'data-fx="zoom"' })}
</section>
`;
