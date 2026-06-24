import { getTranslations } from "next-intl/server";
import { PageWrapper } from "@/components/layout";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return (
    <PageWrapper currentPath="/">
      <div
        className="flex items-center justify-center h-full px-6"
        style={{ minHeight: 'calc(100vh - 96px)' }}
      >
        <div className="text-center">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            // {t('eyebrow')}
          </p>
          <h1
            className="font-mono font-bold mb-3"
            style={{ fontSize: '2.5rem', color: 'var(--color-text-primary)' }}
          >
            Juan Alzate
          </h1>
          <p
            className="font-mono mb-6"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {t('role')} · {t('location')}
          </p>
          <p
            className="text-sm max-w-md mx-auto"
            style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}
          >
            {t('tagline')}
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}