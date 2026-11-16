/* Contact : le numéro en chiffres géants tracés au laser ; puis la demande de devis en étapes, à côté de l'affiche
   de la soirée qui se compose à mesure (data-affiche) ; à l'envoi, la date s'écrit au laser et l'affiche est tamponnée. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'contact-ludo-784.webp' };

const carteChoix = (nom, valeur, titre, texte, requis = false) => html`<label class="fpe__carte"><input type="radio" name="${nom}" value="${valeur}"${requis ? ' required' : ''}><span class="fpe__carte-titre">${titre}</span>${texte ? html`<span class="fpe__carte-texte">${texte}</span>` : ''}</label>`;

export default (c) => html`
<section class="ouv-numero" id="debut">
  <svg class="ouv-numero-faisceaux" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true" data-visuel><g class="faisceaux-g">${[0, 1, 2, 3, 4].map((i) => html`<line x1="1000" y1="-10" x2="${80 + i * 170}" y2="610"/>`)}</g><g class="faisceaux-d">${[0, 1, 2, 3].map((i) => html`<line x1="0" y1="-10" x2="${300 + i * 190}" y2="610"/>`)}</g></svg>
  <div class="conteneur ouv-numero-tete">
    <p class="surtitre" data-anime="gsap">${c.t('contact.sur')}</p>
    <h1 data-grille="typo"><span class="hero-ligne" data-anime="gsap">${c.t('contact.titre1')}</span> <span class="laser-titre hero-ligne" data-effet="laser-titre" data-texte="${c.s('contact.titre2')}">${c.t('contact.titre2')}</span></h1>
  </div>
  <p class="ouv-numero-tel conteneur" data-visuel><a class="laser-titre" data-effet="laser-titre" data-texte="${c.site.contact.telephone}" href="tel:${c.site.contact.telephoneLien}" data-action-principale data-iris-centre>${c.site.contact.telephone}</a></p>
  <div class="conteneur ouv-numero-pied">
    <p class="masque-ecran-tres-bas" data-anime="gsap">${c.t('contact.texte')}</p>
    <p class="hero-actions" data-anime="gsap"><a class="bouton" href="#devis">${c.t('contact.devis')} ↓</a><span class="hero-info" data-info-cle>${c.t('commun.reponse')} · ${c.t('contact.info')}</span></p>
  </div>
</section>

<section class="devis conteneur" id="devis">
  <div class="devis-grille">
    <div class="devis-tete">
      <h2 class="laser-titre" data-effet="laser-titre" data-texte="${c.s('contact.devis')}">${c.t('contact.devis')}</h2>
      <aside class="affiche" data-affiche data-visuel aria-label="${c.s('contact.affiche.region')}">
        <p class="affiche-sur">${c.t('contact.affiche.sur')}</p>
        <p class="affiche-type" data-affiche-champ="type">${c.t('contact.affiche.type')}</p>
        <p class="affiche-date" data-affiche-champ="date">${c.t('contact.affiche.date')}</p>
        <p class="affiche-lieu" data-affiche-champ="lieu">${c.t('contact.affiche.lieu')}</p>
        <p class="affiche-ligne"><span data-affiche-champ="invites">${c.t('contact.affiche.invites')}</span> · <span data-affiche-champ="formule">${c.t('contact.affiche.formule')}</span></p>
        <span class="affiche-tampon" aria-hidden="true">${c.t('contact.affiche.tampon')}</span>
      </aside>
    </div>
    <div class="fpe" data-module="formulaire-par-etapes" role="region" aria-label="${c.s('contact.devis')}">
      <div class="fpe__carton">
        <form class="fpe__form" novalidate data-devis>
          <fieldset class="fpe__etape" data-etape="${c.s('contact.form.e1')}">
            <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.form.q1')}</h3></legend>
            <div class="fpe__groupe fpe__cartes" data-libelle="Soirée">
              ${carteChoix('type', 'Anniversaire', 'Anniversaire', 'ou cousinade, communion', true)}
              ${carteChoix('type', 'Mariage', 'Mariage', '')}
              ${carteChoix('type', 'Fête de village', 'Fête de village', 'votive, bal, kermesse')}
              ${carteChoix('type', 'Soirée d\'entreprise', 'Entreprise', 'séminaire, gala')}
              ${carteChoix('type', 'Bar ou restaurant', 'Bar ou restaurant', 'DJ sans matériel')}
              ${carteChoix('type', 'Autre', 'Autre', '')}
            </div>
          </fieldset>
          <fieldset class="fpe__etape" data-etape="${c.s('contact.form.e2')}">
            <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.form.q2')}</h3></legend>
            <div class="fpe__champ"><label for="c-date">${c.t('contact.form.date')} (jj/mm/aaaa)</label><input id="c-date" name="date" type="text" inputmode="numeric" placeholder="jj/mm/aaaa" autocomplete="off" required></div>
            <div class="fpe__champ"><label for="c-lieu">${c.t('contact.form.lieu')}</label><input id="c-lieu" name="lieu" autocomplete="address-level2" required></div>
            <div class="fpe__champ"><label for="c-invites">${c.t('contact.form.invites')}</label><input id="c-invites" name="invites" type="number" min="1" max="2000" inputmode="numeric"></div>
          </fieldset>
          <fieldset class="fpe__etape" data-etape="${c.s('contact.form.e3')}">
            <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.form.q3')}</h3></legend>
            <div class="fpe__groupe fpe__cartes" data-libelle="Formule">
              ${c.donnees.formules.map((f) => carteChoix('formule', f.cle, `${f.nom} · ${new Intl.NumberFormat('fr-FR').format(f.prix).replace(/[  ]/g, ' ')} €`, `${f.debut} – ${f.fin}`))}
              ${carteChoix('formule', 'nsp', c.s('contact.form.nsp'), '')}
            </div>
          </fieldset>
          <fieldset class="fpe__etape" data-etape="${c.s('contact.form.e4')}">
            <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.form.q4')}</h3></legend>
            <div class="fpe__champ"><label for="c-nom">${c.t('contact.form.nom')}</label><input id="c-nom" name="nom" autocomplete="name" required></div>
            <div class="fpe__champ"><label for="c-tel">${c.t('contact.form.tel')}</label><input id="c-tel" name="tel" type="tel" autocomplete="tel" required></div>
            <div class="fpe__champ"><label for="c-email">${c.t('contact.form.email')}</label><input id="c-email" name="email" type="email" autocomplete="email"></div>
            <div class="fpe__champ"><label for="c-message">${c.t('contact.form.message')}</label><textarea id="c-message" name="message" rows="3"></textarea></div>
            <p class="mention-donnees">${c.t('contact.form.donnees')}</p>
          </fieldset>
          <fieldset class="fpe__etape" data-etape="${c.s('contact.form.e5')}" data-recap>
            <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.form.q5')}</h3></legend>
            <div class="fpe__recap"></div>
          </fieldset>
          <div class="fpe__nav"><button type="button" class="bouton bouton--contour" data-precedent>${c.t('contact.form.retour')}</button><button type="button" class="bouton" data-suivant>${c.t('contact.form.suivant')}</button><button type="submit" class="bouton" data-grille="retour" data-effet="date-laser">${c.t('contact.form.envoyer')}</button></div>
        </form>
        <div class="fpe__fin" hidden>
          <div class="devis-mur" aria-hidden="true"><svg class="date-ecrit" viewBox="0 0 600 200"><text x="300" y="120" text-anchor="middle" class="date-texte"></text></svg><span class="date-tampon">Reçu<small>${c.t('commun.reponse')}</small></span></div>
          <h3>${c.t('contact.form.merci')}</h3><p>${c.t('contact.form.merciTexte')}</p><p data-resume></p>
          <button type="button" class="bouton bouton--contour" data-recommencer>${c.t('contact.form.recommencer')}</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="reseaux conteneur" id="reseaux">
  <h2 data-anime="lignes">${c.t('contact.reseaux')}</h2>
  <ul class="reseaux-liste" data-anime="cascade">
    <li><a href="https://www.facebook.com/DJLUDOREMIX" target="_blank" rel="noopener">Facebook<span>/DJLUDOREMIX</span></a></li>
    <li><a href="https://www.instagram.com/djludoremix" target="_blank" rel="noopener">Instagram<span>@djludoremix</span></a></li>
    <li><a href="https://www.tiktok.com/@djludoremix" target="_blank" rel="noopener">TikTok<span>@djludoremix</span></a></li>
    <li><a href="https://x.com/DjludoDjludo472" target="_blank" rel="noopener">X<span>@DjludoDjludo472</span></a></li>
    <li><a href="https://dj-ludo-remix.myspreadshop.fr/" target="_blank" rel="noopener">Boutique<span>t-shirts DJ Ludo Remix</span></a></li>
  </ul>
  ${c.media({ nom: 'salle-laser-1', alt: 'Lasers vert et rose au-dessus de la piste d\'une salle des fêtes', classe: 'reseaux-photo', sizes: '(max-width: 760px) 90vw, 30vw', attrs: 'data-fx="parallaxe"' })}
</section>
`;
