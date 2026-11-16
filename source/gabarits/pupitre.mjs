/* Pupitre lumière : la salle (couches de lumière posées sur la photo) et la table de faders,
   partagés par l'accueil et la page Formules (assets/js/site.js, fonction pupitre). */
import { html, brut } from '../../outils/gabarit.mjs';

const euros = (n) => new Intl.NumberFormat('fr-FR').format(n).replace(/[  ]/g, ' ') + ' €';

export const lumieresSalle = () => html`<div class="salle-nuit" aria-hidden="true"></div>
    <div class="salle-couche salle-led" aria-hidden="true"></div>
    <svg class="salle-couche salle-lyres" viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="lyre-degrade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e6ebff" stop-opacity=".34"/><stop offset=".55" stop-color="#c9ceff" stop-opacity=".12"/><stop offset="1" stop-color="#c9ceff" stop-opacity="0"/></linearGradient></defs><polygon class="lyre-1" points="230,-10 60,400 250,400"/><polygon class="lyre-2" points="370,-10 350,400 540,400"/></svg>
    <svg class="salle-couche salle-lasers" viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden="true"><g class="laser-1">${[0, 1, 2, 3, 4, 5].map((i) => html`<line x1="520" y1="-5" x2="${-40 + i * 110}" y2="400"/>`)}</g><g class="laser-2">${[0, 1, 2, 3, 4].map((i) => html`<line x1="80" y1="-5" x2="${120 + i * 120}" y2="${400 - (i % 2) * 60}"/>`)}</g></svg>
    <div class="salle-couche salle-uv" aria-hidden="true"></div>
    <canvas class="salle-couche salle-disco" aria-hidden="true"></canvas>`;

const fader = (c, nom, max, valeurs) => html`<div class="fader">
  <label for="p-${nom}">${c.t('formules.pupitre.' + nom)}</label>
  <div class="fader-piste"><input id="p-${nom}" name="${nom}" type="range" min="0" max="${max}" step="1" value="0" aria-valuetext="${valeurs[0]}" data-valeurs="${valeurs.join('|')}"></div>
  <output for="p-${nom}" class="fader-valeur">${valeurs[0]}</output>
</div>`;

export const tablePupitre = (c, { infoCle = false } = {}) => html`<form class="pupitre-table" data-pupitre>
  <div class="faders">
    ${fader(c, 'lyres', 1, ['non', '2 lyres'])}
    ${fader(c, 'lasers', 2, ['non', '1 laser', '2 ILDA'])}
    ${fader(c, 'uv', 1, ['non', 'oui'])}
    ${fader(c, 'disco', 1, ['non', 'oui'])}
    ${fader(c, 'fin', 5, ['1 h', '2 h', '3 h', '4 h', '5 h', 'au bout'])}
  </div>
  <div class="pupitre-resultat" data-tient>
    <p class="pupitre-resultat-titre">${c.t('formules.pupitre.resultat')}</p>
    <p class="pupitre-nom" data-pupitre-nom>${c.donnees.formules[0].nom}</p>
    <p class="pupitre-prix" data-prix${infoCle ? brut(' data-info-cle') : ''}><span data-pupitre-prix>${euros(c.donnees.formules[0].prix)}</span></p>
    <p class="pupitre-detail" data-pupitre-detail aria-live="polite">${c.donnees.formules[0].materiel.join(' · ')} · ${c.donnees.formules[0].debut} – ${c.donnees.formules[0].fin}</p>
    <label class="pupitre-asso"><input type="checkbox" name="asso"> ${c.t('formules.pupitre.asso')}</label>
    <p class="pupitre-inclus masque-ecran-bas">${c.t('formules.pupitre.inclus')}</p>
    <a class="bouton" href="${c.url('contact', 'devis', 'formule=premier-prix')}" data-libelle="${c.libelle('contact')}" data-pupitre-lien>${c.t('formules.pupitre.demander')} →</a>
  </div>
</form>`;
