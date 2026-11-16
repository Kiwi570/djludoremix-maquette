/* Accueil « Plein feux » : plan objet-unique. Une lyre accrochée au pont reste le fil de la page ;
   son faisceau se promène dans le brouillard (effet signature, data-grille="manipuler"). */
import { html, brut } from '../../outils/gabarit.mjs';
import { carte } from '../gabarits/carte.mjs';
import { lumieresSalle, tablePupitre } from '../gabarits/pupitre.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'accueil-ouverture-1280.webp' };

const euros = (n) => new Intl.NumberFormat('fr-FR').format(n).replace(/[  ]/g, ' ') + ' €';

export default (c) => html`
<section class="scene" id="debut" data-effet="faisceau" data-grille="manipuler scene" data-scene data-souris aria-label="${c.s('accueil.lumiere.region')}">
  <div class="scene-collant" data-collant data-effet="pupitre">
    <script type="application/json" data-pupitre-donnees>${brut(JSON.stringify(c.donnees.formules).replace(/</g, '\\u003c'))}</script>
    <div class="scene-photos">
      ${c.media({ nom: 'accueil-ludo', alt: 'Ludo penché sur ses platines, mur de pierre éclairé en bleu et rouge', cadrage: '48% 40%', cadrageMobile: '44% 34%', priorite: true, classe: 'scene-photo scene-photo--0 est-active', sizes: '100vw' })}
      ${c.media({ nom: 'accueil-ouverture', alt: c.s('accueil.alt'), cadrage: '44% 40%', cadrageMobile: '46% 34%', classe: 'scene-photo scene-photo--1', sizes: '100vw' })}
    </div>
    <div class="scene-ombre" aria-hidden="true"></div>
    <div class="scene-lyre" aria-hidden="true"></div>
    <div class="scene-flash" aria-hidden="true"></div>
    <canvas class="scene-lumiere" aria-hidden="true"></canvas>
    <div class="scene-degrade" aria-hidden="true"></div>
    <span class="hero-lentille-haut" aria-hidden="true" data-iris-centre="disque"></span>
    <div class="scene-texte conteneur">
      <p class="surtitre" data-anime="gsap"><span class="point"></span>${c.t('accueil.sur')}</p>
      <h1 class="hero-titre" data-grille="typo"><span class="hero-ligne" data-anime="gsap">${c.t('accueil.titre1')}</span> <span class="laser-titre hero-ligne" data-effet="laser-titre" data-texte="${c.s('accueil.titre2')}">${c.t('accueil.titre2')}</span></h1>
      <p class="scene-pour" data-anime="gsap">Anniversaires · mariages · fêtes de village · entreprises</p>
      <p class="hero-intro masque-ecran-bas" data-anime="gsap">${c.t('accueil.texte')}</p>
      <p class="hero-actions" data-anime="gsap">
        ${c.lien('contact', { ancre: 'devis', classe: 'lien-fleche hero-devis', texte: c.t('accueil.action'), attrs: 'data-action-principale' })}
        <a class="hero-tel" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      </p>
      <ol class="scene-etapes masque-ecran-bas" aria-label="Repères du parcours" data-anime="gsap">
        ${c.donnees.parcours.filter((_, i) => [2, 4, 5].includes(i)).map((p) => html`<li class="scene-etape"><span class="lumiere-annee">${p.annee}</span> ${p.titre}</li>`)}
      </ol>
    </div>
    <div class="scene-console" data-anime="gsap">
      ${tablePupitre(c, { infoCle: true })}
    </div>
    <p class="hero-astuce" aria-hidden="true"><span class="astuce-souris">${c.t('accueil.astuce')}</span><span class="astuce-doigt">${c.t('accueil.astuceTactile')}</span></p>
  </div>
</section>

<section class="soirees-apercu conteneur" id="soirees" data-teinte="#5b8cff">
  <div class="prix-bande" id="formules">
    <p class="prix-bande-titre">${c.t('accueil.formules.titre')}</p>
    <ul class="prix-bande-liste">${c.donnees.formules.map((f) => html`<li><a href="${c.url('formules', 'pupitre', `formule=${f.cle}`)}" data-libelle="${c.libelle('formules')}"><span>${f.nom}</span> <b data-prix>${euros(f.prix)}</b> <small>${f.cle === 'unlimited' ? 'sans heure de fin' : `jusqu'à ${f.fin}`}</small></a></li>`)}</ul>
    ${c.lien('formules', { classe: 'lien-fleche', texte: c.t('accueil.formules.action') })}
  </div>
  <div class="tete-section">
    <p class="surtitre">${c.t('accueil.soirees.sur')}</p>
    <h2 data-anime="lignes">${c.t('accueil.soirees.titre')}</h2>
    <p data-anime>${c.t('accueil.soirees.texte')}</p>
  </div>
  <div class="trois" data-anime="cascade" tabindex="0" role="region" aria-label="Trois façons de faire la fête">
    ${[['contact-ludo', 'privee', 'soirees.publics.privee', 'soirees.publics.priveeTexte', 'Ludo en casquette mixe en plein air au crépuscule'],
       ['village', 'publique', 'soirees.publics.publique', 'soirees.publics.publiqueTexte', 'Ludo sur la scène d\'une fête de village, sous l\'auvent rayé et les lyres violettes'],
       ['salle-laser-2', 'entreprise', 'soirees.publics.entreprise', 'soirees.publics.entrepriseTexte', 'Faisceaux laser au-dessus des danseurs d\'une salle des fêtes']]
      .map(([img, ancre, t, tx, alt], i) => html`<article class="carte-soiree" data-spot="${i}">
        ${c.media({ nom: img, alt, classe: 'carte-soiree-media', sizes: '(max-width: 760px) 90vw, 30vw', attrs: 'data-fx="vitesse"' })}
        <h3>${c.t(t)}</h3><p>${c.t(tx)}</p>
        ${c.lien('soirees', { ancre, classe: 'lien-fleche', texte: c.t('accueil.soirees.voir') })}
      </article>`)}
  </div>
</section>

<section class="livre conteneur" id="livre" data-teinte="#ff2d55" data-effet="show-laser" data-souris>
  <canvas class="livre-lasers" aria-hidden="true"></canvas>
  <div class="tete-section">
    <p class="surtitre">${c.t('accueil.laser.sur')}</p>
    <h2 data-anime="lignes">${c.t('accueil.laser.titre')}</h2>
    <p data-anime>${c.t('accueil.laser.texte')}</p>
  </div>
  <div class="livre-grille">
    <ul class="livre-avis">
      ${c.donnees.avis.slice(0, 4).map((a, i) => html`<li><button type="button" class="livre-choix${i === 0 ? ' est-choisi' : ''}" data-texte="«\u00a0${a.texte}\u00a0»" data-qui="${a.nom}${a.lieu ? `, ${a.lieu}` : ''} · ${a.occasion} · ${a.date}" aria-pressed="${i === 0 ? 'true' : 'false'}"><span class="livre-citation">«\u00a0${a.texte}\u00a0»</span><span class="livre-qui">${a.nom}${a.lieu ? `, ${a.lieu}` : ''} · ${a.occasion} · ${a.date}</span></button></li>`)}
    </ul>
    <figure class="livre-mur" data-visuel aria-live="polite">
      <blockquote><p class="laser-titre livre-grand" data-effet="laser-titre" data-texte="«\u00a0${c.donnees.avis[0].texte}\u00a0»">«\u00a0${c.donnees.avis[0].texte}\u00a0»</p></blockquote>
      <figcaption class="livre-signature">${c.donnees.avis[0].nom}, ${c.donnees.avis[0].lieu} · ${c.donnees.avis[0].occasion} · ${c.donnees.avis[0].date}</figcaption>
    </figure>
  </div>
  <div class="badges">
    <p>${c.t('accueil.laser.badges')}</p>
    <ul data-anime="cascade">
      <li><img src="/assets/images/badge-wedding-awards-240.webp" alt="Wedding Awards 2023, Mariages.net" width="240" height="240" loading="lazy"></li>
      <li><img src="/assets/images/badge-zankyou-selection-240.webp" alt="Zankyou, sélection des meilleurs prestataires" width="240" height="240" loading="lazy"></li>
      <li><img src="/assets/images/badge-zankyou-real-240.webp" alt="Zankyou, Real Wedding publié" width="240" height="258" loading="lazy"></li>
      <li><img src="/assets/images/badge-zankyou-partenaire-240.webp" alt="Zankyou, partenaire officiel" width="240" height="248" loading="lazy"></li>
    </ul>
    ${c.lien('ludo', { ancre: 'livre', classe: 'lien-fleche', texte: c.t('accueil.laser.lire') })}
  </div>
</section>

<section class="rayon conteneur" id="rayon" data-teinte="#3dffb0">
  <div class="tete-section">
    <p class="surtitre">${c.t('accueil.rayon.sur')}</p>
    <h2 data-anime="lignes">${c.t('accueil.rayon.titre')}</h2>
    <p data-anime>${c.t('accueil.rayon.texte')}</p>
    <p class="rayon-legende" data-anime><span class="pastille est-dans"></span>${c.t('accueil.rayon.legendeDans')} <span class="pastille"></span>${c.t('accueil.rayon.legendeHors')}</p>
  </div>
  <div class="rayon-boite" data-fx="trace" data-visuel>${carte(c)}</div>
</section>

<section class="date conteneur" id="date" data-teinte="#ff2d55">
  <div class="tete-section">
    <p class="surtitre">${c.t('accueil.date.sur')}</p>
    <h2 class="laser-titre" data-effet="laser-titre" data-texte="${c.s('accueil.date.titre')}">${c.t('accueil.date.titre')}</h2>
    <p data-anime>${c.t('accueil.date.texte')}</p>
  </div>
  <div class="date-boite">
    <form class="date-form" data-formulaire data-date-laser novalidate data-anime>
      <div class="champ"><label for="d-date">${c.t('accueil.date.date')} (jj/mm/aaaa)</label><input id="d-date" name="date" type="text" inputmode="numeric" placeholder="jj/mm/aaaa" pattern="\\d{2}/\\d{2}/\\d{4}" autocomplete="off" required></div>
      <div class="champ"><label for="d-type">${c.t('accueil.date.type')}</label>
        <select id="d-type" name="type"><option>Anniversaire</option><option>Mariage</option><option>Fête de village</option><option>Soirée d'entreprise</option><option>Bar ou restaurant</option><option>Autre</option></select></div>
      <div class="champ"><label for="d-tel">${c.t('accueil.date.tel')}</label><input id="d-tel" name="tel" type="tel" autocomplete="tel" required></div>
      <p class="mention-donnees">${c.t('contact.form.donnees')}</p>
      <button type="submit" class="bouton" data-grille="retour" data-effet="date-laser">${c.t('accueil.date.envoyer')}</button>
      <p data-message-envoi role="status" tabindex="-1" hidden></p>
    </form>
    <div class="date-mur" aria-hidden="true" data-visuel>
      ${c.media({ nom: 'bars-ludo', alt: '', classe: 'date-photo', sizes: '(max-width: 760px) 90vw, 30vw', cadrage: '52% 30%', attrs: 'data-anime="rideau"' })}
      <svg class="date-ecrit" viewBox="0 0 600 200"><text x="300" y="120" text-anchor="middle" class="date-texte"></text></svg>
      <span class="date-tampon">${c.t('accueil.date.recu')}<small>${c.t('commun.reponse')}</small></span>
    </div>
  </div>
</section>
`;
