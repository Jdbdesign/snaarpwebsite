'use client';

import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import { BlogArticle } from './types';

interface EditorialArtworkProps {
  variant: BlogArticle['artworkVariant'];
  className?: string;
  alt?: string;
}

const IMAGE_MAP: Record<
  BlogArticle['artworkVariant'],
  { src: string; fallbackLabel: string; gradient: string }
> = {
  'stack-consolidation': {
    src: '/assets/resources/images/blog_stack_consolidation_1795231339107.jpg',
    fallbackLabel: 'Unified Workspace Strategy',
    gradient: 'from-violet-800 via-violet-900 to-slate-950',
  },
  'ai-search': {
    src: '/assets/resources/images/blog_ai_search_1795231338427.jpg',
    fallbackLabel: 'AI Search & Retrieval',
    gradient: 'from-slate-900 via-violet-950 to-slate-950',
  },
  'content-mod': {
    src: '/assets/resources/images/blog_content_moderation_1795231337940.jpg',
    fallbackLabel: 'AI Content Moderation',
    gradient: 'from-slate-800 via-slate-900 to-slate-950',
  },
  'gen-marketing': {
    src: '/assets/resources/images/blog_generative_marketing_1795231340105.jpg',
    fallbackLabel: 'Generative AI Marketing',
    gradient: 'from-violet-200 via-purple-100 to-slate-100',
  },
  'finance-books': {
    src: '/assets/resources/images/customer_team_collab_1795231338317.jpg',
    fallbackLabel: 'Finance & CRM Sync',
    gradient: 'from-violet-900 via-slate-900 to-slate-950',
  },
  'zero-trust': {
    src: '/assets/resources/images/blog_ai_search_1795231338427.jpg',
    fallbackLabel: 'Zero-Trust Access',
    gradient: 'from-slate-950 via-violet-950 to-slate-900',
  },
  'crm-pipeline': {
    src: '/assets/resources/images/blog_stack_consolidation_1795231339107.jpg',
    fallbackLabel: 'Sales Pipeline',
    gradient: 'from-violet-700 to-slate-950',
  },
  'outbound-zeus': {
    src: '/assets/resources/images/blog_generative_marketing_1795231340105.jpg',
    fallbackLabel: 'Outbound Growth',
    gradient: 'from-violet-600 to-indigo-950',
  },
};

export const EditorialArtwork: React.FC<EditorialArtworkProps> = ({
  variant,
  className = '',
  alt,
}) => {
  const [failed, setFailed] = useState(false);
  const config = IMAGE_MAP[variant] ?? IMAGE_MAP['stack-consolidation'];

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${config.gradient} p-6 text-white ${className}`}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <Layers className="h-7 w-7 text-violet-300" />
          <span className="text-xs font-medium text-white/90">
            {config.fallbackLabel}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
      <img
        src={config.src}
        alt={alt ?? config.fallbackLabel}
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent"
      />
    </div>
  );
};
