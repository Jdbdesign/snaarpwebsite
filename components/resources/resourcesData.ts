import { BlogArticle, ProductDemo, WebinarSession } from './types';

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'stack-consolidation-math',
    slug: 'why-growing-teams-are-ditching-twelve-saas-invoices',
    title: 'Why Growing Teams Are Ditching Twelve SaaS Invoices for One Unified Subscription',
    excerpt:
      'Per-seat software sprawl silently taxes fast-moving companies twice: once on the corporate card, and again in lost context between disconnected apps.',
    category: 'Stack Consolidation',
    author: 'Amara Okafor',
    authorRole: 'Head of Platform Strategy, Snaarp',
    publishedAt: '18 Nov 2026',
    readTime: '6 min read',
    featured: true,
    artworkVariant: 'stack-consolidation',
    keyTakeaways: [
      'A 20-person team typically pays across 11 to 18 separate software vendors totaling ₦430k–₦1.48M monthly.',
      'Shared identity, Drive permissions, and unified CRM records cut employee onboarding time from 4 days to under 35 minutes.',
      'Fixed team pricing eliminates per-user upgrade anxiety when adding seasonal staff, contractors, or interns.',
    ],
    sections: [
      {
        id: 'hidden-cost',
        heading: 'The hidden tax of per-seat software sprawl',
        paragraphs: [
          'Most modern companies do not intend to buy eighteen separate subscriptions. It starts innocently: Google Workspace or Microsoft 365 for email, Zoom for client calls, Slack for internal chat, Dropbox for large media files, HubSpot for sales deals, QuickBooks for invoices, and a password manager to keep track of every login.',
          'By the time the team reaches twenty people, finance is reconciling twelve to fifteen recurring invoices across multiple currencies. Worse, every new hire triggers an hour-long provisioning ritual across eight admin panels.',
        ],
        callout: {
          title: 'Benchmark Comparison',
          body: 'Across 20 team members, fragmented stacks average ₦432,000/month on Microsoft 365 + add-ons and up to ₦1,480,000/month on multi-vendor enterprise bundles—versus ₦198,000/month fixed on Snaarp 360.',
        },
      },
      {
        id: 'shared-context',
        heading: 'One login, one directory, shared context across 20+ apps',
        paragraphs: [
          'Cost is only half the story. When your email, calendar, CRM, cloud storage, and accounting live in disconnected silos, employees become human middleware—copying deal notes from Mail into CRM, downloading PDFs to re-upload into Books, and chasing missing permissions in Drive.',
          'Snaarp connects Snaarp Mail, Meet, Teams, Drive, CRM, Books, Workforce, and Lock on a single permission layer. When a deal moves to Won in Snaarp CRM, Books automatically prepares the invoice and Drive provisions the client folder with the right team members already assigned.',
        ],
      },
      {
        id: 'making-switch',
        heading: 'How teams migrate in 14 days without halting operations',
        paragraphs: [
          'Consolidation fails when teams attempt a cold cutover over a single weekend. High-performing IT and ops leads migrate in three calm waves: identity and mail sync first, document drives and team chat second, and CRM plus accounting third.',
          'Our migration importers preserve folder hierarchies, deal stages, and contact histories so your team keeps working with zero downtime.',
        ],
      },
    ],
  },
  {
    id: 'ai-search-innovations',
    slug: 'ai-search-innovations-redefining-query-understanding',
    title: 'AI Search Innovations: How New Algorithms Are Redefining Query Understanding',
    excerpt:
      'Recent advancements in AI-driven search algorithms are changing how users find information online, promising personalized and context-aware results amidst growing privacy concerns.',
    category: 'AI & Productivity',
    author: 'Maria Chen',
    authorRole: 'Principal AI Research Editor',
    publishedAt: '20 Nov 2026',
    readTime: '4 min read',
    artworkVariant: 'ai-search',
    keyTakeaways: [
      'Semantic retrieval now prioritizes workspace context and user permissions over raw keyword density.',
      'Unified knowledge bases let teams search across emails, spreadsheets, PDFs, and CRM notes in one query.',
      'Privacy-preserving indexing ensures sensitive HR and finance files never leak into broader team search results.',
    ],
    sections: [
      {
        id: 'beyond-keywords',
        heading: 'Moving from keyword matching to workspace intent',
        paragraphs: [
          'Traditional enterprise search fails because business knowledge is fragmented across formats. An account executive rarely remembers whether a pricing concession was discussed in an email thread, a PDF contract, or a spreadsheet tracker.',
          'Modern contextual search engines map entities—clients, projects, invoices, and teammates—so a single natural-language query surfaces the exact email thread, signed PDF, and pipeline record simultaneously.',
        ],
      },
      {
        id: 'permission-aware',
        heading: 'Privacy-first indexing inside unified suites',
        paragraphs: [
          'The core challenge of AI search is governance. When Snaarp indexes Mail, Drive, Document, and Workforce records, every result strictly honors your workspace role permissions in real time.',
          'Team members see instant answers drawn exclusively from documents and conversations they are already authorized to access.',
        ],
      },
    ],
  },
  {
    id: 'ai-content-moderation',
    slug: 'ai-driven-content-moderation-new-frontier',
    title: 'AI-Driven Content Moderation: The New Frontier for Safe Team & Customer Channels',
    excerpt:
      'As digital channels increasingly rely on AI for content governance, operations teams examine the implications for brand safety, deliverability, and compliance.',
    category: 'Security & IT',
    author: 'Maria Chen',
    authorRole: 'Principal AI Research Editor',
    publishedAt: '20 Nov 2026',
    readTime: '3 min read',
    artworkVariant: 'content-mod',
    keyTakeaways: [
      'Automated screening reduces phishing, spoofed sender domains, and policy violations before messages reach inboxes.',
      'Combining VerifyKit list hygiene with Sendrit compliance rules protects sender reputation.',
    ],
    sections: [
      {
        id: 'proactive-trust',
        heading: 'Protecting communication channels before issues escalate',
        paragraphs: [
          'Whether managing high-volume customer announcements or internal team channels, manual review alone cannot scale. Intelligent moderation models flag suspicious attachments, domain spoofing, and risky outbound copy before campaigns go live.',
          'Paired with automated email verification in VerifyKit, marketing and ops teams keep bounce rates low and domain trust consistently high.',
        ],
      },
    ],
  },
  {
    id: 'generative-ai-marketing',
    slug: 'generative-ai-role-in-digital-marketing-strategies',
    title: "Generative AI's Role in Revolutionizing Digital Marketing Strategies",
    excerpt:
      'As businesses pivot towards digital-first strategies, generative AI emerges as a driving force behind targeted campaigns, higher conversion, and faster content creation.',
    category: 'Sales & Outbound',
    author: 'Emma Rodriguez',
    authorRole: 'Growth & Outbound Strategist',
    publishedAt: '20 Nov 2026',
    readTime: '4 min read',
    artworkVariant: 'gen-marketing',
    keyTakeaways: [
      'Pairing AI Compose with verified prospect lists in Zeus Contacts triples reply quality.',
      'Landing pages built with Snaarp Website Builder connect directly to Sendrit nurture sequences and Snaarp CRM.',
    ],
    sections: [
      {
        id: 'connected-funnel',
        heading: 'Why AI marketing fails when tools stay disconnected',
        paragraphs: [
          'Generating copy is no longer the bottleneck—connecting messaging directly to verified audience segments and pipeline outcomes is. When your landing page builder, outbound tool, email verifier, and CRM share one database, every campaign learns from closed deals.',
          'Teams using Snaarp Website Builder alongside Sendrit and Zeus Contacts launch targeted campaigns in hours instead of stitching together four external webhooks.',
        ],
      },
    ],
  },
  {
    id: 'unified-crm-books',
    slug: 'closing-the-gap-between-sales-pipeline-and-invoicing',
    title: 'Closing the Gap Between Sales Pipeline and Invoicing with CRM + Books',
    excerpt:
      'Stop letting won deals sit in limbo waiting for manual finance handoffs. See how linking Snaarp CRM and Snaarp Books speeds up cash collection by 42%.',
    category: 'Finance & Ops',
    author: 'Tunde Adeyemi',
    authorRole: 'Finance Operations Architect',
    publishedAt: '12 Nov 2026',
    readTime: '5 min read',
    artworkVariant: 'finance-books',
    keyTakeaways: [
      'Automatic deal-to-invoice generation eliminates re-keying line items and tax rules.',
      'Real-time payment reconciliation updates deal records for account managers without back-and-forth emails.',
    ],
    sections: [
      {
        id: 'revenue-handoff',
        heading: 'Eliminating the spreadsheet handoff between sales and finance',
        paragraphs: [
          'In most mid-sized organizations, closing a deal triggers a manual Slack ping to finance, followed by copying company details, line items, and billing contacts into an accounting tool.',
          'With Snaarp CRM connected natively to Snaarp Books, moving a card to the Won column generates a branded invoice, applies tax presets, and tracks payment status inside the customer timeline.',
        ],
      },
    ],
  },
  {
    id: 'zero-trust-snaarp-lock',
    slug: 'zero-trust-credential-hygiene-with-snaarp-lock',
    title: 'Zero-Trust Credential Hygiene: Securing Shared Vendor Logins in Under 20 Minutes',
    excerpt:
      'Shared spreadsheets of team passwords are an audit disaster waiting to happen. Learn how Snaarp Lock and Snaarp Identity enforce clean access.',
    category: 'Security & IT',
    author: 'David Lindqvist',
    authorRole: 'Security & Compliance Lead',
    publishedAt: '05 Nov 2026',
    readTime: '5 min read',
    artworkVariant: 'zero-trust',
    keyTakeaways: [
      'Role-based credential vaults let staff autofill vendor logins without exposing raw passwords.',
      'Offboarding an employee in Snaarp Workforce immediately revokes Lock, Drive, and Mail sessions.',
    ],
    sections: [
      {
        id: 'offboarding-risk',
        heading: 'One offboarding click across every company asset',
        paragraphs: [
          'The greatest security exposure during team turnover is forgetting which external logins a departing contractor still holds. When Workforce, Identity, and Lock operate inside one directory, revoking access takes one click.',
        ],
      },
    ],
  },
];

export const PRODUCT_DEMOS: ProductDemo[] = [
  {
    id: 'demo-crm',
    appId: 'crm',
    appName: 'Snaarp CRM',
    title: 'Visual Deal Pipelines Connected to Mail & Books',
    description:
      'Track leads from first outreach in Zeus Contacts through proposals and instant invoice generation in Snaarp Books.',
    category: 'CRM & Sales',
    duration: '3 min interactive tour',
    replaces: 'HubSpot, Pipedrive, Salesforce',
    steps: [
      {
        step: 1,
        title: 'Multi-stage Kanban Pipeline',
        summary: 'Filter active deals across New, Qualified, Proposal, and Won with live weighted pipeline totals.',
        highlightTarget: 'Pipeline Header & Stage Columns',
      },
      {
        step: 2,
        title: 'One-click Proposal & Activity Log',
        summary: 'Inspect Northwind Logistics or Verta Health cards to see synced Mail threads and Meet call recordings.',
        highlightTarget: 'Deal Card Drawer',
      },
      {
        step: 3,
        title: 'Auto-Invoice on Deal Won',
        summary: 'Drag any deal to Won to trigger an itemized invoice draft inside Snaarp Books automatically.',
        highlightTarget: 'Won Stage Automation',
      },
    ],
  },
  {
    id: 'demo-mail',
    appId: 'mail',
    appName: 'Snaarp Mail',
    title: 'Business Email with AI Compose & CRM Context',
    description:
      'Custom domain email engineered for speed—turn threads into tasks, schedule calls via Snaarp Me, and draft replies with AI.',
    category: 'Communication',
    duration: '2 min interactive tour',
    replaces: 'Gmail, Outlook, Microsoft 365',
    steps: [
      {
        step: 1,
        title: 'Priority & Deal Context',
        summary: 'See sender company, open deal value, and recent Drive files right alongside incoming messages.',
        highlightTarget: 'Unified Inbox List',
      },
      {
        step: 2,
        title: 'AI Compose & Quick Templates',
        summary: 'Draft crisp client updates or contract follow-ups in one click with tone and length controls.',
        highlightTarget: 'AI Compose Bar',
      },
      {
        step: 3,
        title: 'Convert Thread to Meeting or Task',
        summary: 'Attach a Snaarp Me booking link or spin up a Project Management task without leaving your inbox.',
        highlightTarget: 'Thread Action Bar',
      },
    ],
  },
  {
    id: 'demo-books',
    appId: 'books',
    appName: 'Snaarp Books',
    title: 'Automated Invoicing, Expenses & Multi-Currency Ledger',
    description:
      'Issue branded invoices, track vendor expenses, and reconcile cash flow directly against CRM deals and Workforce payroll.',
    category: 'Finance & HR',
    duration: '3 min interactive tour',
    replaces: 'QuickBooks, Xero, FreshBooks, Sage',
    steps: [
      {
        step: 1,
        title: 'Live Cash & Receivable Snapshot',
        summary: 'Monitor overdue invoices, monthly recurring revenue, and approved expenses in tabular clarity.',
        highlightTarget: 'Ledger Summary Strip',
      },
      {
        step: 2,
        title: 'Instant Branded Invoice Builder',
        summary: 'Pull customer tax IDs and line items straight from CRM records with NGN/USD/GBP support.',
        highlightTarget: 'Invoice Line-Item Row',
      },
      {
        step: 3,
        title: 'Receipt Capture & Reconciliation',
        summary: 'Approve team expense claims and attach receipt PDFs stored securely in Snaarp Drive.',
        highlightTarget: 'Expense Queue',
      },
    ],
  },
  {
    id: 'demo-meet',
    appId: 'meet',
    appName: 'Snaarp Meet & Snaarp Me',
    title: 'HD Video Meetings & Zero-Back-and-Forth Scheduling',
    description:
      'Host browser-based HD meetings with automatic Drive recordings and share booking links synced to your team availability.',
    category: 'Communication',
    duration: '2 min interactive tour',
    replaces: 'Zoom, Google Meet, Calendly',
    steps: [
      {
        step: 1,
        title: 'Personal & Team Booking Links',
        summary: 'Share Snaarp Me slots with clients and automatically attach a unique Meet room URL.',
        highlightTarget: 'Booking Slot Grid',
      },
      {
        step: 2,
        title: 'In-Call Notes & Recording Sync',
        summary: 'Recordings and action items save straight to the client folder in Snaarp Drive.',
        highlightTarget: 'Live Room Controls',
      },
    ],
  },
  {
    id: 'demo-drive',
    appId: 'drive',
    appName: 'Snaarp Drive & Docs Suite',
    title: 'Cloud Storage, Documents, Sheets & PDF Markup',
    description:
      'Store, co-edit, and sign documents, spreadsheets, slides, and PDFs under unified workspace permissions.',
    category: 'Docs & Storage',
    duration: '3 min interactive tour',
    replaces: 'Dropbox, Google Drive, Word, Excel, Smallpdf',
    steps: [
      {
        step: 1,
        title: 'Departmental Shared Folders',
        summary: 'Organize Sales, Finance, and HR assets with granular view, edit, and external link expiry.',
        highlightTarget: 'Folder Permission Tree',
      },
      {
        step: 2,
        title: 'Native Document, Sheet & PDF Editor',
        summary: 'Open and annotate contracts or live financial trackers right in the browser with zero third-party plugins.',
        highlightTarget: 'Live Document Preview',
      },
    ],
  },
  {
    id: 'demo-lock',
    appId: 'lock',
    appName: 'Snaarp Lock & Identity',
    title: 'Team Password Vault, Digital IDs & Email Signatures',
    description:
      'Share credentials safely without revealing plaintext passwords and issue consistent digital business cards.',
    category: 'Security',
    duration: '2 min interactive tour',
    replaces: '1Password, Bitwarden, Popl, CodeTwo',
    steps: [
      {
        step: 1,
        title: 'Department Credential Vaults',
        summary: 'Grant one-click autofill access to marketing, finance, or engineering tools by role.',
        highlightTarget: 'Vault Access Matrix',
      },
      {
        step: 2,
        title: 'Verified Digital ID & Email Signatures',
        summary: 'Push standardized company signatures to Snaarp Mail and scannable digital cards to every rep.',
        highlightTarget: 'Digital ID Card Preview',
      },
    ],
  },
];

export const WEBINARS: WebinarSession[] = [
  {
    id: 'webinar-stack-audit',
    title: 'Live Clinic: Consolidating 15 Business Apps into One Fixed Team Plan',
    description:
      'Walk through a real 30-person company audit—see how teams replace Google Workspace, Zoom, Slack, HubSpot, and QuickBooks in two weeks.',
    status: 'Upcoming Live',
    date: 'Thu, 03 Dec 2026',
    time: '2:00 PM WAT / 9:00 AM EST',
    duration: '45 mins + Q&A',
    host: 'Amara Okafor',
    hostRole: 'Head of Platform Strategy',
    topic: 'Platform Architecture & ROI',
    attendeeCount: '340 registered',
    highlights: [
      'Live breakdown of hidden per-seat SaaS fees',
      '14-day zero-downtime migration checklist',
      'Interactive Q&A with Snaarp migration engineers',
    ],
  },
  {
    id: 'webinar-outbound-engine',
    title: 'Building a High-Deliverability Outbound Engine with Zeus Contacts & VerifyKit',
    description:
      'Learn how revenue teams clean prospect lists, warm domains, and sync booked meetings straight into Snaarp CRM.',
    status: 'Upcoming Live',
    date: 'Wed, 09 Dec 2026',
    time: '3:00 PM WAT / 10:00 AM EST',
    duration: '40 mins',
    host: 'Emma Rodriguez',
    hostRole: 'Growth & Outbound Strategist',
    topic: 'Sales & Outbound',
    attendeeCount: '215 registered',
    highlights: [
      'List hygiene benchmarks with VerifyKit',
      'Sequencing best practices in Zeus Contacts',
      'Connecting Snaarp Me scheduling links to CRM stages',
    ],
  },
  {
    id: 'webinar-finance-ops',
    title: 'On-Demand: Deal-to-Invoice Automation with Snaarp CRM & Snaarp Books',
    description:
      'See how finance and sales leaders eliminate manual invoice requests and reconcile multi-currency payments in real time.',
    status: 'On-Demand',
    date: 'Recorded Nov 2026',
    time: 'Watch anytime',
    duration: '32 mins',
    host: 'Tunde Adeyemi',
    hostRole: 'Finance Operations Architect',
    topic: 'Finance & Accounting',
    attendeeCount: '1,180 views',
    highlights: [
      'Configuring automated Won-stage invoice rules',
      'Managing NGN and USD client ledgers in one view',
      'Syncing expense receipts to Snaarp Drive',
    ],
  },
  {
    id: 'webinar-security-lock',
    title: 'On-Demand: Zero-Trust Passwords & Instant Offboarding with Snaarp Lock',
    description:
      'A practical security workshop for IT leads replacing scattered password sheets with role-based credential vaults.',
    status: 'On-Demand',
    date: 'Recorded Oct 2026',
    time: 'Watch anytime',
    duration: '28 mins',
    host: 'David Lindqvist',
    hostRole: 'Security & Compliance Lead',
    topic: 'Security & IT',
    attendeeCount: '890 views',
    highlights: [
      'Setting up department vaults in 15 minutes',
      'One-click employee offboarding across Workforce & Lock',
      'Rolling out verified digital IDs and email signatures',
    ],
  },
];
