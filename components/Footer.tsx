import { RevealSection } from '@/components/reveal/RevealSection';

export function Footer() {
  return (
    <footer className="site-footer">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="footer-grid">
          <div className="footer-brand" data-reveal data-reveal-group="footer" data-reveal-batch="footer-columns">
            <p className="footer-brand-name">Snaarp Inc.</p>
            <p className="footer-brand-desc">20+ business apps. One login. One price. Built for teams who are done juggling subscriptions.</p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link" aria-label="Snaarp on X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" /></svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Snaarp on Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" /></svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Snaarp on Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" /></svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Snaarp on LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 8.5H3.56V21h3.38V8.5zM5.25 3a1.96 1.96 0 1 0 0 3.92A1.96 1.96 0 0 0 5.25 3zM20.45 21h-3.37v-6.4c0-1.53-.03-3.49-2.13-3.49-2.13 0-2.46 1.66-2.46 3.38V21H9.12V8.5h3.24v1.71h.05c.45-.85 1.56-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V21z" /></svg>
              </a>
            </div>
          </div>

          <div className="footer-col" data-reveal data-reveal-group="footer" data-reveal-batch="footer-columns">
            <p className="footer-col-title">Products</p>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Snaarp Mail</a></li>
              <li><a href="#" className="footer-link">CRM</a></li>
              <li><a href="#" className="footer-link">Work Drive</a></li>
              <li><a href="#" className="footer-link">Neo AI</a></li>
              <li><a href="#" className="footer-link">All 20+ apps</a></li>
            </ul>
          </div>

          <div className="footer-col" data-reveal data-reveal-group="footer" data-reveal-batch="footer-columns">
            <p className="footer-col-title">Solutions</p>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">For startups</a></li>
              <li><a href="#" className="footer-link">For agencies</a></li>
              <li><a href="#" className="footer-link">For sales teams</a></li>
              <li><a href="#" className="footer-link">Security</a></li>
            </ul>
          </div>

          <div className="footer-col" data-reveal data-reveal-group="footer" data-reveal-batch="footer-columns">
            <p className="footer-col-title">Company</p>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">About us</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Contact sales</a></li>
            </ul>
          </div>

          <div className="footer-col" data-reveal data-reveal-group="footer" data-reveal-batch="footer-columns">
            <p className="footer-col-title">Legal</p>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Privacy policy</a></li>
              <li><a href="#" className="footer-link">Terms &amp; conditions</a></li>
              <li><a href="#" className="footer-link">Cookie policy</a></li>
              <li><a href="#" className="footer-link">Acceptable use</a></li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />
        <p className="footer-bottom" data-reveal data-reveal-group="footer" data-reveal-delay="450">&copy; 2026 Snaarp. All rights reserved.</p>
      </RevealSection>
    </footer>
  );
}
