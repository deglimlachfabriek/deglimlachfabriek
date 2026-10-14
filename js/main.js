document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  for (let i = 1; i <= 7; i++) {
    const el = document.getElementById('year' + (i === 1 ? '' : i));
    if (el) el.textContent = year;
  }
  const el0 = document.getElementById('year');
  if (el0) el0.textContent = year;

  const navToggle = document.getElementById('nav-toggle');
  if (navToggle) {
    const mainNav = document.getElementById('main-nav');
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      if (mainNav) mainNav.style.display = expanded ? 'flex' : 'block';
    });
  }

  const navToggle2 = document.getElementById('nav-toggle-2');
  if (navToggle2) {
    const mainNav2 = document.getElementById('main-nav-2');
    navToggle2.addEventListener('click', () => {
      const expanded = navToggle2.getAttribute('aria-expanded') === 'true';
      navToggle2.setAttribute('aria-expanded', String(!expanded));
      if (mainNav2) mainNav2.style.display = expanded ? 'flex' : 'block';
    });
  }

  const cookieBanner = document.getElementById('cookie-banner');
  const accepted = localStorage.getItem('dgf_cookies_accepted');
  if (!accepted && cookieBanner) {
    cookieBanner.hidden = false;
  }

  const acceptBtn = document.getElementById('accept-cookies');
  const declineBtn = document.getElementById('decline-cookies');
  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('dgf_cookies_accepted','yes');
      if (cookieBanner) cookieBanner.hidden = true;
    });
  }
  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      localStorage.setItem('dgf_cookies_accepted','no');
      if (cookieBanner) cookieBanner.hidden = true;
    });
  }

  const dailyEl = document.getElementById('daily');
  const todayQuote = document.getElementById('today-quote');
  const entries = [
    { title: 'Hoopvolle start', text: 'Kies vandaag één klein ding dat je wél kunt doen. Die ene stap telt.', tip: 'Zet een timer van 10 minuten en begin.'},
    { title: 'Verbinding', text: 'Een kort bericht aan een vriend kan iemands dag veranderen.', tip: 'Stuur één oprecht compliment.'},
    { title: 'Adem', text: 'Adem driemaal diep in; voel de spanning zachtjes wegsmelten.', tip: 'Doe het nu — 3 diepe ademhalingen.'},
    { title: 'Kleine gewoonten', text: 'Kleine gewoonten stapelen zich op tot grote veranderingen.', tip: 'Kies één gewoonte en begin morgen.'},
    { title: 'Dankbaarheid', text: 'Schrijf één ding op waar je dankbaar voor bent.', tip: 'Hou het kort — één zin.'},
    { title: 'Leren', text: 'Elke dag een klein nieuw ding leren houdt de geest fris.', tip: 'Lees 5 minuten over iets dat je interesseert.'},
    { title: 'Rust', text: 'Rust is productief: geef jezelf toestemming om niets te doen.', tip: 'Neem 5 minuten stilte.'}
  ];

  const dayIndex = (new Date()).getDate() % entries.length;
  const entry = entries[dayIndex];
  if (dailyEl) {
    const html = `
      <article class="card">
        <h3>${entry.title}</h3>
        <p>${entry.text}</p>
        <p class="muted"><strong>Tip:</strong> ${entry.tip}</p>
      </article>
    `;
    dailyEl.innerHTML = html;
  }
  if (todayQuote) {
    todayQuote.textContent = entry.text;
  }

  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);
});
