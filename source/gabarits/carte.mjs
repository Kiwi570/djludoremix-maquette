import { html } from '../../outils/gabarit.mjs';

/* Carte du rayon : projection simple autour de Pont-Saint-Esprit (1 km = 4 unités). */
export function carte(c, id = 'rayon') {
  const v = c.donnees.villes, b = v[0], K = 4, cx = 300, cy = 300;
  const pos = (x) => ({
    x: cx + (x.lon - b.lon) * 111.2 * Math.cos(44.25 * Math.PI / 180) * K,
    y: cy - (x.lat - b.lat) * 111.2 * K,
    d: Math.hypot((x.lat - b.lat) * 111.2, (x.lon - b.lon) * 111.2 * Math.cos(44.25 * Math.PI / 180)),
  });
  /* Le Rhône, tracé approché (points réels le long du fleuve). */
  const rhone = [[44.62, 4.73], [44.55, 4.73], [44.44, 4.69], [44.35, 4.68], [44.27, 4.66], [44.2, 4.7], [44.12, 4.73], [44.05, 4.77], [43.98, 4.79], [43.93, 4.77], [43.84, 4.67]]
    .map(([lat, lon]) => pos({ lat, lon })).map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
  return html`<svg class="rayon-carte" viewBox="0 0 600 600" role="img" aria-label="${c.s('accueil.rayon.carte')}" data-repere>
  <defs><radialGradient id="${id}-fond"><stop offset="0" stop-color="#5b8cff" stop-opacity=".16"/><stop offset="1" stop-color="#5b8cff" stop-opacity="0"/></radialGradient></defs>
  <circle cx="300" cy="300" r="290" fill="url(#${id}-fond)"/>
  <g class="rayon-grille" fill="none" stroke="rgba(243,238,230,.12)">${[50, 100, 150].map((r) => html`<circle cx="300" cy="300" r="${r}"/>`)}<path d="M300 20 V580 M20 300 H580"/></g>
  <path class="rayon-rhone" d="${rhone}" fill="none" stroke="#5b8cff" stroke-opacity=".5" stroke-width="3" stroke-linecap="round"/>
  <circle class="rayon-cercle" cx="300" cy="300" r="200" fill="none" stroke="#ff2d55" stroke-width="2.5" pathLength="1" data-fx-trait/>
  <g class="rayon-balayage" data-effet="rayon-50km"><path d="M300 300 L300 40 A260 260 0 0 1 430 75 Z" fill="url(#${id}-fond)" opacity=".9"/><path d="M300 300 L300 40" stroke="#ff2d55" stroke-width="1.5"/></g>
  ${v.map((x) => { const p = pos(x); const dans = p.d <= 50; return html`<g class="rayon-ville${x.base ? ' est-base' : ''}${dans ? ' est-dans' : ''}${x.secondaire ? ' est-secondaire' : ''}" transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})"><circle r="${x.base ? 7 : 4.5}"/>${x.cote === 'cache' ? '' : html`<text x="${x.cote === 'g' ? -10 : 10}" y="${x.base ? -10 : 5}" text-anchor="${x.cote === 'g' ? 'end' : 'start'}">${x.nom}${dans || x.base ? '' : html` · ${Math.round(p.d)} km`}</text>`}</g>`; })}
</svg>`;
}

