import { getTranslations } from 'next-intl/server'
import { PageWrapper } from '@/components/layout'
import { ServicesClient } from '@/components/sections/ServicesClient'

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services' })

  return (
    <PageWrapper currentPath="/services">
      <ServicesClient
        locale={locale}
        translations={{
          eyebrow: t('eyebrow'),
          title: t('title'),
          sectionMain: t('section_main'),
          sectionSecondary: t('section_secondary'),
          sectionProcess: t('section_process'),
          badgePopular: t('badge_popular'),
          comingSoonLabel: t('coming_soon_label'),
          comingSoonText: t('coming_soon_text'),
          ctaTitle: t('cta_title'),
          ctaSub: t('cta_sub'),
          ctaBtn: t('cta_btn'),
          process1Title: t('process_1_title'),
          process1Desc: t('process_1_desc'),
          process2Title: t('process_2_title'),
          process2Desc: t('process_2_desc'),
          process3Title: t('process_3_title'),
          process3Desc: t('process_3_desc'),
          process4Title: t('process_4_title'),
          process4Desc: t('process_4_desc'),
        }}
      />
    </PageWrapper>
  )
}