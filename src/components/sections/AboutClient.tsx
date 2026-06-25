"use client";

import {
  Film,
  Gamepad2,
  Music2,
  Wrench,
  Tv2,
  Download,
  MicVocal
} from "lucide-react";

const WHAT_I_DO = [
  { es: "Desarrollo web a medida", en: "Custom web development" },
  { es: "Aplicaciones de escritorio", en: "Desktop applications" },
  { es: "Integración de APIs", en: "API integration" },
  { es: "Análisis de datos", en: "Data analysis" },
  { es: "Consultoría técnica", en: "Technical consulting" },
  { es: "Remoto · Presencial · Freelance", en: "Remote · On-site · Freelance" },
];

const HOBBIES = [
  { icon: Film, label: { es: "Cinéfilo", en: "Film lover" } },
  { icon: Gamepad2, label: { es: "Videojuegos", en: "Video games" } },
  { icon: MicVocal, label: { es: "Billie Eilish", en: "Billie Eilish" } },
  { icon: Music2, label: { es: "Música ochentera", en: "80s music" } },
  { icon: Wrench, label: { es: "Game modding", en: "Game modding" } },
  { icon: Tv2, label: { es: "Artes audiovisuales", en: "Audiovisual arts" } },
];

interface AboutClientProps {
  locale: string;
  translations: {
    eyebrow: string;
    title: string;
    downloadCv: string;
    location: string;
    languages: string;
    education: string;
    sectionPro: string;
    sectionDo: string;
    sectionLooking: string;
    sectionHobbies: string;
    sectionQuote: string;
    bio1: string;
    bio2: string;
    looking: string;
    quote: string;
    quoteAuthor: string;
  };
}

export function AboutClient({ locale, translations: t }: AboutClientProps) {
  const l = locale as "es" | "en";

  return (
    <div
      style={{ padding: "80px 40px 0", maxWidth: "860px", margin: "0 auto" }}
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

      {/* Grid principal */}
      <div className="about-grid"
        style={{
          marginBottom: "48px",
        }}
      >
        {/* Columna izquierda */}
        <div className="about-left">
          {/* Foto */}
          <img src="https://yvieltbgapfbzucymeta.supabase.co/storage/v1/object/public/portfolio-assets/about/Foto%20Documento%202026.jpg" alt="Juan Alzate" 
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "12px",
            objectFit: "cover",
            border: "1px solid var(--color-border-subtle",
          }}/>

          {/* Metadatos */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {[
              {
                label: locale === "es" ? "Ubicación" : "Location",
                value: t.location,
              },
              {
                label: locale === "es" ? "Idiomas" : "Languages",
                value: t.languages,
              },
              {
                label: locale === "es" ? "Formación" : "Education",
                value: t.education,
              },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{ display: "flex", flexDirection: "column", gap: "2px" }}
              >
                <span
                  className="font-mono uppercase"
                  style={{
                    fontSize: "12px",
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Botón CV */}
          <a
            href="#"
            className="font-mono transition-all duration-200"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "16px",
              color: "var(--color-accent)",
              border: "1px solid rgba(0,255,148,0.35)",
              background: "var(--color-accent-dim)",
              padding: "7px 14px",
              borderRadius: "6px",
              textDecoration: "none",
              width: "fit-content",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 12px rgba(0,255,148,0.2)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <Download size={13} />
            {t.downloadCv}
          </a>
        </div>

        {/* Columna derecha */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", paddingRight: "16px" }}>
          {/* Bio profesional */}
          <div>
            <p
              className="font-mono uppercase"
              style={{
                fontSize: "12px",
                color: "var(--color-accent)",
                letterSpacing: "0.15em",
                marginBottom: "10px",
              }}
            >
              {t.sectionPro}
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "var(--color-text-secondary)",
                lineHeight: 1.8,
                marginBottom: "12px",
              }}
            >
              {t.bio1}
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "var(--color-text-secondary)",
                lineHeight: 1.8,
              }}
            >
              {t.bio2}
            </p>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "3px solid var(--color-border-subtle)",
            }}
          />

          {/* Lo que hago */}
          <div>
            <p
              className="font-mono uppercase"
              style={{
                fontSize: "12px",
                color: "var(--color-accent)",
                letterSpacing: "0.15em",
                marginBottom: "12px",
              }}
            >
              {t.sectionDo}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              {WHAT_I_DO.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    fontSize: "14px",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--color-accent)",
                      flexShrink: 0,
                      marginTop: "5px",
                      display: "inline-block",
                    }}
                  />
                  {item[l]}
                </div>
              ))}
            </div>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid var(--color-border-subtle)",
            }}
          />

          {/* Lo que busco */}
          <div>
            <p
              className="font-mono uppercase"
              style={{
                fontSize: "12px",
                color: "var(--color-accent)",
                letterSpacing: "0.15em",
                marginBottom: "10px",
              }}
            >
              {t.sectionLooking}
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "var(--color-text-secondary)",
                lineHeight: 1.8,
              }}
            >
              {t.looking}
            </p>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid var(--color-border-subtle)",
            }}
          />

          {/* Hobbies */}
          <div>
            <p
              className="font-mono uppercase"
              style={{
                fontSize: "12px",
                color: "var(--color-accent)",
                letterSpacing: "0.15em",
                marginBottom: "12px",
              }}
            >
              {t.sectionHobbies}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {HOBBIES.map((h, i) => {
                const Icon = h.icon;
                return (
                  <span
                    key={i}
                    style={{
                      fontSize: "14px",
                      color: "var(--color-text-secondary)",
                      border: "1px solid var(--color-border-subtle)",
                      background: "var(--color-bg-secondary)",
                      padding: "5px 12px",
                      borderRadius: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Icon
                      size={13}
                      style={{ color: "var(--color-accent)", flexShrink: 0 }}
                    />
                    {h.label[l]}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Frase — centrada, fuera del grid */}
      <div style={{ marginBottom: "48px", padding: "0 16px" }}>
        <p
          className="font-mono uppercase"
          style={{
            fontSize: "20px",
            color: "var(--color-accent)",
            letterSpacing: "0.15em",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          {t.sectionQuote}
        </p>
        <div className="about-quote"
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            padding: "24px 32px",
            borderRadius: "8px",
            background: "var(--color-bg-secondary)",
            border: "1px solid var(--color-border-subtle)",
            borderLeft: "3px solid var(--color-accent)",
            textAlign: "center",
          }}
        >
          <p
            className="font-mono"
            style={{
              fontSize: "24px",
              color: "var(--color-text-primary)",
              lineHeight: 1.6,
              fontStyle: "italic",
              marginBottom: "10px",
            }}
          >
            "{t.quote}"
          </p>
          <p
            className="font-mono"
            style={{ fontSize: "16px", color: "var(--color-text-muted)" }}
          >
            - {t.quoteAuthor}
          </p>
        </div>
      </div>
    </div>
  );
}
