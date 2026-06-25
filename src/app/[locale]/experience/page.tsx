import { getTranslations } from 'next-intl/server'
import { PageWrapper } from '@/components/layout'
import { ExperienceClient } from '@/components/sections/ExperienceClient'

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'experience' })

  return (
    <PageWrapper currentPath="/experience">
      <ExperienceClient
        locale={locale}
        translations={{
          eyebrow: t('eyebrow'),
          title: t('title'),
          present: t('present'),
          sectionWork: t('section_work'),
          sectionEducation: t('section_education'),
          hintText: t('hint_text'),
          hintLink: t('hint_link'),
          freelanceTitle: t('freelance_title'),
          freelanceSubtitle: t('freelance_subtitle'),
          freelanceDesc: t('freelance_desc'),
          solumeciDesc: t('solumeci_desc'),
          eduDegree: t('edu_degree'),
          eduInstitution: t('edu_institution'),
          eduExpected: t('edu_expected')
        }}
      />
    </PageWrapper>
  )
}