"use client";

import { useRouter } from "next/navigation";
import {
  MonitorSmartphone,
  Building2,
  MessageCircleQuestion,
  Cable,
  Database,
  Network,
  BrainCircuit,
  ClipboardList,
  Star,
  ArrowRight,
  MoveRight,
  MoveLeft,
  type LucideIcon,
} from "lucide-react";

interface ServiceMain {
  num: string;
  icon: LucideIcon;
  nameEs: string;
  nameEn: string;
  descEs: string;
  descEn: string;
  tags: string[];
  badge?: boolean;
  wide: boolean;
}

interface ServiceSecondary {
  num: string;
  icon: LucideIcon;
  nameEs: string;
  nameEn: string;
  descEs: string;
  descEn: string;
}

const MAIN_SERVICES: ServiceMain[] = [
  {
    num: "01",
    icon: MonitorSmartphone,
    nameEs: "Desarrollo Web y Móvil",
    nameEn: "Web & Mobile Development",
    descEs:
      "Diseño y programación de páginas web, plataformas de comercio electrónico y aplicaciones para iOS y Android con tecnologías modernas y rendimiento optimizado.",
    descEn:
      "Design and programming of websites, e-commerce platforms and iOS/Android applications with modern technologies and optimized performance.",
    tags: ["Next.js", "Angular", "TypeScript", "Vercel", "Render"],
    badge: true,
    wide: true,
  },
  {
    num: "02",
    icon: Building2,
    nameEs: "Software a la medida",
    nameEn: "Custom Software",
    descEs:
      "Plataformas, sistemas de gestión o herramientas automatizadas adaptadas a las necesidades específicas del negocio.",
    descEn:
      "Platforms, management systems or automated tools tailored to specific business needs.",
    tags: ["Node.js", "NestJS", "Java", "PostgreSQL"],
    wide: false,
  },
  {
    num: "03",
    icon: MessageCircleQuestion,
    nameEs: "Consultoría TI",
    nameEn: "IT Consulting",
    descEs:
      "Asesoría sobre qué tecnologías invertir y cómo ejecutar la transformación digital de una empresa.",
    descEn:
      "Advisory on which technologies to invest in and how to execute a company's digital transformation.",
    tags: ["Mockups", "Docs", "MS Project"],
    wide: false,
  },
  {
    num: "04",
    icon: Cable,
    nameEs: "Integración de sistemas",
    nameEn: "Systems Integration",
    descEs:
      "Conexión de diferentes bases de datos y programas internos para que funcionen como un solo sistema automatizado y eficiente, eliminando silos de información.",
    descEn:
      "Connection of different databases and internal programs to work as a single automated and efficient system, eliminating information silos.",
    tags: ["REST APIs", "Supabase", "Postman", "GitHub"],
    wide: true,
  },
  {
    num: "05",
    icon: Database,
    nameEs: "Ingeniería de datos",
    nameEn: "Data Engineering",
    descEs:
      "Procesamiento, almacenamiento y organización de grandes volúmenes de información para facilitar la toma de decisiones estratégicas basadas en datos reales.",
    descEn:
      "Processing, storage and organization of large volumes of information to facilitate strategic decision-making based on real data.",
    tags: ["PostgreSQL", "MongoDB", "MySQL", "Power BI", "GSC"],
    wide: true,
  },
];

const SECONDARY_SERVICES: ServiceSecondary[] = [
  {
    num: "06",
    icon: Network,
    nameEs: "Arquitectura de Software",
    nameEn: "Software Architecture",
    descEs:
      "Planificación de la estructura técnica de sistemas complejos para garantizar escalabilidad.",
    descEn:
      "Planning of the technical structure of complex systems to guarantee scalability.",
  },
  {
    num: "07",
    icon: BrainCircuit,
    nameEs: "IA y Machine Learning",
    nameEn: "AI & Machine Learning",
    descEs:
      "Integración de modelos computacionales y automatización de procesos inteligentes.",
    descEn:
      "Integration of computational models and automation of intelligent processes.",
  },
  {
    num: "08",
    icon: ClipboardList,
    nameEs: "Dirección de proyectos",
    nameEn: "Project Management",
    descEs:
      "Supervisión de equipos y garantía de calidad en la entrega de productos tecnológicos.",
    descEn:
      "Team supervision and quality assurance in the delivery of technology products.",
  },
];

interface ServicesClientProps {
  locale: string;
  translations: {
    eyebrow: string;
    title: string;
    sectionMain: string;
    sectionSecondary: string;
    sectionProcess: string;
    badgePopular: string;
    comingSoonLabel: string;
    comingSoonText: string;
    ctaTitle: string;
    ctaSub: string;
    ctaBtn: string;
    process1Title: string;
    process1Desc: string;
    process2Title: string;
    process2Desc: string;
    process3Title: string;
    process3Desc: string;
    process4Title: string;
    process4Desc: string;
  };
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div
      className="font-mono uppercase"
      style={{
        fontSize: "12px",
        color: "var(--color-accent)",
        letterSpacing: "0.15em",
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {text}
      <span
        style={{
          flex: 1,
          height: "3px",
          background: "var(--color-border-subtle)",
          display: "inline-block",
        }}
      />
    </div>
  );
}

export function ServicesClient({
  locale,
  translations: t,
}: ServicesClientProps) {
  const router = useRouter();
  const l = locale as "es" | "en";

  const process = [
    { num: "01", title: t.process1Title, desc: t.process1Desc },
    { num: "02", title: t.process2Title, desc: t.process2Desc },
    { num: "03", title: t.process3Title, desc: t.process3Desc },
    { num: "04", title: t.process4Title, desc: t.process4Desc },
  ];

  return (
    <div
      style={{ padding: "80px 40px 40px", maxWidth: "960px", margin: "0 auto" }}
    >
      {/* Eyebrow + título */}
      <p
        className="font-mono uppercase tracking-widest"
        style={{
          fontSize: "11px",
          color: "var(--color-accent)",
          marginBottom: "8px",
        }}
      >
        {t.eyebrow}
      </p>
      <h1
        className="font-mono font-bold"
        style={{
          fontSize: "28px",
          color: "var(--color-text-primary)",
          marginBottom: "40px",
          paddingBottom: "16px",
          borderBottom: "3px solid var(--color-border-subtle)",
        }}
      >
        {t.title}
      </h1>

      {/* Servicios principales — brickwork */}
      <SectionLabel text={t.sectionMain} />
      <div
        className="services-grid-desktop"
        style={{
          gap: "14px",
          marginBottom: "48px",
        }}
      >
        {MAIN_SERVICES.map((svc, i) => {
          const Icon = svc.icon;
          // Patrón alternado: índices 0,3,4 → wide; 1,2 → narrow
          const isWide = svc.wide;
          const isLastOdd =
            i === MAIN_SERVICES.length - 1 && MAIN_SERVICES.length % 2 !== 0;

          return (
            <div
              key={svc.num}
              style={{
                gridColumn: isWide ? "span 2" : "span 1",
                background: "var(--color-bg-secondary)",
                border: "1px solid var(--color-border-subtle)",
                borderRadius: "10px",
                padding: "24px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition:
                  "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,255,148,0.4)";
                e.currentTarget.style.boxShadow =
                  "0 4px 24px rgba(0,0,0,0.4), 0 0 20px rgba(0,255,148,0.06)";
                e.currentTarget.style.transform = "translateY(-2px)";
                const icon = e.currentTarget.querySelector(
                  ".svc-icon",
                ) as HTMLElement;
                if (icon) {
                  icon.style.transform = "scale(1.15) rotate(8deg)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "var(--color-border-subtle)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
                const icon = e.currentTarget.querySelector(
                  ".svc-icon",
                ) as HTMLElement;
                if (icon) {
                  icon.style.transform = "scale(1) rotate(0deg)";
                }
              }}
            >
              {/* Número decorativo */}
              <span
                style={{
                  position: "absolute",
                  bottom: "-12px",
                  right: "12px",
                  fontFamily: "monospace",
                  fontSize: "72px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.025)",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {svc.num}
              </span>

              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="svc-icon"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "var(--color-accent-dim)",
                    border: "1px solid rgba(0,255,148,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "transform 0.3s ease",
                  }}
                >
                  <Icon size={20} style={{ color: "var(--color-accent)" }} />
                </div>
                {svc.badge && (
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "11px",
                      color: "var(--color-bg-primary)",
                      background: "var(--color-accent)",
                      padding: "3px 8px",
                      borderRadius: "3px",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Star size={9} fill="currentColor" />
                    {t.badgePopular}
                  </span>
                )}
              </div>

              {/* Nombre */}
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  lineHeight: 1.3,
                }}
              >
                {l === "es" ? svc.nameEs : svc.nameEn}
              </h3>

              {/* Descripción */}
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.7,
                  flex: 1,
                }}
              >
                {l === "es" ? svc.descEs : svc.descEn}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono"
                    style={{
                      fontSize: "12px",
                      color: "var(--color-text-muted)",
                      border: "1px solid var(--color-border-subtle)",
                      padding: "2px 7px",
                      borderRadius: "3px",
                      background: "var(--color-bg-tertiary)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        {/* Placeholder próximamente */}
        <div
          style={{
            gridColumn: "span 1",
            border: "1px dashed rgba(0,255,148,0.15)",
            borderRadius: "10px",
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "120px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p
              className="font-mono"
              style={{
                fontSize: "11px",
                color: "var(--color-text-muted)",
                marginBottom: "4px",
              }}
            >
              {t.comingSoonLabel}
            </p>
            <p style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
              {t.comingSoonText}
            </p>
          </div>
        </div>
      </div>

      {/* Slider mobile */}
      <div className="services-slider-mobile">
        <div className="slider-track">
          {MAIN_SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.num} className="slider-card">
                {/* Número decorativo */}
                <span
                  style={{
                    position: "absolute",
                    bottom: "-12px",
                    right: "12px",
                    fontFamily: "monospace",
                    fontSize: "72px",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.025)",
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {svc.num}
                </span>

                {/* Top */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "var(--color-accent-dim)",
                      border: "1px solid rgba(0,255,148,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} style={{ color: "var(--color-accent)" }} />
                  </div>
                  {svc.badge && (
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "9px",
                        color: "var(--color-bg-primary)",
                        background: "var(--color-accent)",
                        padding: "3px 8px",
                        borderRadius: "3px",
                        fontWeight: 700,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Star size={9} fill="currentColor" />
                      {t.badgePopular}
                    </span>
                  )}
                </div>

                {/* Nombre */}
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    lineHeight: 1.3,
                  }}
                >
                  {l === "es" ? svc.nameEs : svc.nameEn}
                </h3>

                {/* Descripción */}
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                    flex: 1,
                  }}
                >
                  {l === "es" ? svc.descEs : svc.descEn}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono"
                      style={{
                        fontSize: "10px",
                        color: "var(--color-text-muted)",
                        border: "1px solid var(--color-border-subtle)",
                        padding: "2px 7px",
                        borderRadius: "3px",
                        background: "var(--color-bg-tertiary)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicación de deslizar */}
        <div className="slider-hint">
          <MoveLeft size={18} />
          <span
            className="font-mono"
            style={{
              fontSize: "10px",
              color: "var(--color-text-muted)",
              letterSpacing: "0.1em",
            }}
          >
            {locale === "es" ? "desliza para ver más" : "swipe to see more"}
          </span>
          <MoveRight size={18} />
        </div>
      </div>

      {/* Servicios secundarios */}
      <SectionLabel text={t.sectionSecondary} />
      <div className="secondary-grid-desktop">
        {SECONDARY_SERVICES.map((svc) => {
          const Icon = svc.icon;
          return (
            <div
              key={svc.num}
              style={{
                background: "var(--color-bg-secondary)",
                border: "1px solid var(--color-border-subtle)",
                borderRadius: "8px",
                padding: "18px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,255,148,0.3)";
                e.currentTarget.style.transform = "translateY(-1px)";
                const icon = e.currentTarget.querySelector(
                  ".svc-icon",
                ) as HTMLElement;
                if (icon) {
                  icon.style.transform = "scale(1.1) rotate(6deg)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "var(--color-border-subtle)";
                e.currentTarget.style.transform = "translateY(0)";
                const icon = e.currentTarget.querySelector(
                  ".svc-icon",
                ) as HTMLElement;
                if (icon) {
                  icon.style.transform = "scale(1) rotate(0deg)";
                }
              }}
            >
              <span
                style={{
                  position: "absolute",
                  bottom: "-8px",
                  right: "8px",
                  fontFamily: "monospace",
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.025)",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {svc.num}
              </span>
              <div
                className="svc-icon"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "var(--color-accent-dim)",
                  border: "1px solid rgba(0,255,148,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease",
                }}
              >
                <Icon size={18} style={{ color: "var(--color-accent)" }} />
              </div>
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                }}
              >
                {l === "es" ? svc.nameEs : svc.nameEn}
              </h3>
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                {l === "es" ? svc.descEs : svc.descEn}
              </p>
            </div>
          );
        })}
      </div>

      {/* Slider mobile secundarios */}
      <div className="secondary-slider-mobile">
        <div className="slider-track">
          {SECONDARY_SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.num} className="slider-card">
                <span
                  style={{
                    position: "absolute",
                    bottom: "-8px",
                    right: "8px",
                    fontFamily: "monospace",
                    fontSize: "48px",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.025)",
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {svc.num}
                </span>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "var(--color-accent-dim)",
                    border: "1px solid rgba(0,255,148,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={18} style={{ color: "var(--color-accent)" }} />
                </div>
                <h3
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                  }}
                >
                  {l === "es" ? svc.nameEs : svc.nameEn}
                </h3>
                <p
                  style={{
                    fontSize: "11px",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {l === "es" ? svc.descEs : svc.descEn}
                </p>
              </div>
            );
          })}
        </div>
        <div className="slider-hint">
          <MoveLeft size={18}/>
          <span
            className="font-mono"
            style={{
              fontSize: "10px",
              color: "var(--color-text-muted)",
              letterSpacing: "0.1em",
            }}
          >
            {locale === "es" ? "desliza para ver más" : "swipe to see more"}
          </span>
          <MoveRight size={18}/>
        </div>
      </div>

      {/* Cómo trabajo */}
      <SectionLabel text={t.sectionProcess} />
      <div className="process-grid">
        {process.map((step) => (
          <div
            key={step.num}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "0 10px",
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: "12px",
                color: "var(--color-accent)",
                background: "var(--color-accent-dim)",
                border: "1px solid rgba(0,255,148,0.3)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "12px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {step.num}
            </div>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "var(--color-text-primary)",
                marginBottom: "6px",
              }}
            >
              {step.title}
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "var(--color-text-secondary)",
                lineHeight: 1.6,
              }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          border: "1px solid rgba(0,255,148,0.2)",
          borderRadius: "12px",
          background:
            "linear-gradient(135deg, var(--color-bg-secondary) 0%, rgba(10,31,20,0.5) 100%)",
          padding: "40px",
          textAlign: "center",
          marginBottom: "8px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(0,255,148,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <h2
          className="font-mono font-bold"
          style={{
            fontSize: "20px",
            color: "var(--color-text-primary)",
            marginBottom: "8px",
          }}
        >
          {t.ctaTitle}
        </h2>
        <p
          style={{
            fontSize: "13px",
            color: "var(--color-text-secondary)",
            marginBottom: "24px",
          }}
        >
          {t.ctaSub}
        </p>
        <button
          onClick={() => router.push(`/${locale}/contact`)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "var(--color-accent)",
            color: "var(--color-bg-primary)",
            fontSize: "16px",
            fontWeight: 600,
            padding: "11px 28px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
            transition: "opacity 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.88";
            e.currentTarget.style.boxShadow = "0 0 24px rgba(0,255,148,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {t.ctaBtn}
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}
