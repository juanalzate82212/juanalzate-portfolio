"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function NavBar() {
  const pathname = usePathname();
  const params = useParams();
  const locale = (params.locale as string) ?? "es";
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);

  function localizedHref(href: string) {
    return `/${locale}${href === "/" ? "" : href}`;
  }

  function isActive(href: string) {
    const localized = localizedHref(href);
    return pathname === localized;
  }

  const oppositeLocale = locale === "es" ? "en" : "es";
  const localeHref = pathname.replace(`/${locale}`, `/${oppositeLocale}`);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-4">
      <nav
        style={{
          background: "var(--color-bg-nav)",
          border: "1px solid var(--color-border)",
          borderTop: "none",
          borderRadius: "0 0 16px 16px",
          width: "calc(100% - 32px)",
          maxWidth: "860px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          paddingLeft: "12px",
          paddingRight: "12px",
        }}
      >
        {/* Barra principal */}
        <div className="flex items-center justify-between px-4 h-11">
          {/* Logo */}
          <Link
            href={localizedHref("/")}
            className="font-mono font-bold text-sm shrink-0"
            style={{ color: "var(--color-accent)" }}
          >
            JA_
          </Link>

          {/* Links — desktop */}
          <ul className="hidden md:flex items-center gap-4.5">
            {NAV_LINKS.map(({ key, href }) => {
              const active = isActive(href);
              return (
                <li key={key}>
                  <Link
                    href={localizedHref(href)}
                    className="relative px-3 py-1.5 text-sm rounded-md transition-all duration-200 block"
                    style={{
                      color: active
                        ? "var(--color-accent)"
                        : "var(--color-text-secondary)",
                      background: active
                        ? "var(--color-accent-dim)"
                        : "transparent",
                      fontFamily: "var(--font-mono)",
                    }}
                    onMouseEnter={(e) => {
                      if (!active)
                        e.currentTarget.style.color =
                          "var(--color-text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      if (!active)
                        e.currentTarget.style.color =
                          "var(--color-text-secondary)";
                    }}
                  >
                    {t(key)}
                    {active && (
                      <span
                        className="absolute bottom-0 left-3 right-3 h-px"
                        style={{ background: "var(--color-accent)" }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Controles derecha */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Selector de idioma */}
            <Link
              href={localeHref}
              className="font-mono text-xs px-2 py-1 rounded border transition-all duration-200"
              style={{
                color: "var(--color-accent)",
                borderColor: "rgba(0,255,148,0.3)",
                background: "var(--color-accent-dim)",
                letterSpacing: "0.05em",
              }}
            >
              {locale.toUpperCase()} | {oppositeLocale.toUpperCase()}
            </Link>

            {/* Hamburguesa — mobile */}
            <button
              className="md:hidden p-1.5 rounded transition-colors"
              style={{ color: "var(--color-text-secondary)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                {menuOpen ? (
                  <>
                    <line
                      x1="2"
                      y1="2"
                      x2="14"
                      y2="14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="14"
                      y1="2"
                      x2="2"
                      y2="14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </>
                ) : (
                  <>
                    <line
                      x1="2"
                      y1="4"
                      x2="14"
                      y2="4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="2"
                      y1="8"
                      x2="14"
                      y2="8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="2"
                      y1="12"
                      x2="14"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú mobile — se expande dentro del NavBar */}
        {menuOpen && (
          <div
            style={{
              borderTop: "1px solid var(--color-border)",
            }}
          >
            <ul className="flex flex-col py-1 gap-1.5">
              {NAV_LINKS.map(({ key, href }) => {
                const active = isActive(href);
                return (
                  <li key={key}>
                    <Link
                      href={localizedHref(href)}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-center py-2.5 text-xs font-mono transition-colors duration-200"
                      style={{
                        color: active
                          ? "var(--color-accent)"
                          : "var(--color-text-secondary)",
                        background: active
                          ? "var(--color-accent-dim)"
                          : "transparent",
                      }}
                    >
                      {active && (
                        <span
                          className="w-1 h-1 rounded-full mr-2 shrink-0"
                          style={{ background: "var(--color-accent)" }}
                        />
                      )}
                      {t(key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
