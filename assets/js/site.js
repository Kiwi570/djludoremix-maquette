/* DJ Ludo Remix · effets propres (direction « Plein feux »). Le socle gère l'ouverture, le voile en iris,
   l'en-tête, le menu, les boucles, les mesures et la bibliothèque d'effets posée par attributs.
   Effets du plan (data-effet) : faisceau, laser-titre, lumiere-change, pupitre-apercu, pupitre, rayon-50km,
   date-laser, eclats, index-occasions, gel-portrait, fil. */
import { demarrer, boucle, etat, versObjet, quand } from './socle/index.js?v=3';
import { init as initEtapes } from './modules/formulaire-par-etapes.js?v=3';

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
      if (!meilleur || total < meilleur.total || (total === meilleur.total && p.association)) meilleur = { p, total, sup, heures: sup / 100 };
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
    if (sec.dataset.formuleAffichee !== m.p.cle) { sec.dataset.formuleAffichee = m.p.cle; sec.dispatchEvent(new CustomEvent('pupitre:formule', { detail: m.p.cle })); }
    const fin = v.fin === 5 ? m.p.fin : champs.fin.dataset.valeurs.split('|')[v.fin];
    detail.textContent = `${m.p.materiel.join(' · ')} · ${m.p.debut} – ${m.p.fin}` + (m.heures ? ` · + ${m.heures} h jusqu'à ${fin} (${euros(m.sup)})` : '') + (m.p.heureSup ? ` · heure en plus\u00a0: ${euros(m.p.heureSup)}` : '');
    lien.href = `/contact?formule=${m.p.cle}#devis`;
    const de = affiche; affiche = m.total;
    prix.textContent = euros(m.total);
    if (gsap && de !== m.total) gsap.fromTo(prix, { scale: 1.12 }, { scale: 1, duration: 0.35, ease: 'back.out(3)' });
  };
  /* Préréglage depuis l'adresse (?formule=blacklight) : les faders se placent sur la formule. */
  const regl = { 'premier-prix': [0, 1, 0, 0, 0], association: [0, 1, 0, 0, 1], 'de-base': [1, 1, 0, 0, 2], blacklight: [1, 1, 1, 0, 4], unlimited: [1, 2, 0, 1, 5] };
  const q = new URLSearchParams(location.search).get('formule') || sec.dataset.defaut;
  if (regl[q]) { ['lyres', 'lasers', 'uv', 'disco', 'fin'].forEach((k, i) => { champs[k].value = regl[q][i]; }); asso.checked = q === 'association'; }
  sec.regler = (cle) => { if (!regl[cle]) return; ['lyres', 'lasers', 'uv', 'disco', 'fin'].forEach((k, i) => { champs[k].value = regl[cle][i]; }); asso.checked = cle === 'association'; rendre(); };
  if (regl[new URLSearchParams(location.search).get('formule')]) sec.dataset.touche = '1';
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

/* ---------- Formules : VU-mètre des cinq prix (les LED montent puis vivent ; une colonne règle le pupitre) ---------- */
function vuMetre() {
  const sec = $('[data-effet="vu-metre"]');
  if (!sec) return;
  const cols = $$('.vu-lien', sec).map((a) => ({ a, segs: $$('i', a), base: +a.dataset.niveau, n: -1 }));
  const poser = (c, n) => { if (n === c.n) return; c.n = n; c.segs.forEach((s, k) => s.classList.toggle('on', k < n)); };
  const calme = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let survol = null, montee = calme ? 1 : 0, pret = calme, pas = 0;
  cols.forEach((c) => {
    c.a.addEventListener('pointerenter', () => { survol = c; }); c.a.addEventListener('pointerleave', () => { survol = null; });
    c.a.addEventListener('click', (e) => {
      const p = $('.salle-scene');
      if (!p || !p.regler) return;
      e.preventDefault();
      p.dataset.touche = '1'; p.regler(c.a.dataset.vu);
      $$('.salle-etape', p).forEach((x) => x.classList.toggle('est-active', x.dataset.etapeFormule === c.a.dataset.vu));
      history.replaceState(null, '', `?formule=${c.a.dataset.vu}#pupitre`);
      p.scrollIntoView({ behavior: calme ? 'auto' : 'smooth' });
    });
  });
  if (!calme) cols.forEach((c) => poser(c, 0));
  quand('pret', () => { pret = true; });
  boucle(sec, (dt, t) => {
    if (!pret) return;
    montee = Math.min(1, montee + dt / 0.9);
    pas += dt; if (pas < 0.09 && montee === 1) return; pas = 0;
    cols.forEach((c, i) => {
      const vit = calme || c === survol ? 0 : Math.round(1.3 + Math.sin(t * 5.1 + i * 1.9) * 1.1 + Math.sin(t * 8.7 + i * 0.7) * 0.8);
      poser(c, Math.max(1, Math.round(c.base * easeOut(montee)) - (montee === 1 ? vit : 0)));
    });
  });
}
const easeOut = (x) => 1 - Math.pow(1 - x, 3);

/* ---------- Formules : la salle épinglée ; le défilement passe les cinq formules au pupitre tant qu'on n'y a pas touché ---------- */
function salleScene() {
  const sec = $('.salle-scene');
  if (!sec || !ST) return;
  const etapes = $$('.salle-etape', sec), cles = etapes.map((e) => e.dataset.etapeFormule);
  const table = $('.pupitre-table', sec);
  const toucher = () => { sec.dataset.touche = '1'; };
  table.addEventListener('pointerdown', toucher, { passive: true });
  table.addEventListener('keydown', toucher);
  let courant = -1;
  const marquer = (cle) => etapes.forEach((e) => e.classList.toggle('est-active', e.dataset.etapeFormule === cle));
  sec.addEventListener('pupitre:formule', (e) => marquer(e.detail));
  if (sec.dataset.formuleAffichee) marquer(sec.dataset.formuleAffichee);
  ST.create({ trigger: sec, start: 'top top', end: 'bottom bottom', onUpdate: (st) => {
    if (sec.dataset.touche === '1') return;
    const i = Math.min(cles.length - 1, Math.floor(st.progress * cles.length * 1.05));
    if (i === courant) return;
    courant = i;
    if (sec.regler) sec.regler(cles[i]);
  } });
}

/* ---------- Ludo : la photo vue à travers « LUDO » ; au défilement, les lettres s'ouvrent jusqu'à la photo pleine ---------- */
function lettresLudo() {
  const sec = $('[data-effet="lettres-ludo"]');
  if (!sec) return;
  const m = $('.ouv-lettres-masque', sec), t = $('.ouv-lettres-texte', sec);
  const hauteurTexte = () => sec.style.setProperty('--texte-h', `${t.parentElement.clientHeight - t.offsetTop + 16}px`);
  hauteurTexte(); new ResizeObserver(hauteurTexte).observe(t);
  if (!gsap || !ST) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const tl = gsap.timeline({ scrollTrigger: { trigger: sec, start: 'top top', end: 'bottom bottom', scrub: 0.6 } });
  tl.to(m, { scale: 14, ease: 'power2.in', duration: 1 }, 0)
    .to(m, { opacity: 0, duration: 0.25, ease: 'none' }, 0.75)
    .to(t, { y: () => t.offsetHeight + 40, duration: 0.6, ease: 'power1.in' }, 0.1);
  /* Seule, la photo respire derrière les lettres. */
  const img = $('.ouv-lettres-photo img', sec);
  if (img) boucle(sec, (dt, tt) => { img.style.transform = `scale(${(1.06 + Math.sin(tt * 0.5) * 0.03).toFixed(4)}) translate3d(${(Math.sin(tt * 0.3) * 1.2).toFixed(2)}%, 0, 0)`; });
}

/* ---------- Ludo : le parcours défile de côté sous la lyre ; chaque date passée sous le faisceau s'allume ---------- */
function friseFaisceau() {
  const sec = $('[data-effet="frise-faisceau"]');
  if (!sec || !gsap || !ST) return;
  const piste = $('.frise2-piste', sec), items = $$('.frise2-item', sec), fen = $('.frise2-fenetre', sec);
  let dist = 0;
  const mesurer = () => { dist = Math.max(0, piste.scrollWidth - fen.clientWidth); sec.style.height = `calc(100svh + ${Math.round(dist * 1.1)}px)`; };
  mesurer(); addEventListener('resize', () => { mesurer(); ST.refresh(); });
  const allumer = () => {
    const cx = innerWidth / 2;
    items.forEach((it) => { const r = it.getBoundingClientRect(); const dans = r.left < cx + 40 && r.right > cx - 40; it.classList.toggle('est-allume', dans); if (dans) it.classList.add('a-brule'); });
  };
  gsap.to(piste, { x: () => -dist, ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: 'bottom bottom', scrub: 0.4, invalidateOnRefresh: true } });
  let pas = 0;
  boucle(sec, (dt) => { pas += dt; if (pas < 0.08) return; pas = 0; allumer(); });
  allumer();
}

/* ---------- Contact : l'affiche de la soirée se compose pendant la demande, puis se fait tamponner ---------- */
function affiche() {
  const a = $('[data-affiche]'), form = $('[data-devis]');
  if (!a || !form) return;
  const champ = (k) => $(`[data-affiche-champ="${k}"]`, a);
  const defaut = Object.fromEntries(['type', 'date', 'lieu', 'invites', 'formule'].map((k) => [k, champ(k).textContent]));
  const poser = (k, v) => {
    const el = champ(k), txt = v || defaut[k];
    if (el.textContent === txt) return;
    el.textContent = txt; el.classList.remove('est-rempli'); void el.offsetWidth; if (v) el.classList.add('est-rempli');
  };
  const lire = () => {
    const f = new FormData(form);
    poser('type', f.get('type') || '');
    const d = String(f.get('date') || '').match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    const jour = d ? new Date(+d[3], +d[2] - 1, +d[1], 12) : null;
    poser('date', jour && !isNaN(jour) ? new Intl.DateTimeFormat('fr-FR', { weekday: 'short', day: 'numeric', month: 'long' }).format(jour).replace('.', '') : '');
    poser('lieu', String(f.get('lieu') || '').trim());
    const n = +f.get('invites'); poser('invites', n > 0 ? `${n} invités` : '');
    const r = $('[name="formule"]:checked', form);
    poser('formule', r ? (r.value === 'nsp' ? 'formule à choisir' : $('.fpe__carte-titre', r.closest('label')).textContent.split(' · ')[0]) : '');
  };
  form.addEventListener('input', lire); form.addEventListener('change', lire);
  lire(); setTimeout(lire, 300); quand('pret', lire);
  $('.fpe').addEventListener('formulaire:envoye', () => a.classList.add('est-tamponnee'));
  const recommencer = $('[data-recommencer]');
  if (recommencer) recommencer.addEventListener('click', () => { a.classList.remove('est-tamponnee'); setTimeout(lire, 50); });
}

/* ---------- Soirées : une vraie boule à facettes, dessinée facette par facette, qui tourne et jette ses reflets ---------- */
function boule3d() {
  const cv = $('[data-effet="boule-3d"]'), place = $('.boule-place');
  if (!cv || !place) return;
  const sec = cv.parentElement, ctx = cv.getContext('2d');
  const calme = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W = 0, H = 0, dpr = 1;
  const mesurer = () => { dpr = Math.min(2, devicePixelRatio || 1); W = sec.clientWidth; H = sec.clientHeight; cv.width = W * dpr; cv.height = H * dpr; };
  mesurer(); new ResizeObserver(mesurer).observe(sec);
  const BANDES = 16, facettes = [];
  for (let b = 0; b < BANDES; b++) {
    const phi = -Math.PI / 2 + (b + 0.5) * Math.PI / BANDES, n = Math.max(6, Math.round(2 * BANDES * Math.cos(phi)));
    for (let k = 0; k < n; k++) { const r = Math.random(); facettes.push({ phi, dphi: Math.PI / BANDES, lam: k * 2 * Math.PI / n, dlam: 2 * Math.PI / n, eclat: Math.random(), miroir: Math.random(), teinte: r < 0.1 ? 330 : r < 0.18 ? 215 : r < 0.23 ? 275 : -1 }); }
  }
  const reflets = Array.from({ length: 90 }, () => ({ lam: Math.random() * Math.PI * 2, y: Math.random(), r: 1 + Math.random() * 1.8, teinte: [330, 210, 280, 0, 0][Math.floor(Math.random() * 5)] }));
  const L = [-0.45, 0.6, 0.66];
  const dessiner = (t) => {
    const rot = t * 0.55;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
    const pr = place.getBoundingClientRect(), sr = sec.getBoundingClientRect();
    const visible = pr.width > 0 && getComputedStyle(place).display !== 'none';
    const cx = pr.left - sr.left + pr.width / 2, cy = pr.top - sr.top + pr.height / 2, R = pr.width / 2;
    /* Reflets sur la salle */
    ctx.globalCompositeOperation = 'lighter';
    reflets.forEach((p) => {
      const a = (p.lam + rot) % (Math.PI * 2), face = Math.cos(a);
      if (face < 0.05) return;
      const x = W * (0.5 + Math.sin(a) * 0.62), y = H * (0.08 + p.y * 0.86);
      const surTexte = W > 760 && x < W * 0.55 && y > H * 0.25;
      const c = p.teinte ? `hsla(${p.teinte}, 100%, 72%,` : 'hsla(0, 0%, 100%,', al = (surTexte ? 0.25 : 0.9) * face;
      const gr = ctx.createRadialGradient(x, y, 0, x, y, p.r * 6); gr.addColorStop(0, c + al + ')'); gr.addColorStop(0.25, c + al * 0.5 + ')'); gr.addColorStop(1, c + '0)');
      ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(x, y, p.r * 6, 0, Math.PI * 2); ctx.fill();
    });
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
    if (!visible) return;
    /* Le fil */
    ctx.strokeStyle = 'rgba(243,238,230,.35)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, cy - R); ctx.stroke();
    /* Halo */
    const g = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 2.4); g.addColorStop(0, 'rgba(200,190,255,.28)'); g.addColorStop(1, 'rgba(200,190,255,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R * 2.4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#0c0b12'; ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
    const pt = (phi, lam) => [cx + R * Math.cos(phi) * Math.sin(lam), cy - R * Math.sin(phi), Math.cos(phi) * Math.cos(lam)];
    facettes.forEach((f) => {
      const lam = f.lam + rot, nz = Math.cos(f.phi) * Math.cos(lam + f.dlam / 2);
      if (nz <= 0.02) return;
      const m = 0.42, p1 = pt(f.phi - f.dphi * m, lam + f.dlam * (0.5 - m)), p2 = pt(f.phi - f.dphi * m, lam + f.dlam * (0.5 + m)), p3 = pt(f.phi + f.dphi * m, lam + f.dlam * (0.5 + m)), p4 = pt(f.phi + f.dphi * m, lam + f.dlam * (0.5 - m));
      const nx = Math.cos(f.phi) * Math.sin(lam + f.dlam / 2), ny = Math.sin(f.phi);
      const d = Math.max(0, nx * L[0] + ny * L[1] + nz * L[2]);
      const spec = Math.pow(Math.max(0, 2 * d * nz - L[2]), 18);
      const scint = 0.5 + 0.5 * Math.sin(t * 7 + f.eclat * 40);
      const lum = Math.min(96, 8 + f.miroir * 26 + d * 34 + spec * 60 * scint);
      ctx.fillStyle = spec * scint > 0.55 ? '#fff' : f.teinte < 0 ? `hsl(225 8% ${lum}%)` : `hsl(${f.teinte} 85% ${Math.min(80, lum + 18)}%)`;
      ctx.beginPath(); ctx.moveTo(p1[0], p1[1]); ctx.lineTo(p2[0], p2[1]); ctx.lineTo(p3[0], p3[1]); ctx.lineTo(p4[0], p4[1]); ctx.closePath(); ctx.fill();
      if (spec * scint > 0.7) { ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = 'rgba(255,255,255,.8)'; const sx = (p1[0] + p3[0]) / 2, sy = (p1[1] + p3[1]) / 2; ctx.fillRect(sx - R * 0.18, sy - 0.6, R * 0.36, 1.2); ctx.fillRect(sx - 0.6, sy - R * 0.18, 1.2, R * 0.36); ctx.globalCompositeOperation = 'source-over'; }
    });
  };
  if (calme) { dessiner(0.8); return; }
  boucle(sec, (dt, t) => dessiner(t));
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
    [faisceau, showLaser, fil, laserTitres, cartesEclairees, lumiereChange, rayon, dateLaser, pupitre, salleScene, vuMetre, lettresLudo, friseFaisceau, affiche, boule3d, indexOccasions, eclats, gelPortrait]
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
