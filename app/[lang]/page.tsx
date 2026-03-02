import { redirect } from 'next/navigation';

export default async function LangHomePage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  redirect(lang === 'zh' ? '/docs' : `/${lang}/docs`);
}
