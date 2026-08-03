import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '../legal.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — Snaarp',
  description:
    'How Snaarp collects, uses, stores, and protects your personal data. Last updated August 2026.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="legal-page">
        <h1>Privacy Policy</h1>
        <p className="legal-meta">Last updated: 1 August 2026</p>

        <p>
          Snaarp Ltd (&quot;Snaarp&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to
          protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you use our website, applications, and services
          (collectively, the &quot;Services&quot;).
        </p>

        <h2>1. Information We Collect</h2>

        <h3>1.1 Information You Provide</h3>
        <ul>
          <li>Account registration details (name, email address, password)</li>
          <li>Billing and payment information (processed via our PCI-compliant payment provider)</li>
          <li>Content you create, upload, or share through our Services</li>
          <li>Communications you send to us (support tickets, feedback, enquiries)</li>
          <li>Profile information (display name, avatar, job title)</li>
        </ul>

        <h3>1.2 Information Collected Automatically</h3>
        <ul>
          <li>Device information (browser type, operating system, device identifiers)</li>
          <li>Log data (IP address, access times, pages viewed, referring URL)</li>
          <li>Usage data (features used, actions taken, session duration)</li>
          <li>Cookies and similar tracking technologies (see our <a href="/cookie-policy">Cookie Policy</a>)</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our Services</li>
          <li>Process transactions and send related notices</li>
          <li>Respond to your requests, comments, and questions</li>
          <li>Send administrative information (service updates, security alerts)</li>
          <li>Personalise your experience and deliver relevant content</li>
          <li>Monitor and analyse usage trends to improve performance</li>
          <li>Detect, prevent, and address fraud or technical issues</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. Legal Basis for Processing (UK GDPR)</h2>
        <p>We process your personal data on the following legal bases:</p>
        <ul>
          <li><strong>Contract performance:</strong> to deliver the Services you have subscribed to</li>
          <li><strong>Legitimate interests:</strong> to improve our Services, ensure security, and prevent fraud</li>
          <li><strong>Consent:</strong> where you have opted in to marketing communications</li>
          <li><strong>Legal obligation:</strong> to comply with applicable laws and regulations</li>
        </ul>

        <h2>4. How We Share Your Information</h2>
        <p>We do not sell your personal data. We may share information with:</p>
        <ul>
          <li><strong>Service providers:</strong> hosting, analytics, payment processing, and customer support tools that operate on our behalf</li>
          <li><strong>Legal authorities:</strong> when required by law, court order, or to protect rights and safety</li>
          <li><strong>Business transfers:</strong> in connection with a merger, acquisition, or sale of assets (you will be notified)</li>
          <li><strong>With your consent:</strong> when you explicitly agree to share data with a third party</li>
        </ul>

        <h2>5. Data Retention</h2>
        <p>
          We retain personal data for as long as your account is active or as needed to provide
          Services to you. When you delete your account, we remove or anonymise your data within
          30 days, unless retention is required by law or for legitimate business purposes (e.g.
          fraud prevention, resolving disputes).
        </p>

        <h2>6. Data Security</h2>
        <p>
          We implement industry-standard security measures including encryption in transit (TLS 1.3),
          encryption at rest (AES-256), regular security audits, and access controls. However, no
          method of electronic transmission or storage is 100% secure, and we cannot guarantee
          absolute security.
        </p>

        <h2>7. International Data Transfers</h2>
        <p>
          Your data may be transferred to and processed in countries outside the United Kingdom. Where
          this occurs, we ensure appropriate safeguards are in place, including Standard Contractual
          Clauses or equivalent mechanisms approved by the UK Information Commissioner&apos;s Office.
        </p>

        <h2>8. Your Rights</h2>
        <p>Under applicable data protection laws, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Rectify inaccurate or incomplete data</li>
          <li>Erase your personal data (&quot;right to be forgotten&quot;)</li>
          <li>Restrict or object to processing</li>
          <li>Data portability (receive your data in a structured, machine-readable format)</li>
          <li>Withdraw consent at any time (where processing is based on consent)</li>
          <li>Lodge a complaint with the Information Commissioner&apos;s Office (ICO)</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:privacy@snaarp.com">privacy@snaarp.com</a>.
        </p>

        <h2>9. Children&apos;s Privacy</h2>
        <p>
          Our Services are not directed to individuals under 16. We do not knowingly collect personal
          data from children. If you believe we have collected data from a child, please contact us
          and we will delete it promptly.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of material changes
          by posting the updated policy on this page and updating the &quot;Last updated&quot; date. Your
          continued use of the Services after changes constitutes acceptance of the revised policy.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, contact our Data Protection
          Officer:
        </p>
        <ul>
          <li>Email: <a href="mailto:privacy@snaarp.com">privacy@snaarp.com</a></li>
          <li>Post: Snaarp Ltd, Data Protection Officer, London, United Kingdom</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
