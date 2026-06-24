import { getTranslations } from 'next-intl/server'
import { HomeClient } from '@/components/sections/HomeClient'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home' })

  return (
    <HomeClient
      locale={locale}
      translations={{
        eyebrow: t('eyebrow'),
        role: t('role'),
        tagline: t('tagline'),
        available: t('available'),
        ctaProjects: t('cta_projects'),
        ctaContact: t('cta_contact'),
        stackLabel: t('stack_label'),
        scroll: t('scroll'),
      }}
    />
  )
}