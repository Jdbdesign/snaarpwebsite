import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '../legal.css';

export const metadata: Metadata = {
  title: 'Cookie Policy — Snaarp',
  description:
    'How Snaarp uses cookies and similar technologies. Last updated August 2026.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="legal-page">
        <h1>Cookie Policy</h1>
        <p className="legal-meta">Last updated: 1 August 2026</p>

        <p>
          This Cookie Policy explains how Snaarp Ltd (&quot;Snaarp&quot;, &quot;we&quot;, &quot;us&quot;,
          or &quot;our&quot;) uses cookies and similar tracking technologies when you visit our
          websites and use our Services.
        </p>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device by a website. They are widely used to
          make websites work efficiently, provide information to site owners, and improve user
          experience. Cookies may be &quot;session&quot; cookies (deleted when you close your browser)
          or &quot;persistent&quot; cookies (remain until they expire or you delete them).
        </p>

        <h2>2. How We Use Cookies</h2>
        <p>We use cookies for the following purposes:</p>

        <h3>2.1 Strictly Necessary Cookies</h3>
        <p>
          These cookies are essential for the Services to function. They enable core features such as
          authentication, security, and session management. You cannot opt out of these cookies.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>session_id</td>
              <td>Maintains your authenticated session</td>
              <td>Session</td>
            </tr>
            <tr>
              <td>csrf_token</td>
              <td>Protects against cross-site request forgery</td>
              <td>Session</td>
            </tr>
            <tr>
              <td>cookie_consent</td>
              <td>Records your cookie preferences</td>
              <td>1 year</td>
            </tr>
          </tbody>
        </table>

        <h3>2.2 Performance &amp; Analytics Cookies</h3>
        <p>
          These cookies help us understand how visitors interact with our website by collecting
          anonymous usage data. This information helps us improve our Services.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_analytics_id</td>
              <td>Identifies unique visitors for aggregate analytics</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td>_analytics_session</td>
              <td>Groups page views into a single session</td>
              <td>30 minutes</td>
            </tr>
          </tbody>
        </table>

        <h3>2.3 Functional Cookies</h3>
        <p>
          These cookies enable enhanced functionality and personalisation, such as remembering your
          preferences, language settings, and display options.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>locale</td>
              <td>Remembers your language/region preference</td>
              <td>1 year</td>
            </tr>
            <tr>
              <td>theme</td>
              <td>Stores your light/dark mode preference</td>
              <td>1 year</td>
            </tr>
            <tr>
              <td>currency</td>
              <td>Remembers your selected currency</td>
              <td>1 year</td>
            </tr>
          </tbody>
        </table>

        <h3>2.4 Marketing Cookies</h3>
        <p>
          These cookies are used to deliver relevant advertisements and measure campaign effectiveness.
          We only set marketing cookies with your explicit consent.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_ad_id</td>
              <td>Tracks ad interactions for attribution</td>
              <td>90 days</td>
            </tr>
            <tr>
              <td>_campaign_ref</td>
              <td>Records the campaign that referred you</td>
              <td>30 days</td>
            </tr>
          </tbody>
        </table>

        <h2>3. Third-Party Cookies</h2>
        <p>
          Some cookies are placed by third-party services that appear on our pages. We do not control
          these cookies. Third-party providers include:
        </p>
        <ul>
          <li>Analytics providers (for aggregated usage data)</li>
          <li>Payment processors (for secure transactions)</li>
          <li>Customer support tools (for live chat functionality)</li>
        </ul>

        <h2>4. Managing Your Cookie Preferences</h2>
        <p>You can control cookies in several ways:</p>
        <ul>
          <li><strong>Cookie banner:</strong> When you first visit our site, you can accept or reject non-essential cookies via our consent banner.</li>
          <li><strong>Browser settings:</strong> Most browsers allow you to block or delete cookies through their settings menu.</li>
          <li><strong>Opt-out links:</strong> Some third-party analytics services offer opt-out mechanisms on their own websites.</li>
        </ul>
        <p>
          Please note that blocking certain cookies may affect the functionality of our Services.
        </p>

        <h2>5. Similar Technologies</h2>
        <p>In addition to cookies, we may use:</p>
        <ul>
          <li><strong>Local storage:</strong> to store preferences and application state in your browser</li>
          <li><strong>Pixel tags:</strong> small transparent images used to track email open rates</li>
          <li><strong>Fingerprinting:</strong> we do <em>not</em> use browser fingerprinting techniques</li>
        </ul>

        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Changes will be posted on this page
          with an updated &quot;Last updated&quot; date. Material changes will be communicated via our
          cookie consent banner.
        </p>

        <h2>7. Contact Us</h2>
        <p>If you have questions about our use of cookies, contact us:</p>
        <ul>
          <li>Email: <a href="mailto:privacy@snaarp.com">privacy@snaarp.com</a></li>
          <li>Post: Snaarp Ltd, London, United Kingdom</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
