import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '../legal.css';

export const metadata: Metadata = {
  title: 'Acceptable Use Policy — Snaarp',
  description:
    'Rules and guidelines for acceptable use of Snaarp products and services. Last updated August 2026.',
};

export default function AcceptableUsePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="legal-page">
        <h1>Acceptable Use Policy</h1>
        <p className="legal-meta">Last updated: 1 August 2026</p>

        <p>
          This Acceptable Use Policy (&quot;AUP&quot;) sets out the rules governing your use of
          Snaarp&apos;s websites, applications, and services (collectively, the &quot;Services&quot;).
          This AUP is part of our <a href="/terms-and-conditions">Terms &amp; Conditions</a> and
          applies to all users.
        </p>

        <h2>1. Permitted Use</h2>
        <p>You may use the Services for lawful business and personal purposes, including:</p>
        <ul>
          <li>Sending and receiving email communications</li>
          <li>Creating, editing, and sharing documents, spreadsheets, and presentations</li>
          <li>Scheduling meetings and managing calendars</li>
          <li>Storing and sharing files via Snaarp Drive</li>
          <li>Collaborating with team members through Snaarp Teams and Meet</li>
          <li>Any other legitimate use consistent with the intended functionality of the Services</li>
        </ul>

        <h2>2. Prohibited Conduct</h2>
        <p>You must not use the Services to:</p>

        <h3>2.1 Illegal Activities</h3>
        <ul>
          <li>Violate any applicable local, national, or international law or regulation</li>
          <li>Facilitate fraud, money laundering, or terrorist financing</li>
          <li>Distribute or store content related to child sexual exploitation</li>
          <li>Engage in illegal discrimination or harassment</li>
        </ul>

        <h3>2.2 Harmful Content</h3>
        <ul>
          <li>Upload, transmit, or store malware, viruses, or other harmful code</li>
          <li>Distribute spam, phishing messages, or deceptive content</li>
          <li>Share content that incites violence, hatred, or self-harm</li>
          <li>Publish defamatory, obscene, or threatening material</li>
        </ul>

        <h3>2.3 Security Violations</h3>
        <ul>
          <li>Attempt to gain unauthorised access to any part of the Services or other systems</li>
          <li>Probe, scan, or test the vulnerability of our systems without authorisation</li>
          <li>Interfere with or disrupt the Services, servers, or networks</li>
          <li>Circumvent any access controls, rate limits, or security measures</li>
          <li>Reverse-engineer, decompile, or disassemble any part of the Services</li>
        </ul>

        <h3>2.4 Abuse of Resources</h3>
        <ul>
          <li>Use the Services for cryptocurrency mining or similar compute-intensive operations</li>
          <li>Store or distribute content solely to exploit storage quotas</li>
          <li>Create multiple accounts to evade restrictions or abuse free tiers</li>
          <li>Use automated systems to scrape, crawl, or extract data at scale without permission</li>
          <li>Resell or redistribute the Services without prior written agreement</li>
        </ul>

        <h3>2.5 Intellectual Property</h3>
        <ul>
          <li>Infringe upon the copyrights, trademarks, or patents of others</li>
          <li>Distribute pirated software, media, or other protected content</li>
          <li>Remove or alter proprietary notices or labels</li>
        </ul>

        <h2>3. Email-Specific Rules</h2>
        <p>When using Snaarp Mail, you additionally agree not to:</p>
        <ul>
          <li>Send unsolicited bulk email (spam)</li>
          <li>Use misleading headers or deceptive subject lines</li>
          <li>Impersonate another person or entity</li>
          <li>Harvest email addresses from our Services</li>
          <li>Send messages that exceed reasonable volume limits (as determined by your plan)</li>
        </ul>

        <h2>4. Storage and Bandwidth</h2>
        <p>
          Your usage must remain within the storage and bandwidth limits of your subscription plan.
          We reserve the right to throttle or suspend accounts that consistently exceed their
          allocated resources.
        </p>

        <h2>5. Reporting Violations</h2>
        <p>
          If you believe someone is violating this AUP, please report it to{' '}
          <a href="mailto:abuse@snaarp.com">abuse@snaarp.com</a>. Include as much detail as possible,
          including URLs, screenshots, or message headers where applicable.
        </p>

        <h2>6. Enforcement</h2>
        <p>We may take any of the following actions if we determine a violation has occurred:</p>
        <ol>
          <li><strong>Warning:</strong> A formal notice requesting you stop the prohibited activity.</li>
          <li><strong>Content removal:</strong> Removal or disabling of offending content.</li>
          <li><strong>Temporary suspension:</strong> Restricting access to your account for a defined period.</li>
          <li><strong>Permanent termination:</strong> Closing your account without refund.</li>
          <li><strong>Legal action:</strong> Referring the matter to law enforcement where appropriate.</li>
        </ol>
        <p>
          The action we take depends on the severity of the violation, whether it is a first or
          repeated offence, and any applicable legal requirements. We aim to provide notice before
          taking action, except where immediate action is necessary to protect the Services or other
          users.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this AUP from time to time. Material changes will be communicated via email
          or in-app notification at least 14 days before taking effect. Continued use of the Services
          after the effective date constitutes acceptance.
        </p>

        <h2>8. Contact Us</h2>
        <p>If you have questions about this policy, contact us:</p>
        <ul>
          <li>Email: <a href="mailto:legal@snaarp.com">legal@snaarp.com</a></li>
          <li>Abuse reports: <a href="mailto:abuse@snaarp.com">abuse@snaarp.com</a></li>
          <li>Post: Snaarp Ltd, London, United Kingdom</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
