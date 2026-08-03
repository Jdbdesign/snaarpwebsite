import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '../legal.css';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Snaarp',
  description:
    'The terms governing your use of Snaarp products and services. Last updated August 2026.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="legal-page">
        <h1>Terms &amp; Conditions</h1>
        <p className="legal-meta">Last updated: 1 August 2026</p>

        <p>
          These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the
          websites, applications, and services (collectively, the &quot;Services&quot;) provided by
          Snaarp Ltd (&quot;Snaarp&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By
          accessing or using our Services, you agree to be bound by these Terms.
        </p>

        <h2>1. Account Registration</h2>
        <ul>
          <li>You must be at least 16 years old to create an account.</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>You agree to provide accurate, current, and complete information during registration.</li>
          <li>You are responsible for all activity that occurs under your account.</li>
          <li>Notify us immediately at <a href="mailto:support@snaarp.com">support@snaarp.com</a> if you suspect unauthorised access.</li>
        </ul>

        <h2>2. Subscriptions and Payments</h2>
        <ul>
          <li>Snaarp offers paid subscription plans billed monthly or annually.</li>
          <li>Prices are displayed in your local currency. All plans start at £2/user/month.</li>
          <li>Payment is due at the start of each billing cycle. Failed payments may result in service suspension.</li>
          <li>You may cancel your subscription at any time. Access continues until the end of your current billing period.</li>
          <li>We reserve the right to adjust pricing with 30 days&apos; prior notice.</li>
        </ul>

        <h2>3. Free Trials</h2>
        <p>
          If we offer a free trial, you will not be charged until the trial period ends. You may
          cancel before the trial expires to avoid being billed. Trial availability and duration are
          at our sole discretion.
        </p>

        <h2>4. Acceptable Use</h2>
        <p>
          You agree to use the Services in accordance with our{' '}
          <a href="/acceptable-use">Acceptable Use Policy</a>. You shall not:
        </p>
        <ul>
          <li>Use the Services for any unlawful or fraudulent purpose</li>
          <li>Interfere with or disrupt the integrity or performance of the Services</li>
          <li>Attempt to gain unauthorised access to any part of the Services</li>
          <li>Upload or transmit malicious code, viruses, or harmful content</li>
          <li>Use the Services to infringe upon the intellectual property rights of others</li>
          <li>Resell, sublicence, or redistribute the Services without prior written consent</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>
          All content, features, and functionality of the Services (including text, graphics, logos,
          software, and design) are owned by Snaarp and protected by intellectual property laws. You
          may not copy, modify, distribute, or create derivative works without our express permission.
        </p>
        <p>
          You retain ownership of the content you create and upload through the Services. By
          uploading content, you grant us a limited licence to store, display, and process it as
          necessary to deliver the Services to you.
        </p>

        <h2>6. Data and Privacy</h2>
        <p>
          Your use of the Services is also governed by our{' '}
          <a href="/privacy-policy">Privacy Policy</a>, which describes how we collect, use, and
          protect your personal data.
        </p>

        <h2>7. Service Availability</h2>
        <ul>
          <li>We aim for 99.9% uptime but do not guarantee uninterrupted availability.</li>
          <li>We may perform scheduled maintenance with reasonable advance notice.</li>
          <li>We are not liable for service interruptions caused by factors outside our control.</li>
        </ul>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Snaarp shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss of profits, revenue,
          data, or business opportunities arising from your use of the Services.
        </p>
        <p>
          Our total aggregate liability for any claims arising from these Terms or the Services shall
          not exceed the amount you paid to us in the 12 months preceding the claim.
        </p>

        <h2>9. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Snaarp and its officers, directors,
          employees, and agents from any claims, liabilities, damages, losses, and expenses
          (including legal fees) arising from your use of the Services or violation of these Terms.
        </p>

        <h2>10. Termination</h2>
        <ul>
          <li>You may close your account at any time by contacting support or through account settings.</li>
          <li>We may suspend or terminate your access if you breach these Terms.</li>
          <li>Upon termination, your right to use the Services ceases immediately.</li>
          <li>We will make your data available for export for 30 days following account closure.</li>
        </ul>

        <h2>11. Changes to These Terms</h2>
        <p>
          We may modify these Terms at any time. Material changes will be communicated via email or
          an in-app notification at least 30 days before taking effect. Continued use after the
          effective date constitutes acceptance of the revised Terms.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms are governed by the laws of England and Wales. Any disputes shall be subject to
          the exclusive jurisdiction of the courts of England and Wales.
        </p>

        <h2>13. Contact Us</h2>
        <p>If you have questions about these Terms, please contact us:</p>
        <ul>
          <li>Email: <a href="mailto:legal@snaarp.com">legal@snaarp.com</a></li>
          <li>Post: Snaarp Ltd, London, United Kingdom</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
