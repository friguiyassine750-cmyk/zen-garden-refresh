import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, UserRound, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const navigation = [
  { label: "Services", to: "/services" },
  { label: "New", to: "/", hash: "new" },
  { label: "Journal", to: "/", hash: "gallery" },
  { label: "Store", to: "/store" },
  { label: "Membership", to: "/memberships" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"FR" | "AR" | "EN">("EN");

  useEffect(() => {
    const isArabic = language === "AR";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = isArabic ? "ar" : language.toLowerCase();
    return () => {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    };
  }, [language]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="wordmark" aria-label="ZenShe home">
            ZenShe
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link key={item.label} to={item.to} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <label className="language-select-label">
              <span className="sr-only">Language</span>
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value as "FR" | "AR" | "EN")}
                className="language-select"
                aria-label="Select language"
              >
                <option value="FR">FR</option>
                <option value="AR">AR</option>
                <option value="EN">EN</option>
              </select>
            </label>
            <Link to="/store" className="icon-link" aria-label="Shopping bag">
              <ShoppingBag size={17} strokeWidth={1.5} />
            </Link>
            <Link to="/profile" className="icon-link header-user" aria-label="Your profile">
              <UserRound size={17} strokeWidth={1.5} />
            </Link>
            <Link to="/booking" className="book-link">
              Book
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.label} to={item.to} className="mobile-nav__link" onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link to="/auth" className="mobile-nav__link" onClick={() => setMenuOpen(false)}>
              Account
            </Link>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <Link to="/" className="wordmark wordmark--footer">ZenShe</Link>
            <p>A women&apos;s intimate wellness haven.</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link to="/services">Services</Link>
            <Link to="/store">Store</Link>
            <Link to="/memberships">Membership</Link>
            <Link to="/admin">For studios</Link>
          </nav>
        </div>
        <div className="footer-meta">
          <span>© 2026 ZenShe</span>
          <span>EN · FR · AR</span>
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro__copy">{copy}</p>
    </section>
  );
}