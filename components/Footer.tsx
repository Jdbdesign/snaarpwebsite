import { RevealSection } from '@/components/reveal/RevealSection';
import { UsersRound, ShieldCheck, BookOpen, Calculator, Kanban, GraduationCap, BrainCircuit } from 'lucide-react';

const FOOTER_PRODUCTS = [
  { icon: '/assets/icons/envelope.jpg', name: 'Mail', href: '/products/mail' },
  { icon: '/assets/icons/apps-kalender.jpg', name: 'Kalender', href: '/products/kalender' },
  { icon: '/assets/icons/search.jpg', name: 'Contacts', href: '/products/contacts' },
  { icon: '/assets/icons/apps-meet.jpg', name: 'Meet', href: '/products/meet' },
  { icon: '/assets/icons/chat-bubbles.jpg', name: 'Teams', href: '/products/teams' },
  { icon: '/assets/icons/ai-sparkle.jpg', name: 'AI Compose', href: '/products/ai-compose' },
  { icon: '/assets/icons/logos/business-card.svg', name: 'Business Card', href: '/products/business-card' },
  { icon: '/assets/icons/cube.jpg', name: 'Work Drive', href: '/products/work-drive' },
  { icon: '/assets/icons/apps-document.png', name: 'Document', href: '/products/docs' },
  { icon: '/assets/icons/apps-sheet.jpg', name: 'Sheet', href: '/products/sheets' },
  { icon: '/assets/icons/p-icon.jpg', name: 'Presentation', href: '/products/presentation' },
  { icon: '/assets/icons/logos/pdf-reader.svg', name: 'PDF Reader', href: '/products/pdf-reader' },
  { icon: '/assets/icons/logos/notepad.svg', name: 'Notepad', href: '/products/notepad' },
  { lucide: UsersRound, name: 'CRM', href: '/products/crm' },
  { icon: '/assets/icons/logos/zeus.svg', name: 'Zeus Contacts', href: '#' },
  { icon: '/assets/icons/apps-sendrit.jpg', name: 'Sendrit', href: '#' },
  { lucide: ShieldCheck, name: 'VerifyRit', href: '#' },
  { icon: '/assets/icons/apps-lock.jpg', name: 'Lock', href: '/products/lock' },
  { icon: '/assets/icons/logos/esignature.svg', name: 'eSignature', href: '/products/esignature' },
  { icon: '/assets/icons/logos/doc-sign.svg', name: 'Doc Sign', href: '#' },
  { icon: '/assets/icons/logos/id-card.svg', name: 'ID Card', href: '#' },
  { lucide: BookOpen, name: 'Books', href: '#' },
  { lucide: Calculator, name: 'Accounting', href: '#' },
  { lucide: Kanban, name: 'Project Management', href: '#' },
  { lucide: GraduationCap, name: 'Elearn', href: '#' },
  { lucide: BrainCircuit, name: 'Neo AI', href: '#' },
];

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
              <li><a href="/products/mail" className="footer-link">Mail</a></li>
              <li><a href="/products/kalender" className="footer-link">Kalender</a></li>
              <li><a href="/products/contacts" className="footer-link">Contacts</a></li>
              <li><a href="/products/meet" className="footer-link">Meet</a></li>
              <li><a href="/products/teams" className="footer-link">Teams</a></li>
              <li><a href="/products/ai-compose" className="footer-link">AI Compose</a></li>
              <li><a href="/products/business-card" className="footer-link">Business Card</a></li>
              <li><a href="/products/work-drive" className="footer-link">Work Drive</a></li>
              <li><a href="/products/docs" className="footer-link">Document</a></li>
              <li><a href="/products/sheets" className="footer-link">Sheet</a></li>
              <li><a href="/products/presentation" className="footer-link">Presentation</a></li>
              <li><a href="/products/pdf-reader" className="footer-link">PDF Reader</a></li>
              <li><a href="/products/notepad" className="footer-link">Notepad</a></li>
              <li><a href="/products/crm" className="footer-link">CRM</a></li>
              <li><a href="/products/lock" className="footer-link">Lock</a></li>
              <li><a href="/products/esignature" className="footer-link">eSignature</a></li>
            </ul>
          </div>

          <div className="footer-col" data-reveal data-reveal-group="footer" data-reveal-batch="footer-columns">
            <p className="footer-col-title">Solutions</p>
            <ul className="footer-links">
              <li><a href="/solutions/customer-onboarding" className="footer-link">Customer Onboarding</a></li>
              <li><a href="/solutions/document-contract-approval" className="footer-link">Document &amp; Contract Approval</a></li>
              <li><a href="/solutions/financial-operations" className="footer-link">Financial Operations</a></li>
              <li><a href="/solutions/remote-hybrid-collaboration" className="footer-link">Remote &amp; Hybrid Collaboration</a></li>
              <li><a href="/solutions/sales-pipeline-outreach" className="footer-link">Sales Pipeline &amp; Outreach</a></li>
              <li><a href="/solutions/team-onboarding-training" className="footer-link">Team Onboarding &amp; Training</a></li>
              <li><a href="/solutions/professional-services" className="footer-link">Professional Services</a></li>
              <li><a href="/solutions/financial-services" className="footer-link">Financial Services</a></li>
              <li><a href="/solutions/healthcare" className="footer-link">Healthcare</a></li>
              <li><a href="/solutions/real-estate" className="footer-link">Real Estate</a></li>
              <li><a href="/solutions/nonprofits" className="footer-link">Nonprofits</a></li>
              <li><a href="/solutions/retail-ecommerce" className="footer-link">Retail &amp; Ecommerce</a></li>
              <li><a href="/solutions/gdpr-data-privacy" className="footer-link">GDPR &amp; Data Privacy</a></li>
              <li><a href="/solutions/soc2-aligned-security" className="footer-link">SOC 2-Aligned Security</a></li>
              <li><a href="/solutions/zero-trust-access-control" className="footer-link">Zero Trust Access Control</a></li>
              <li><a href="/solutions/industry-regulations" className="footer-link">Industry Regulations</a></li>
            </ul>
          </div>

          <div className="footer-col" data-reveal data-reveal-group="footer" data-reveal-batch="footer-columns">
            <p className="footer-col-title">Company</p>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">About us</a></li>
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
        <div className="footer-product-icons" data-reveal data-reveal-group="footer" data-reveal-delay="500">
          {FOOTER_PRODUCTS.map((product) => (
            <a key={product.name} href={product.href} className="footer-product-icon" title={product.name}>
              {product.icon ? (
                <img src={product.icon} alt={product.name} />
              ) : (
                product.lucide && <product.lucide size={28} />
              )}
            </a>
          ))}
        </div>
      </RevealSection>
    </footer>
  );
}
