/* Formules : ouverture en VU-mètre géant (cinq colonnes de LED montent jusqu'au prix de chaque formule), puis la salle
   en plein écran, épinglée : le défilement monte les faders de 1er prix à Unlimited, la main les reprend (data-effet="pupitre"). */
import { html, brut } from '../../outils/gabarit.mjs';
import { lumieresSalle, tablePupitre } from '../gabarits/pupitre.mjs';

export const page = { cle: 'formules', fichier: 'formules', imagePartage: 'grok/formules-salle-des-fetes-1280.webp' };

const SEGMENTS = 18;
const euros = (n) => new Intl.NumberFormat('fr-FR').format(n).replace(/[  ]/g, ' ') + ' €';

export default (c) => html`
<section class="ouv-vu" id="debut" data-effet="vu-metre">
  <div class="ouv-vu-tete conteneur">
    <p class="surtitre" data-anime="gsap">${c.t('formules.sur')}</p>
    <h1 data-grille="typo"><span class="hero-ligne" data-anime="gsap">${c.t('formules.titre1')}</span> <span class="laser-titre hero-ligne" data-effet="laser-titre" data-texte="${c.s('formules.titre2')}">${c.t('formules.titre2')}</span></h1>
    <div class="ouv-vu-cote">
      <p class="ouv-vu-prix" data-info-cle data-anime="gsap"><span data-prix>${c.t('formules.info')}</span></p>
      <p class="masque-ecran-bas" data-anime="gsap">${c.t('formules.texte')}</p>
      <p data-anime="gsap"><a class="bouton" href="#pupitre" data-action-principale>${c.t('formules.action')} ↓</a></p>
    </div>
  </div>
  <p class="vu-legende conteneur">${c.t('formules.vuLegende')}</p>
  <ol class="vumetre" data-visuel data-iris-centre aria-label="${c.s('formules.vu')}">
    ${c.donnees.formules.map((f) => { const niveau = Math.round(SEGMENTS * f.prix / 1250); return html`<li class="vu-col" style="--niveau:${niveau}"><a class="vu-lien" href="?formule=${f.cle}#pupitre" data-vu="${f.cle}" data-niveau="${niveau}"><span class="vu-prix">${euros(f.prix)}</span><span class="vu-barre" aria-hidden="true">${Array.from({ length: SEGMENTS }, (_, k) => html`<i class="${k < niveau ? 'on' : ''}"></i>`)}</span><span class="vu-nom">${f.nom}</span><span class="vu-heure">${f.cle === 'unlimited' ? 'sans fin' : `${f.debut} – ${f.fin}`}</span></a></li>`; })}
  </ol>
</section>

<section class="salle-scene" id="pupitre" data-effet="pupitre" data-defaut="premier-prix" data-scene data-grille="manipuler scene" aria-label="${c.s('formules.pupitre.region')}">
  <div class="salle-scene-collant" data-collant>
    <div class="pupitre-salle salle-scene-fond" data-visuel>
      ${c.media({ nom: 'grok/formules-salle-des-fetes', alt: c.s('formules.pupitre.alt'), classe: 'pupitre-salle-photo', sizes: '100vw' })}
      ${lumieresSalle()}
    </div>
    <div class="salle-scene-texte conteneur">
      <h2 class="laser-titre" data-effet="laser-titre" data-texte="${c.s('formules.pupitre.titre')}">${c.t('formules.pupitre.titre')}</h2>
      <p class="masque-ecran-bas">${c.t('formules.pupitre.texte')}</p>
      <ol class="salle-etapes" aria-hidden="true">${c.donnees.formules.map((f, i) => html`<li class="salle-etape${i === 0 ? ' est-active' : ''}" data-etape-formule="${f.cle}">${f.nom}</li>`)}</ol>
    </div>
    <div class="salle-scene-console conteneur">${tablePupitre(c)}</div>
  </div>
  <script type="application/json" data-pupitre-donnees>${brut(JSON.stringify(c.donnees.formules).replace(/</g, '\\u003c'))}</script>
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
