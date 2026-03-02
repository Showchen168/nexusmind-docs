import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { i18n } from '@/lib/i18n';

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <DocsLayout
      tree={source.pageTree[lang]}
      nav={{
        title: (
          <span className="font-bold text-lg">NexusMind</span>
        ),
      }}
      sidebar={{
        defaultOpenLevel: 1,
      }}
      i18n={i18n}
    >
      {children}
    </DocsLayout>
  );
}
