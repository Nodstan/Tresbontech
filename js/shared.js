// ═══════════════════════════════════════════════════
// TRESBONTECH ACADEMY — SHARED JAVASCRIPT
// ═══════════════════════════════════════════════════

// TT Logo Mark SVG (brand accurate)
const TT_LOGO_SVG = `<svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="4" width="8" height="2.5" rx="0.8" fill="white"/>
  <rect x="5.25" y="4" width="2.5" height="8" rx="0.8" fill="white"/>
  <rect x="12" y="4" width="8" height="2.5" rx="0.8" fill="white"/>
  <rect x="15.25" y="4" width="2.5" height="8" rx="0.8" fill="white"/>
  <rect x="5.25" y="14" width="4" height="2.5" rx="0.8" fill="white"/>
  <rect x="4" y="14.5" width="2.5" height="4" rx="0.8" fill="white"/>
  <rect x="15.25" y="14" width="4" height="2.5" rx="0.8" fill="white"/>
  <rect x="15.25" y="14.5" width="2.5" height="4" rx="0.8" fill="white"/>
</svg>`;

// Determine current page for nav active state
function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes('tracks')) return 'tracks';
  if (path.includes('roadmap')) return 'roadmap';
  if (path.includes('projects')) return 'projects';
  if (path.includes('tools')) return 'tools';
  if (path.includes('practical')) return 'practical';
  if (path.includes('myths')) return 'myths';
  if (path.includes('quiz')) return 'quiz';
  if (path.includes('checklist')) return 'checklist';
  return 'home';
}

// ─── INJECT NAVBAR ───
function injectNavbar() {
  const currentPage = getCurrentPage();
  const isHome = currentPage === 'home';
  const prefix = isHome ? '' : '../';

  const links = [
    { href: prefix + 'pages/tracks.html', label: 'Two Tracks', page: 'tracks' },
    { href: prefix + 'pages/roadmap.html', label: 'Roadmap', page: 'roadmap' },
    { href: prefix + 'pages/projects.html', label: 'Projects', page: 'projects' },
    { href: prefix + 'pages/tools.html', label: 'Tools', page: 'tools' },
    { href: prefix + 'pages/practical.html', label: 'Practical Skills', page: 'practical' },
    { href: prefix + 'pages/myths.html', label: 'Myths & Fixes', page: 'myths' },
    { href: prefix + 'pages/quiz.html', label: 'Quiz', page: 'quiz' },
    { href: prefix + 'pages/checklist.html', label: 'Checklist', page: 'checklist' },
  ];

  const homeHref = isHome ? 'index.html' : '../index.html';

  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  navbar.innerHTML = `
    <div class="navbar-inner">
      <a href="${homeHref}" class="nav-brand">
        <div class="tt-logo-mark">${TT_LOGO_SVG}</div>
        <div>
          <div class="tt-wordmark">Tresbontech</div>
          <span class="tt-since">Since 2024</span>
        </div>
      </a>
      <nav class="nav-links">
        ${links.map(l => `
          <a href="${l.href}" class="nav-link${currentPage === l.page ? ' active' : ''}">${l.label}</a>
        `).join('')}
      </nav>
      <a href="${prefix}pages/quiz.html" class="nav-cta">Take the Quiz →</a>
      <button class="nav-hamburger" onclick="toggleMobileMenu()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  // Mobile menu
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.innerHTML = `
      <button class="mobile-close" onclick="toggleMobileMenu()">✕</button>
      <nav class="mobile-menu-links">
        <a href="${homeHref}" class="mobile-menu-link">Home</a>
        ${links.map(l => `<a href="${l.href}" class="mobile-menu-link">${l.label}</a>`).join('')}
      </nav>
      <div style="margin-top:auto;padding-top:40px">
        <a href="${prefix}pages/quiz.html" class="btn btn-primary w-full" style="justify-content:center">Take the Quiz →</a>
      </div>
    `;
  }
}

function toggleMobileMenu() {
  const mm = document.getElementById('mobileMenu');
  if (mm) mm.classList.toggle('open');
}

// ─── INJECT FOOTER ───
function injectFooter() {
  const isHome = getCurrentPage() === 'home';
  const prefix = isHome ? '' : '../';

  const footer = document.getElementById('siteFooter');
  if (!footer) return;

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand-col">
          <a href="${isHome ? 'index.html' : '../index.html'}" style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
            <div class="tt-logo-mark">${TT_LOGO_SVG}</div>
            <div>
              <div class="tt-wordmark" style="color:white">Tresbontech</div>
              <span class="tt-since">Academy Staff Portal</span>
            </div>
          </a>
          <p class="footer-brand-desc">Equipping Tresbontech Academy tutors with the research, tools, and frameworks to deliver world-class AI education to students aged 10–17.</p>
          <div style="display:flex;gap:10px">
            <a href="#" style="width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.5);font-size:0.85rem;transition:all 0.2s" onmouseover="this.style.background='#1E79F7'" onmouseout="this.style.background='rgba(255,255,255,0.08)'">f</a>
            <a href="#" style="width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.5);font-size:0.85rem;transition:all 0.2s" onmouseover="this.style.background='#1E79F7'" onmouseout="this.style.background='rgba(255,255,255,0.08)'">in</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Guide Sections</div>
          <div class="footer-links">
            <a href="${prefix}pages/tracks.html" class="footer-link">Two Tracks Framework</a>
            <a href="${prefix}pages/roadmap.html" class="footer-link">12-Week Roadmap</a>
            <a href="${prefix}pages/projects.html" class="footer-link">Practical Projects</a>
            <a href="${prefix}pages/tools.html" class="footer-link">Tools & Platforms</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Resources</div>
          <div class="footer-links">
            <a href="${prefix}pages/practical.html" class="footer-link">Practical Framework</a>
            <a href="${prefix}pages/myths.html" class="footer-link">Myths & Fixes</a>
            <a href="${prefix}pages/quiz.html" class="footer-link">Knowledge Quiz</a>
            <a href="${prefix}pages/checklist.html" class="footer-link">Session Checklist</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Tresbontech</div>
          <div class="footer-links">
            <a href="https://www.tresbontech.com" target="_blank" class="footer-link">Main Website</a>
            <a href="#" class="footer-link">Staff Portal</a>
            <a href="#" class="footer-link">Contact Academy</a>
          </div>
          <div style="margin-top:20px;padding:14px;background:rgba(30,121,247,0.15);border:1px solid rgba(30,121,247,0.25);border-radius:10px">
            <div style="font-family:'DM Mono',monospace;font-size:0.6rem;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:4px">Version</div>
            <div style="font-size:0.82rem;color:rgba(255,255,255,0.7);font-weight:500">AI Guide v2.0 · 2025</div>
          </div>
        </div>
      </div>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,0.08);margin-top:0">
      <div class="container footer-bottom">
        <div>© 2024 Tresbontech Academy. All rights reserved. Created by Lemonayd Studios.</div>
        <div class="footer-bottom-links">
          <a href="#" class="footer-link" style="font-size:0.75rem">Privacy Policy</a>
          <a href="#" class="footer-link" style="font-size:0.75rem">Terms of Use</a>
          <a href="https://www.tresbontech.com" class="footer-link" style="font-size:0.75rem">www.tresbontech.com</a>
        </div>
      </div>
    </div>
  `;
}

// ─── SCROLL ANIMATIONS ───
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-animate]').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

// ─── ACCORDION HELPER ───
function initAccordions(selector, openClass = 'open') {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('click', function(e) {
      if (e.target.closest('button, a')) return;
      this.classList.toggle(openClass);
    });
  });
}

// ─── NUMBER COUNTER ANIMATION ───
function animateCounter(el, target, duration = 1500) {
  const start = performance.now();
  const startVal = 0;
  const update = (time) => {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(startVal + (target - startVal) * eased);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  injectNavbar();
  injectFooter();
  initScrollAnimations();

  // Animate stat counters when visible
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        if (!isNaN(target)) animateCounter(el, target);
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => statObserver.observe(el));
});
