// Main JS for De Glimlachfabriek (enhanced)
const CONFIG_PATH = '/config.json';

async function loadConfig(){
  try {
    const res = await fetch(CONFIG_PATH);
    if (!res.ok) return {};
    return await res.json();
  } catch (e) {
    return {};
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const config = await loadConfig();

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

  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('dgf_theme');
  const applyTheme = (theme) => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      if (themeToggle) themeToggle.setAttribute('aria-pressed', 'true');
    } else {
      root.classList.remove('dark');
      root.removeAttribute('data-theme');
      if (themeToggle) themeToggle.setAttribute('aria-pressed', 'false');
    }
  };

  if(savedTheme){
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      localStorage.setItem('dgf_theme', newTheme);
      applyTheme(newTheme);
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
    { title: 'Hoopvolle start', text: 'Kies vandaag één klein ding dat je wél kunt doen. Die ene stap telt.' , tip: 'Zet een timer van 10 minuten en begin.'},
    { title: 'Verbinding', text: 'Een kort bericht aan een vriend kan iemands dag veranderen.' , tip: 'Stuur één oprecht compliment.'},
    { title: 'Adem', text: 'Adem driemaal diep in; voel de spanning zachtjes wegsmelten.', tip: 'Doe het nu — 3 diepe ademhalingen.'},
    { title: 'Kleine gewoonten', text: 'Kleine gewoonten stapelen zich op tot grote veranderingen.' , tip: 'Kies één gewoonte en begin morgen.'},
    { title: 'Dankbaarheid', text: 'Schrijf één ding op waar je dankbaar voor bent.' , tip: 'Hou het kort — één zin.'},
    { title: 'Leren', text: 'Elke dag een klein nieuw ding leren houdt de geest fris.' , tip: 'Lees 5 minuten over iets dat je interesseert.'},
    { title: 'Rust', text: 'Rust is productief: geef jezelf toestemming om niets te doen.' , tip: 'Neem 5 minuten stilte.'}
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

  window.handleContact = async function(e){
    e.preventDefault();
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!name || !email || !message) {
      alert('Vul alstublieft alle velden in.');
      return false;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    const formspreeId = (config.formspree_id || '').trim();
    const isPlaceholder = !formspreeId || formspreeId === 'YOUR_FORM_ID' || formspreeId === 'YOUR_FORMSPREE_ID';

    if (!isPlaceholder) {
      const endpoint = `https://formspree.io/f/${formspreeId}`;
      try {
        const res = await fetch(endpoint, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
        if (res.ok) {
          alert('Dankjewel! Je bericht is verzonden.');
          document.getElementById('contact-form').reset();
          return false;
        }
        const payload = await res.json();
        console.error(payload);
        alert('Er ging iets mis bij het verzenden. Probeer later nogmaals.');
        return false;
      } catch (err) {
        console.error(err);
        alert('Er ging iets mis bij het verzenden. Probeer later nogmaals.');
        return false;
      }
    }

    const subject = encodeURIComponent('Contact via De Glimlachfabriek - ' + name);
    const body = encodeURIComponent(message + "\n\n---\n" + name + "\n" + email);
    window.location.href = `mailto:${config.contact_email || 'info@deglimlachfabriek.nl'}?subject=${subject}&body=${body}`;
    return false;
  };

  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);
});
