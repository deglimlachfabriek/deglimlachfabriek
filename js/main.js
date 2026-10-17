/* De Glimlachfabriek - premium stylesheet with dark mode, blog and testimonial styles */
:root {
  --groen: #2E8B57;
  --donkergroen: #1F6A41;
  --goud: #FFD54F;
  --wit: #FFFFFF;
  --achtergrond: #f4f8f5;
  --lichtgoud: #fff7d6;
  --text: #183327;
  --muted: #5d6f66;
  --shadow: 0 18px 45px rgba(23, 64, 43, 0.12);
  --radius: 22px;
  --max-width: 1180px;
}

:root.dark, :root[data-theme="dark"] {
  --achtergrond: #07120f;
  --text: #e6f6ec;
  --muted: #a9c6b6;
  --goud: #b88f16;
  --wit: #07120f;
  --shadow: 0 18px 45px rgba(0,0,0,0.6);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
  background: linear-gradient(180deg, var(--achtergrond) 0%, #eaf3ec 100%);
  color: var(--text);
  line-height: 1.6;
  transition: background 0.3s ease, color 0.3s ease;
}

a { color: inherit; }
img { max-width: 100%; display: block; }

.container {
  width: min(92%, var(--max-width));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(255,255,255,0.86);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(31,106,65,0.12);
}

:root.dark .site-header, :root[data-theme="dark"] .site-header {
  background: rgba(5,10,8,0.6);
  border-bottom-color: rgba(255,255,255,0.04);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 84px;
  gap: 1rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  text-decoration: none;
}

.brand-text h1 {
  margin: 0;
  font-size: 1.15rem;
  color: var(--donkergroen);
  letter-spacing: 0.02em;
}

.slogan {
  margin: 0.14rem 0 0;
  font-size: 0.72rem;
  color: var(--muted);
}

.logo {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  box-shadow: 0 8px 18px rgba(46,139,87,0.18);
}

.main-nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.main-nav a {
  text-decoration: none;
  color: var(--donkergroen);
  font-weight: 600;
  padding: 0.5rem 0.7rem;
  border-radius: 999px;
  transition: background 0.2s ease;
}

.main-nav a:hover,
.main-nav a[aria-current="page"] {
  background: rgba(46,139,87,0.08);
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.nav-toggle {
  display: none;
  background: var(--wit);
  border: 1px solid rgba(31,106,65,0.35);
  border-radius: 12px;
  color: var(--donkergroen);
  padding: 0.6rem 0.8rem;
  font-weight: 700;
  cursor: pointer;
}

.hero {
  position: relative;
  padding: 4.4rem 0 3rem;
  background:
    radial-gradient(circle at top left, rgba(255,213,79,0.26), transparent 30%),
    linear-gradient(135deg, rgba(46,139,87,0.12), rgba(255,255,255,0.9) 40%);
}

:root.dark .hero, :root[data-theme="dark"] .hero {
  background: linear-gradient(135deg, rgba(0,0,0,0.35), rgba(2,20,18,0.45));
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.35fr 0.85fr;
  gap: 2rem;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  background: rgba(255,213,79,0.25);
  color: var(--donkergroen);
  font-weight: 700;
  letter-spacing: 0.12em;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  font-size: 0.72rem;
  text-transform: uppercase;
}

.hero-copy h2 {
  margin: 1rem 0 0.7rem;
  font-size: clamp(2.3rem, 5vw, 4.2rem);
  line-height: 1.02;
  color: var(--donkergroen);
  letter-spacing: -0.04em;
}

.lead {
  font-size: 1.07rem;
  color: var(--muted);
  max-width: 680px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 1.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: 0;
  border-radius: 999px;
  padding: 0.9rem 1.4rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--groen), var(--donkergroen));
  color: var(--wit);
  box-shadow: 0 12px 28px rgba(31,106,65,0.25);
}

.btn-secondary {
  background: var(--wit);
  color: var(--donkergroen);
  border: 1px solid rgba(31,106,65,0.2);
}

.hero-card {
  background: rgba(255,255,255,0.9);
  border: 1px solid rgba(31,106,65,0.08);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 1.5rem;
}

:root.dark .hero-card, :root[data-theme="dark"] .hero-card {
  background: rgba(8,16,14,0.4);
  border-color: rgba(255,255,255,0.03);
}

.mini-pill {
  display: inline-block;
  background: rgba(46,139,87,0.08);
  color: var(--donkergroen);
  font-size: 0.7rem;
  border-radius: 999px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.35rem 0.7rem;
  letter-spacing: 0.08em;
}

.hero-card blockquote {
  margin: 1rem 0 1.3rem;
  font-size: clamp(1.35rem, 2vw, 2rem);
  line-height: 1.3;
  color: var(--donkergroen);
  font-weight: 700;
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.hero-metrics div {
  background: var(--lichtgoud);
  border-radius: 16px;
  padding: 1rem;
}

.trust-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.trust-item {
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(31,106,65,0.08);
  border-radius: 16px;
  padding: 1rem 1.1rem;
  text-align: center;
  color: var(--donkergroen);
  font-weight: 700;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.3rem;
  padding: 3rem 0 1.5rem;
}

.card {
  background: rgba(255,255,255,0.96);
  border: 1px solid rgba(31,106,65,0.05);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

:root.dark .card, :root[data-theme="dark"] .card {
  background: rgba(6,14,12,0.4);
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.icon-box {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(46,139,87,0.12), rgba(255,213,79,0.25));
  color: var(--donkergroen);
  font-size: 1.5rem;
}

.feature-card h3 {
  margin: 0;
  color: var(--donkergroen);
  font-size: 1.35rem;
}

.testimonial-section {
  padding: 2rem 0 0.5rem;
}

.section-header {
  margin-bottom: 1rem;
}

.section-header h3 {
  margin: 0.6rem 0 0;
  color: var(--donkergroen);
  font-size: clamp(1.8rem, 2.5vw, 2.5rem);
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
}

.testimonial-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
}

.testimonial-card p {
  color: var(--text);
  font-size: 1.03rem;
  line-height: 1.7;
}

.testimonial-card strong {
  color: var(--donkergroen);
  margin-top: 0.8rem;
}

.more {
  display: inline-block;
  margin-top: auto;
  text-decoration: none;
  font-weight: 700;
  color: var(--donkergroen);
}

.spotlight {
  padding: 2.5rem 0 0.5rem;
}

.spotlight-text {
  background: linear-gradient(135deg, rgba(31,106,65,0.96), rgba(46,139,87,0.95));
  border-radius: 30px;
  color: var(--wit);
  padding: 2rem 2.2rem;
  box-shadow: var(--shadow);
}

.section-tag {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  background: rgba(255,255,255,0.12);
  border-radius: 999px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.spotlight-text h3 {
  margin: 1rem 0 0.7rem;
  font-size: clamp(1.8rem, 3vw, 2.7rem);
  line-height: 1.12;
}

.spotlight-text p {
  margin: 0;
  max-width: 800px;
  color: rgba(255,255,255,0.82);
}

.quote-panel {
  padding: 2rem 0 3rem;
}

.quote-box {
  background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,247,214,0.9));
  border: 1px solid rgba(31,106,65,0.08);
  border-radius: 28px;
  padding: 2rem;
  box-shadow: var(--shadow);
}

:root.dark .quote-box, :root[data-theme="dark"] .quote-box {
  background: linear-gradient(180deg, rgba(4,12,10,0.6), rgba(8,20,18,0.5));
}

.quote-box h3 {
  margin-top: 0;
  color: var(--donkergroen);
  font-size: 1.9rem;
}

.quote-box blockquote {
  margin: 0;
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  line-height: 1.4;
  color: var(--text);
  font-weight: 600;
}

.muted {
  color: var(--muted);
}

.site-footer {
  background: var(--donkergroen);
  color: var(--wit);
  padding: 2rem 0 2.2rem;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  text-align: center;
}

.footer-nav {
  color: rgba(255,255,255,0.9);
  font-weight: 600;
}

.footer-nav a,
.small a {
  color: var(--wit);
  text-decoration: none;
}

.small {
  margin: 0;
  opacity: 0.9;
}

.cookie-banner {
  position: fixed;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  z-index: 40;
  background: rgba(255,255,255,0.97);
  border: 1px solid rgba(31,106,65,0.1);
  border-radius: 18px;
  padding: 1rem 1.1rem;
  box-shadow: 0 18px 45px rgba(0,0,0,0.16);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

:root.dark .cookie-banner, :root[data-theme="dark"] .cookie-banner {
  background: rgba(8,12,10,0.6);
  border-color: rgba(255,255,255,0.03);
}

.cookie-banner p {
  margin: 0;
  color: var(--text);
}

.cookie-banner a {
  color: var(--donkergroen);
}

.cookie-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.page-shell {
  padding: 3rem 0 4rem;
}

.page-header {
  margin-bottom: 1.5rem;
}

.page-header h2 {
  margin: 0.75rem 0 0.5rem;
  font-size: clamp(2rem, 3vw, 3rem);
  color: var(--donkergroen);
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 1rem;
}

.support-box {
  margin: 2rem 0 0.5rem;
}

.support-box h3 {
  margin: 0.6rem 0 0.4rem;
  font-size: clamp(1.7rem, 2.5vw, 2.4rem);
  color: var(--donkergroen);
}

.legal-card {
  padding: 1.7rem 1.5rem;
}

.legal-card h3 {
  color: var(--donkergroen);
  margin-top: 1.5rem;
}

.no-top {
  margin-top: 0;
}

@media (max-width: 860px) {
  .hero-inner,
  .features,
  .trust-row,
  .testimonial-grid,
  .support-grid {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
    width: 100%;
  }

  .main-nav ul {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0 0.5rem;
  }

  .nav-toggle {
    display: inline-block;
  }

  .header-inner {
    flex-wrap: wrap;
    padding: 0.8rem 0;
  }

  .cookie-banner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 520px) {
  .hero {
    padding-top: 3rem;
  }

  .site-header {
    position: static;
  }

  .brand-text h1 {
    font-size: 0.98rem;
  }

  .slogan {
    display: none;
  }

  .hero-copy h2 {
    font-size: 2.5rem;
  }

  .btn {
    width: 100%;
  }

  .hero-actions {
    flex-direction: column;
  }
}

