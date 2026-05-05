// shared.js — injects nav + footer, handles active states, fade-up observer

const NAV_HTML = `
<div class="topbar">
  <div class="container">
    <span>nursing and staffing solutions &nbsp;·&nbsp; <a href="tel:5163874246">(516) 387-4246</a> &nbsp;·&nbsp; <a href="mailto:services@allprony.com">services@allprony.com</a></span>
    <div class="topbar-socials">
      <a href="https://www.linkedin.com/company/allprony" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://www.facebook.com/allprony/" target="_blank" rel="noopener">Facebook</a>
      <a href="https://www.instagram.com/nyctoprntrainer/" target="_blank" rel="noopener">Instagram</a>
    </div>
  </div>
</div>
<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="images/logo.png" alt="AllPro NYC logo" onerror="this.style.display='none'">
      <span class="nav-logo-text">AllPro <span>NYC</span></span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="consulting.html">Consulting</a></li>
      <li><a href="certifications.html">Certifications</a></li>
      <li><a href="nursing.html">Nursing</a></li>
      <li><a href="elite.html">Private Client Services</a></li>
    </ul>
    <a href="contact.html" class="nav-cta">Contact Us</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <div class="footer-logo">AllPro <span>NYC</span></div>
        <p class="footer-tagline">Healthcare consulting, staffing, and training solutions. Proudly serving New York and New Jersey.</p>
        <div class="footer-socials">
          <a href="https://www.linkedin.com/company/allprony" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
          <a href="https://www.facebook.com/allprony/" target="_blank" rel="noopener" aria-label="Facebook">f</a>
          <a href="https://www.instagram.com/nyctoprntrainer/" target="_blank" rel="noopener" aria-label="Instagram">ig</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Pages</h4>
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="consulting.html">Consulting</a>
        <a href="certifications.html">Certifications</a>
        <a href="nursing.html">Nursing</a>
        <a href="elite.html">Private Client Services</a>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <a href="consulting.html">Business Operations</a>
        <a href="certifications.html">CPR &amp; BLS Certification</a>
        <a href="certifications.html">Dementia Care</a>
        <a href="nursing.html">Home Care Nursing</a>
        <a href="elite.html">AllPro Elite</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <p><a href="tel:5163874246">(516) 387-4246</a></p>
        <p>Fax: (516) 464-6254</p>
        <p><a href="mailto:services@allprony.com">services@allprony.com</a></p>
        <p><a href="mailto:info@allprony.com">info@allprony.com</a></p>
        <p style="margin-top:12px; font-size:12px;">Serving NJ &amp; NY metro area</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 All Pro NYC LLC. All rights reserved.</p>
      <a href="privacy.html">Privacy Policy</a>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navContainer = document.getElementById('site-nav');
  if (navContainer) navContainer.innerHTML = NAV_HTML;

  // Inject footer
  const footerContainer = document.getElementById('site-footer');
  if (footerContainer) footerContainer.innerHTML = FOOTER_HTML;

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Fade-up observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});
