/* DJ Ludo Remix · effets propres (direction « Plein feux »). Le socle gère l'ouverture, le voile en iris,
   l'en-tête, le menu, les boucles, les mesures et la bibliothèque d'effets posée par attributs.
   Effets du plan (data-effet) : faisceau, laser-titre, lumiere-change, pupitre-apercu, pupitre, rayon-50km,
   date-laser, eclats, index-occasions, gel-portrait, fil. */
import { demarrer, boucle, etat, versObjet, quand } from './socle/index.js?v=1';
import { init as initEtapes } from './modules/formulaire-par-etapes.js?v=1';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const html = document.documentElement;
const souris = matchMedia('(hover: hover) and (pointer: fine)').matches;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const euros = (n) => new Intl.NumberFormat('fr-FR').format(n).replace(/[  ]/g, ' ') + ' €';

/* ---------- Titres tracés au laser ---------- */
function tracer(el, delai = 0) {
  if (!el || el.classList.contains('trace') || el.classList.contains('trace-en-cours')) return;
  const n = (el.dataset.texte || el.textContent).length;
  const d = clamp(0.3 + n * 0.02, 0.5, 0.9);
  el.style.setProperty('--trace-duree', d + 's');
  setTimeout(() => {
    el.classList.add('trace-en-cours');
    setTimeout(() => el.classList.add('trace'), d * 1000 + 50);
  }, delai * 1000);
}
function laserTitres() {
  const hors = $$('.laser-titre').filter((el) => !el.closest('#debut'));
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { tracer(e.target); io.unobserve(e.target); } }), { rootMargin: '0px 0px -18% 0px' });
  hors.forEach((el) => io.observe(el));
}
const tracerOuverture = (delai = 0) => $$('#debut .laser-titre').forEach((el, i) => tracer(el, delai + i * 0.1));

/* ---------- La grande scène (effet signature, se manipule) ----------
   Une seule vraie photo à la fois (dj-ludo-remix-7, -dj-6, -2, les seules nettes), baissée autour d'une douche de
   poursuite qu'on promène sur tout l'écran ; les changements de lumière coupent d'une photo à l'autre par un flash
   (jamais un fondu). Faders : lyres (une seconde poursuite balaie la scène), lasers (balayages ILDA à droite),
   UV (coupe vers la photo aux LED violettes), disco (points de couleur nets qui tournent), fin de soirée (prix réel). */
function faisceau() {
  const sec = $('.scene[data-effet="faisceau"]');
  if (!sec) return;
  const cadre = $('.scene-collant', sec), cv = $('.scene-lumiere', sec), ctx = cv.getContext('2d');
  const photos = $$('.scene-photo', sec), flash = $('.scene-flash', sec), etapes = $$('.scene-etape', sec);
  let W = 0, H = 0;
  const mesurer = () => { W = cadre.clientWidth; H = cadre.clientHeight; cv.width = W; cv.height = H; };
  mesurer();
  new ResizeObserver(mesurer).observe(cadre);
  const tel = () => W < 761;
  let actuelle = 0, scroll = 0;
  const couper = (n) => {
    if (n === actuelle) return;
    actuelle = n;
    flash.classList.remove('flash'); void flash.offsetWidth; flash.classList.add('flash');
    photos.forEach((p, i) => p.classList.toggle('est-active', i === n));
    html.style.setProperty('--gel', ['#5b8cff', '#a979ff'][n] || '#5b8cff');
  };
  const choisir = () => couper(cadre.dataset.uv === '1' ? 1 : scroll);
  new MutationObserver(choisir).observe(cadre, { attributes: true, attributeFilter: ['data-uv'] });
  const visage = () => ({ x: W * (tel() ? 0.5 : 0.47), y: H * (tel() ? 0.22 : 0.26) });
  const repos = visage;
  let cible = visage(), pos = { ...cible }, vit = { x: 0, y: 0 }, dernierGeste = -10, demoFinie = false;
  const viser = (cx, cy) => { cible = { x: clamp(cx, 0, W), y: clamp(cy, 0, H) }; dernierGeste = performance.now() / 1000; demoFinie = true; sec.classList.add('a-joue'); };
  if (souris) cadre.addEventListener('pointermove', (e) => viser(e.clientX, e.clientY), { passive: true });
  let glisse = null;
  cadre.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse' && !e.target.closest('.pupitre-table')) glisse = { x: e.clientX }; }, { passive: true });
  cadre.addEventListener('pointermove', (e) => { if (glisse && e.pointerType !== 'mouse' && Math.abs(e.clientX - glisse.x) > 6) viser(e.clientX, e.clientY); }, { passive: true });
  addEventListener('pointerup', () => { glisse = null; }, { passive: true });
  cadre.addEventListener('touchmove', (e) => { const t = e.touches[0]; if (t && glisse && Math.abs(t.clientX - glisse.x) > 8) viser(t.clientX, t.clientY); }, { passive: true });
  const LASERS = [['255,45,85', 0], ['61,255,176', 1.7], ['255,45,85', 3.1], ['91,140,255', 4.4]];
  const COUL = ['#ff2d55', '#3dffb0', '#5b8cff', '#ffd23d', '#ff4fb6', '#ffffff'];
  const points = Array.from({ length: 70 }, (_, i) => ({ a: Math.random() * Math.PI * 2, r: 0.15 + Math.random() * 0.85, c: COUL[i % COUL.length], s: 3 + Math.random() * 4 }));
  boucle(cadre, (dt, t) => {
    if (t - dernierGeste > 6) {
      /* Seule : du visage (lunettes) vers les mains, puis un lent balayage. */
      const v = visage(), d = 0.5 - 0.5 * Math.cos(t * 0.45);
      cible = { x: v.x + Math.sin(t * 0.3) * W * 0.08, y: v.y + d * H * (tel() ? 0.16 : 0.34) };
    }
    const k = 22, amort = 7.5;
    vit.x += ((cible.x - pos.x) * k - vit.x * amort) * dt; vit.y += ((cible.y - pos.y) * k - vit.y * amort) * dt;
    pos.x += vit.x * dt; pos.y += vit.y * dt;
    cadre.style.setProperty('--fx', (pos.x / W * 100).toFixed(2) + '%');
    cadre.style.setProperty('--fy', (pos.y / H * 100).toFixed(2) + '%');
    if (cadre.dataset.lyres === '1') {
      cadre.style.setProperty('--gx', (50 + Math.sin(t * 0.7 + 2) * 38).toFixed(2) + '%');
      cadre.style.setProperty('--gy', (tel() ? 50 + Math.cos(t * 0.9) * 5 : 40 + Math.cos(t * 0.9) * 18).toFixed(2) + '%');
    }
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';
    const nbLasers = [0, 2, 4][+cadre.dataset.lasers || 0];
    if (nbLasers) {
      const lx = W * (tel() ? 0.97 : 0.86), ly = -8, bas = tel() ? H * 0.36 : H * 0.72;
      const amin = tel() ? -0.18 : -Math.atan2(lx - W * 0.56, bas), amax = 0.35;
      LASERS.slice(0, nbLasers).forEach(([c, ph], i) => {
        const a = amin + (0.5 + 0.5 * Math.sin(t * (0.45 + i * 0.11) + ph)) * (amax - amin);
        for (let n = 0; n < 3; n++) {
          const aa = a + (n - 1) * 0.05, L = (bas - ly) / Math.max(0.3, Math.cos(aa)), ex = lx + Math.sin(aa) * L, ey = ly + Math.cos(aa) * L;
          ctx.strokeStyle = `rgba(${c},.1)`; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(ex, ey); ctx.stroke();
          ctx.strokeStyle = `rgba(${c},.8)`; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(ex, ey); ctx.stroke();
        }
      });
    }
    if (cadre.dataset.disco === '1') {
      /* Points nets d'une boule à facettes qui tournent sur le mur et sur Ludo. */
      ctx.globalCompositeOperation = 'source-over';
      const cx = W * 0.58, cy = H * 0.42, R = Math.max(W, H) * 0.55;
      points.forEach((p) => {
        const a = p.a + t * 0.35, x = cx + Math.cos(a) * R * p.r, y = cy + Math.sin(a) * R * p.r * 0.55;
        if (x < W * 0.4 && !tel()) return;
        ctx.globalAlpha = 0.28; ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(x, y, p.s * 2.4, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = 0.9; ctx.beginPath(); ctx.arc(x, y, p.s, 0, Math.PI * 2); ctx.fill();
      });
      ctx.globalAlpha = 1;
    }
    ctx.globalCompositeOperation = 'source-over';
  });
  if (ST) ST.create({ trigger: sec, start: 'top top', end: 'bottom bottom', onUpdate: (st) => {
    const n = st.progress < 0.5 ? 0 : 1;
    if (n !== scroll) { scroll = n; choisir(); }
    etapes.forEach((e, i) => e.classList.toggle('est-active', i === Math.min(2, Math.floor(st.progress * 3))));
  } });
  /* Démonstration : la console se règle seule une fois, pour montrer que la salle répond. */
  quand('pret', () => {
    const regler = (nom, v, delai) => setTimeout(() => {
      if (demoFinie || sec.classList.contains('console-touchee')) return;
      const c = $(`[name="${nom}"]`, cadre); if (!c) return;
      c.value = v; c.dispatchEvent(new Event('input', { bubbles: true })); c.dispatchEvent(new Event('change', { bubbles: true }));
    }, delai);
    regler('lyres', 1, 1500); regler('lasers', 1, 2400); regler('uv', 1, 3300); regler('disco', 1, 5600); regler('fin', 2, 6400); regler('disco', 0, 8600); regler('uv', 0, 9600);
  });
  $('.pupitre-table', cadre).addEventListener('pointerdown', () => sec.classList.add('console-touchee'), { passive: true });
}

/* ---------- Livre d'or : on choisit une citation, les lasers l'écrivent en grand sur le mur ---------- */
function showLaser() {
  const sec = $('[data-effet="show-laser"]');
  if (!sec) return;
  const cv = $('.livre-lasers', sec), ctx = cv.getContext('2d'), mur = $('.livre-mur', sec), grand = $('.livre-grand', sec), sig = $('.livre-signature', sec);
  let W = 0, H = 0, M = { x: 0, y: 0, w: 0, h: 0 }, G = { x: 0, y: 0, w: 0, h: 0 };
  const mesurer = () => { W = sec.clientWidth; H = sec.clientHeight; cv.width = W; cv.height = H; const r = sec.getBoundingClientRect(), m = mur.getBoundingClientRect(), g = grand.getBoundingClientRect(); M = { x: m.left - r.left, y: m.top - r.top, w: m.width, h: m.height }; G = { x: g.left - r.left, y: g.top - r.top, w: g.width, h: g.height }; };
  mesurer(); new ResizeObserver(mesurer).observe(sec);
  let ecrit = 0, main = false, idx = 0;
  const choix = $$('.livre-choix', sec);
  const ecrire = (b) => {
    choix.forEach((x) => { x.classList.toggle('est-choisi', x === b); x.setAttribute('aria-pressed', String(x === b)); });
    grand.textContent = b.dataset.texte; grand.dataset.texte = b.dataset.texte; sig.textContent = b.dataset.qui;
    grand.classList.remove('trace', 'trace-en-cours'); void grand.offsetWidth; tracer(grand); ecrit = performance.now() / 1000; mesurer();
  };
  choix.forEach((b, i) => { b.addEventListener('click', () => { main = true; ecrire(b); }); if (souris) b.addEventListener('pointerenter', () => { main = true; ecrire(b); }); });
  /* Sans main du visiteur, les citations s'écrivent l'une après l'autre. */
  const io = new IntersectionObserver(([e]) => { sec.__visible = e.isIntersecting; }); io.observe(sec);
  setInterval(() => { if (!main && sec.__visible && !document.hidden) { idx = (idx + 1) % choix.length; ecrire(choix[idx]); } }, 3200);
  const C = ['255,45,85', '61,255,176', '91,140,255', '255,45,85', '255,210,61'];
  boucle(sec, (dt, t) => {
    ctx.clearRect(0, 0, W, H); ctx.globalCompositeOperation = 'lighter';
    /* Pendant l'écriture, les faisceaux suivent la pointe ; sinon ils balaient le mur. */
    const e = clamp((t - ecrit) / 0.9, 0, 1), ecriture = e < 1;
    /* Les faisceaux convergent sur la pointe qui écrit ; ensuite ils balaient la citation. */
    const px = G.x + G.w * (ecriture ? e : 0.5 + 0.45 * Math.sin(t * 0.8)), py = G.y + G.h * (ecriture ? 0.3 + 0.4 * ((e * 3) % 1) : 0.5 + 0.35 * Math.cos(t * 1.1));
    C.forEach((c, i) => {
      const sx = M.x + M.w * (0.05 + i * 0.22), sy = -6;
      const ex = px + (ecriture ? 0 : Math.sin(t * 0.7 + i * 1.3) * 60), ey = py + (ecriture ? 0 : Math.cos(t * 0.9 + i) * 30);
      ctx.strokeStyle = `rgba(${c},.1)`; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.stroke();
      ctx.strokeStyle = `rgba(${c},.7)`; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.stroke();
    });
    ctx.globalCompositeOperation = 'source-over';
  });
}

/* ---------- Fil : la lyre qui glisse dans la marge, et la couleur de son gel ---------- */
function fil() {
  const f = $('.fil');
  if (!f || !ST) return;
  ST.create({ start: 0, end: 'max', onUpdate: (s) => f.style.setProperty('--fil', s.progress.toFixed(4)) });
  $$('[data-teinte]').forEach((sec) => ST.create({
    trigger: sec, start: 'top 55%', end: 'bottom 55%',
    onToggle: (s) => { if (s.isActive) html.style.setProperty('--gel', sec.dataset.teinte); },
  }));
}

/* ---------- Accueil : le faisceau saute de carte en carte ---------- */
function cartesEclairees() {
  const trois = $('.trois');
  if (!trois || !ST) return;
  const cartes = $$('.carte-soiree', trois);
  ST.create({ trigger: trois, start: 'top 70%', end: 'bottom 40%', onUpdate: (s) => {
    const i = Math.min(cartes.length - 1, Math.floor(s.progress * cartes.length));
    cartes.forEach((c, k) => c.classList.toggle('est-eclairee', k === i));
  }, onLeave: () => cartes.forEach((c) => c.classList.remove('est-eclairee')), onLeaveBack: () => cartes.forEach((c) => c.classList.remove('est-eclairee')) });
}

/* ---------- Accueil : la lumière change (scène épinglée) : la lyre change de gel, la salle aussi ---------- */
function lumiereChange() {
  const sec = $('.lumiere');
  if (!sec || !ST) return;
  const gels = $$('.lumiere-gel', sec), etapes = $$('.lumiere-etape', sec);
  const GELS = ['#3dffb0', '#ff7a2d', '#a979ff'];
  const n = gels.length;
  let courant = -1;
  ST.create({ trigger: sec, start: 'top top', end: 'bottom bottom', scrub: true, onUpdate: (s) => {
    const p = s.progress * n;
    gels.forEach((g, i) => {
      const r = clamp((p - i) / 0.6, 0, 1);
      g.style.clipPath = `circle(${(r * r * 150).toFixed(1)}% at 72% 4%)`;
      g.style.opacity = i < n - 1 ? (1 - clamp(p - i - 1, 0, 1)).toFixed(2) : '1';
    });
    const k = clamp(Math.floor(p), 0, n - 1);
    if (k !== courant) { courant = k; etapes.forEach((e, i) => e.classList.toggle('est-active', i === k)); html.style.setProperty('--gel', GELS[k]); }
  } });
}

/* ---------- Accueil : la console des formules monte au défilement ---------- */
function pupitreApercu() {
  const voies = $$('.console .voie');
  if (!voies.length || !gsap || !ST) return;
  voies.forEach((v, i) => {
    const niveau = parseFloat(v.style.getPropertyValue('--niveau')) || 0.5;
    gsap.fromTo(v, { '--niveau-actuel': 0 }, { '--niveau-actuel': niveau, ease: 'none',
      scrollTrigger: { trigger: '.console', start: `top ${88 - i * 3}%`, end: 'center 45%', scrub: 0.6 } });
  });
}

/* ---------- Carte : le balayage tourne au défilement ---------- */
function rayon() {
  if (!gsap || !ST) return;
  $$('.rayon-balayage').forEach((g) => {
    gsap.fromTo(g, { rotation: -40, svgOrigin: '300 300' }, { rotation: 400, svgOrigin: '300 300', ease: 'none',
      scrollTrigger: { trigger: g.closest('svg'), start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
  });
}

/* ---------- Retour physique : la date s'écrit au laser, puis le tampon « reçu » ---------- */
function ecrireDate(mur, valeur) {
  const t = $('.date-texte', mur);
  if (!t) return;
  let libelle = 'Votre date';
  if (valeur) {
    const m = String(valeur).match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    const d = m ? new Date(+m[3], +m[2] - 1, +m[1], 12) : new Date(valeur + 'T12:00:00');
    if (!isNaN(d)) libelle = new Intl.DateTimeFormat('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' }).format(d).replace('.', '');
  }
  t.textContent = libelle;
  mur.classList.remove('est-recu'); void mur.offsetWidth; mur.classList.add('est-recu');
}
function dateLaser() {
  const f = $('[data-date-laser]');
  if (!f) return;
  f.addEventListener('submit', () => setTimeout(() => {
    const b = $('[type="submit"]', f);
    if (b && b.disabled) {
      ecrireDate($('.date-mur'), $('[name="date"]', f).value);
      const lien = document.createElement('a');
      lien.className = 'lien-fleche'; lien.textContent = 'Préciser ma demande';
      lien.href = `/contact?type=${encodeURIComponent($('[name="type"]', f).value)}&date=${encodeURIComponent($('[name="date"]', f).value)}&tel=${encodeURIComponent($('[name="tel"]', f).value)}#devis`;
      lien.dataset.libelle = 'Contact';
      if (!$('.lien-fleche', f)) f.appendChild(lien);
    }
  }, 0));
}

/* ---------- Contact : demande de devis en étapes (module formulaire-par-etapes) ---------- */
async function devis() {
  const racine = $('.fpe');
  if (!racine) return;
  const p = new URLSearchParams(location.search);
  p.forEach((v, k) => $$(`[name="${CSS.escape(k)}"]`, racine).forEach((c) => {
    if (c.type === 'radio' || c.type === 'checkbox') c.checked = c.value === v; else c.value = v;
  }));
  await initEtapes(racine, { defilement: true });
  racine.addEventListener('formulaire:envoye', (e) => {
    const fin = $('.fpe__fin', racine);
    const date = (e.detail && e.detail.valeurs && e.detail.valeurs.date) || $('[name="date"]', racine).value;
    requestAnimationFrame(() => { ecrireDate(fin, date); fin.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); });
  });
}

/* ---------- Formules : le pupitre lumière ---------- */
function pupitre() { $$('[data-effet="pupitre"]').forEach(unPupitre); }
function unPupitre(sec) {
  const form = $('[data-pupitre]', sec);
  const packs = JSON.parse($('[data-pupitre-donnees]', sec).textContent);
  const champs = Object.fromEntries(['lyres', 'lasers', 'uv', 'disco', 'fin'].map((k) => [k, $(`[name="${k}"]`, sec)]));
  const asso = $('[name="asso"]', form);
  const nom = $('[data-pupitre-nom]', sec), prix = $('[data-pupitre-prix]', sec), detail = $('[data-pupitre-detail]', sec), lien = $('[data-pupitre-lien]', sec);
  const fournit = { 'premier-prix': [0, 1, 0, 0], association: [0, 1, 0, 0], 'de-base': [1, 1, 0, 0], blacklight: [1, 1, 1, 0], unlimited: [1, 2, 0, 1] };
  let affiche = packs[0].prix;
  const calculer = () => {
    const v = Object.fromEntries(Object.entries(champs).map(([k, c]) => [k, +c.value]));
    const finH = v.fin === 5 ? 99 : 25 + v.fin;
    let meilleur = null;
    for (const p of packs) {
      const [ly, la, uv, di] = fournit[p.cle];
      if (p.association && !asso.checked) continue;
      if (v.lyres > ly || v.lasers > la || v.uv > uv || v.disco > di) continue;
      let sup = 0;
      if (finH > p.finH) { if (!p.heureSup || finH === 99) continue; sup = (finH - p.finH) * p.heureSup; }
      const total = p.prix + sup;
      if (!meilleur || total < meilleur.total) meilleur = { p, total, sup, heures: sup / 100 };
    }
    if (!meilleur) meilleur = { p: packs[packs.length - 1], total: packs[packs.length - 1].prix, sup: 0, heures: 0 };
    return { v, m: meilleur };
  };
  const rendre = () => {
    const { v, m } = calculer();
    Object.entries(champs).forEach(([k, c]) => {
      const vals = c.dataset.valeurs.split('|'); const txt = vals[+c.value];
      c.setAttribute('aria-valuetext', txt); c.closest('.fader').querySelector('output').textContent = txt;
    });
    sec.dataset.lyres = v.lyres; sec.dataset.lasers = v.lasers; sec.dataset.uv = v.uv; sec.dataset.disco = v.disco;
    const n = v.lyres + v.lasers + v.uv + v.disco;
    sec.style.setProperty('--nuit', (0.74 - 0.12 * n - 0.03 * v.fin).toFixed(2));
    sec.style.setProperty('--noir', (0.985 - 0.07 * n).toFixed(3));
    nom.textContent = m.p.nom;
    const fin = v.fin === 5 ? m.p.fin : champs.fin.dataset.valeurs.split('|')[v.fin];
    detail.textContent = `${m.p.materiel.join(' · ')} · ${m.p.debut} – ${m.p.fin}` + (m.heures ? ` · + ${m.heures} h jusqu'à ${fin} (${euros(m.sup)})` : (v.fin < 5 && m.p.fin !== fin ? ` · fin vers ${fin}\u00a0: comprise` : '')) + (m.p.heureSup ? ` · heure en plus\u00a0: ${euros(m.p.heureSup)}` : '');
    lien.href = `/contact?formule=${m.p.cle}#devis`;
    const de = affiche; affiche = m.total;
    prix.textContent = euros(m.total);
    if (gsap && de !== m.total) gsap.fromTo(prix, { scale: 1.12 }, { scale: 1, duration: 0.35, ease: 'back.out(3)' });
  };
  /* Préréglage depuis l'adresse (?formule=blacklight) : les faders se placent sur la formule. */
  const regl = { 'premier-prix': [0, 1, 0, 0, 0], association: [0, 1, 0, 0, 1], 'de-base': [1, 1, 0, 0, 2], blacklight: [1, 1, 1, 0, 4], unlimited: [1, 2, 0, 1, 5] };
  const q = new URLSearchParams(location.search).get('formule') || sec.dataset.defaut;
  if (regl[q]) { ['lyres', 'lasers', 'uv', 'disco', 'fin'].forEach((k, i) => { champs[k].value = regl[q][i]; }); asso.checked = q === 'association'; }
  form.addEventListener('input', rendre);
  form.addEventListener('change', (e) => { const f = e.target.closest('.fader'); if (f) { f.classList.remove('secousse'); void f.offsetWidth; f.classList.add('secousse'); } });
  form.addEventListener('submit', (e) => e.preventDefault());
  rendre();
  /* Disco : éclats de boule à facettes dans la salle. */
  const cv = $('.salle-disco', sec);
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const points = Array.from({ length: 90 }, () => ({ a: Math.random() * Math.PI * 2, r: Math.random(), v: 0.15 + Math.random() * 0.25, h: [330, 190, 50, 280][Math.floor(Math.random() * 4)] }));
  boucle(cv, (dt, t) => {
    if (sec.dataset.disco !== '1') return;
    const w = cv.width = cv.clientWidth, h = cv.height = cv.clientHeight;
    ctx.clearRect(0, 0, w, h);
    points.forEach((p) => { p.a += p.v * dt; const x = w / 2 + Math.cos(p.a) * w * 0.55 * p.r, y = h * 0.45 + Math.sin(p.a * 1.3) * h * 0.5 * p.r;
      ctx.fillStyle = `hsla(${p.h}, 100%, 75%, ${0.5 + 0.5 * Math.sin(t * 3 + p.r * 9)})`; ctx.beginPath(); ctx.arc(x, y, 2.2, 0, 7); ctx.fill(); });
  });
}

/* ---------- Soirées : l'index des occasions s'allume, la boule jette ses éclats ---------- */
function indexOccasions() {
  const l = $('.index-liste');
  if (!l || !ST) return;
  const items = $$('li', l);
  ST.create({ trigger: l, start: 'top 80%', end: 'bottom 45%', scrub: true, onUpdate: (s) => {
    const n = Math.round(s.progress * items.length);
    items.forEach((li, i) => li.classList.toggle('est-allume', i < n));
  } });
}
function eclats() {
  const cv = $('canvas.eclats');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const pts = Array.from({ length: innerWidth < 761 ? 70 : 160 }, () => ({ x: Math.random(), y: Math.random(), v: 0.02 + Math.random() * 0.05, s: 1 + Math.random() * 2.4, h: [320, 300, 190, 45][Math.floor(Math.random() * 4)], p: Math.random() * 7 }));
  let vitesse = 1, dernierY = scrollY;
  boucle(cv, (dt, t) => {
    const w = cv.clientWidth, h = cv.clientHeight;
    if (cv.width !== w) { cv.width = w; cv.height = h; }
    const dy = Math.abs(scrollY - dernierY); dernierY = scrollY;
    vitesse += (1 + Math.min(dy, 80) / 8 - vitesse) * Math.min(1, dt * 4);
    ctx.clearRect(0, 0, w, h);
    pts.forEach((p) => { p.x = (p.x + p.v * dt * vitesse) % 1;
      ctx.fillStyle = `hsla(${p.h}, 100%, 78%, ${(0.35 + 0.65 * Math.abs(Math.sin(t * 2 + p.p))).toFixed(2)})`;
      ctx.fillRect(p.x * w, p.y * h, p.s, p.s); });
  });
}

/* ---------- Ludo : le portrait glisse et prend la couleur du gel ---------- */
function gelPortrait() {
  const m = $('[data-effet="gel-portrait"]');
  if (!m || !gsap || !ST) return;
  gsap.fromTo(m, { y: 0 }, { y: -60, ease: 'none', scrollTrigger: { trigger: m, start: 'top top', end: 'bottom top', scrub: true } });
  const GELS = ['#5b8cff', '#ff2d55', '#a979ff', '#3dffb0'];
  ST.create({ start: 0, end: 'max', onUpdate: (s) => html.style.setProperty('--gel', GELS[Math.min(3, Math.floor(s.progress * 4))]) });
}

/* ---------- Ouverture ---------- */
const enTete = () => $$('#debut [data-anime="gsap"]');
function entreePremierEcran(tl, a) {
  const els = enTete();
  if (!els.length) return;
  tl.fromTo(els, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out' }, a);
}

demarrer({
  preparer() {
    [faisceau, showLaser, fil, laserTitres, cartesEclairees, lumiereChange, rayon, dateLaser, pupitre, indexOccasions, eclats, gelPortrait]
      .forEach((f) => { try { f(); } catch (err) { console.error('[site]', f.name, err); } });
    devis().catch((err) => console.error('[site] devis', err));
  },
  /* Intro (moins de 3 s) : le brouillard, un trait de laser écrit LUDO REMIX, la lentille s'allume,
     puis elle glisse jusqu'à l'objet d'ouverture de la page (la lyre à l'accueil) et la page s'ouvre depuis elle. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-revele', { attr: { width: 0 } }, { attr: { width: 1000 }, duration: 0.85, ease: 'power2.inOut' }, 0.1)
      .fromTo('.ouverture-pointe', { attr: { cx: 0 }, opacity: 1 }, { attr: { cx: 1000 }, duration: 0.85, ease: 'power2.inOut' }, 0.1)
      .to('.ouverture-pointe', { opacity: 0, duration: 0.15 }, 0.95)
      .fromTo('.ouverture-ligne', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, 0.5)
      .fromTo('.ouverture-objet', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(2)', immediateRender: true }, 0.7)
      .to('.ouverture-laser, .ouverture-ligne', { opacity: 0, duration: 0.25 }, 0.98);
    versObjet(tl, { a: 1.0, duree: 0.42, ouverture: 0.7 });
    entreePremierEcran(tl, 1.45);
    tl.call(() => tracerOuverture(0), null, 1.6);
    return tl;
  },
  etatFinal() {
    if (gsap) gsap.set(enTete(), { clearProps: 'transform,opacity' });
    $$('#debut .laser-titre').forEach((el) => el.classList.add('trace', 'trace-en-cours'));
  },
  arrivee() {
    if (!gsap) return;
    const tl = gsap.timeline({ delay: 0.12 });
    entreePremierEcran(tl, 0);
    tracerOuverture(0.25);
  },
});

quand('pret', () => { etat.site = 'djludoremix'; });
