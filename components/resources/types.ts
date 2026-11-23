export type BlogCategory =
  | 'All'
  | 'Stack Consolidation'
  | 'AI & Productivity'
  | 'Sales & Outbound'
  | 'Finance & Ops'
  | 'Security & IT';

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  callout?: {
    title: string;
    body: string;
  };
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, 'All'>;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  artworkVariant:
    | 'ai-search'
    | 'content-mod'
    | 'gen-marketing'
    | 'stack-consolidation'
    | 'crm-pipeline'
    | 'zero-trust'
    | 'finance-books'
    | 'outbound-zeus';
  keyTakeaways: string[];
  sections: ArticleSection[];
}

export type DemoCategory =
  | 'All'
  | 'Communication'
  | 'Docs & Storage'
  | 'CRM & Sales'
  | 'Finance & HR'
  | 'Security';

export interface ProductDemo {
  id: string;
  appId: 'crm' | 'mail' | 'books' | 'meet' | 'drive' | 'lock';
  appName: string;
  title: string;
  description: string;
  category: Exclude<DemoCategory, 'All'>;
  duration: string;
  replaces: string;
  steps: {
    step: number;
    title: string;
    summary: string;
    highlightTarget: string;
  }[];
}

export interface WebinarSession {
  id: string;
  title: string;
  description: string;
  status: 'Upcoming Live' | 'On-Demand';
  date: string;
  time: string;
  duration: string;
  host: string;
  hostRole: string;
  topic: string;
  attendeeCount: string;
  highlights: string[];
}
