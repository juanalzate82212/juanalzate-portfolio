import { getTranslations } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return (
    <main>
      <h1>{t("role")}</h1>
      <p>{t("tagline")}</p>
    </main>
  );
}