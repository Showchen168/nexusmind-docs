import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import { i18nUI } from '@/lib/i18n';

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <RootProvider i18n={i18nUI.provider(lang)}>
      {children}
    </RootProvider>
  );
}
