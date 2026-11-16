/* Passerelle entre les modules de la bibliothèque et le socle de la maquette : GSAP et ScrollTrigger
   sont déjà chargés par la page ; les modules reçoivent les mêmes instances (jamais une seconde copie). */
import { boucle, rafraichir } from '../socle/index.js?v=2';
const s = {
  get gsap() { return window.gsap || null; },
  get ScrollTrigger() { return window.ScrollTrigger || null; },
  get SplitText() { return window.SplitText || null; },
  get calme() { return false; },
  get souris() { return matchMedia('(hover: hover) and (pointer: fine)').matches; },
  get telephone() { return innerWidth < 700; },
  webgl() { try { const c = document.createElement('canvas'); return !/[?&]sanswebgl\b/.test(location.search) && !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; } },
  rafraichir: () => rafraichir(),
  boucle: (el, fn) => boucle(el, (dt, t) => fn(t * 1000, dt * 1000)),
  mesurer() {},
};
export async function pret() { return s; }
