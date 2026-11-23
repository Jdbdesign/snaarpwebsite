'use client';

import { useSearchParams } from 'next/navigation';
import { DemosView } from '@/components/resources/DemosView';
import { SandboxAppId } from '@/components/resources/InteractiveSandbox';

export function DemosPageClient() {
  const searchParams = useSearchParams();
  const rawApp = searchParams.get('app');
  const validApps: SandboxAppId[] = ['crm', 'mail', 'books', 'meet', 'drive', 'lock'];
  const initialApp = validApps.includes(rawApp as SandboxAppId) ? (rawApp as SandboxAppId) : 'crm';

  return <DemosView initialDemoApp={initialApp} />;
}
