import { getTranslations } from 'next-intl/server'
import { PageWrapper } from '@/components/layout'
import { AboutClient } from '@/components/sections/AboutClient'

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })

  return (
    <PageWrapper currentPath="/about">
      <AboutClient
        locale={locale}
        translations={{
          eyebrow: t('eyebrow'),
          title: t('title'),
          downloadCv: t('download_cv'),
          location: t('location'),
          languages: t('languages'),
          education: t('education'),
          sectionPro: t('section_pro'),
          sectionDo: t('section_do'),
          sectionLooking: t('section_looking'),
          sectionHobbies: t('section_hobbies'),
          sectionQuote: t('section_quote'),
          bio1: t('bio_1'),
          bio2: t('bio_2'),
          looking: t('looking'),
          quote: t('quote'),
          quoteAuthor: t('quote_author'),
        }}
      />
    </PageWrapper>
  )
}