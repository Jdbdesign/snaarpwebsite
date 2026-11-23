'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { BlogView } from '@/components/resources/BlogView';

export function BlogPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const articleId = searchParams.get('articleId');

  const handleSelectArticle = (id: string | null) => {
    if (id) {
      router.push(`${pathname}?articleId=${encodeURIComponent(id)}`, { scroll: false });
    } else {
      router.push(pathname, { scroll: false });
    }
  };

  return <BlogView selectedArticleId={articleId} onSelectArticle={handleSelectArticle} />;
}
