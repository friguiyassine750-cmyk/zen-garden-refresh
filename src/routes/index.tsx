import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/zenshe-hero.jpg";
import apothecaryImage from "@/assets/zenshe-apothecary.jpg";
import windowImage from "@/assets/zenshe-gallery-window.jpg";
import ritualImage from "@/assets/zenshe-gallery-ritual.jpg";
import { SiteShell } from "@/components/zenshe/SiteShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZenShe Spa | Women's Intimate Wellness" },
      { name: "description", content: "Private, unhurried intimate wellness rituals and botanical care for women at ZenShe Spa." },
      { property: "og:title", content: "ZenShe Spa | Women's Intimate Wellness" },
      { property: "og:description", content: "A quiet haven for botanical rituals, intimate care, and renewal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const rituals = [
  ["01", "Intimate Botanical Massage", "Warm herbal blends, slow hands, complete privacy.", "60 min · €140"],
  ["02", "Guided Pelvic Reset", "One-to-one, unhurried, and entirely without judgement.", "75 min · €180"],
  ["03", "Forest Bathing Session", "Breath, stillness, and the courtyard's quiet green.", "45 min · €95"],
];

function HomePage() {
  return (
    <SiteShell>
      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="eyebrow hero-reveal">Intimate wellness · for her</p>
          <h1 className="hero-reveal hero-reveal--2">A quiet room<br />where she<br /><em>comes home.</em></h1>
          <p className="home-hero__intro hero-reveal hero-reveal--3">Private, unhurried care for the parts of the body the world forgets. Botanical rituals, clinical honesty, and a courtyard you can almost hear.</p>
          <div className="home-hero__actions hero-reveal hero-reveal--4">
            <Link to="/booking" className="primary-action">Book a visit</Link>
            <Link to="/services" className="text-link">Explore services <ArrowRight size={15} /></Link>
          </div>
        </div>
        <div className="home-hero__image-wrap">
          <img src={heroImage} alt="A sunlit ZenShe treatment room opening onto a forest courtyard" width={1088} height={1440} className="home-hero__image" />
        </div>
      </section>

      <section className="editorial-section rituals-section">
        <div className="section-heading"><h2>Signature rituals</h2><span className="section-index">(a) · The practice</span></div>
        <div className="ritual-list">
          {rituals.map(([number, title, copy, meta]) => (
            <Link to="/booking" className="ritual-row" key={number}>
              <span className="ritual-row__number">{number}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
              <span className="ritual-row__meta">{meta}</span>
              <ArrowRight className="ritual-row__arrow" size={19} />
            </Link>
          ))}
        </div>
      </section>

      <section id="new" className="season-feature">
        <img src={apothecaryImage} alt="Botanical oils and linen towels from the ZenShe apothecary" loading="lazy" width={1920} height={912} />
        <div className="season-feature__caption">
          <div><p className="eyebrow">New this season</p><h2>The Linen Apothecary</h2></div>
          <Link to="/store" className="text-link">Shop the ritual <ArrowRight size={15} /></Link>
        </div>
      </section>

      <section id="gallery" className="editorial-section gallery-section">
        <div className="section-heading"><h2>Inside the house</h2><span className="section-index">(b) · Gallery</span></div>
        <div className="gallery-mosaic">
          <figure><img src={windowImage} alt="A secluded botanical bathing room at ZenShe" loading="lazy" width={800} height={1200} /></figure>
          <figure><img src={ritualImage} alt="A handmade ritual bowl with fresh botanicals" loading="lazy" width={816} height={816} /></figure>
        </div>
      </section>

      <section className="editorial-section testimonials-section">
        <blockquote>“I finally felt seen,<br />and safe.”</blockquote>
        <div className="testimonial-names">
          <div><p>— Camille R.</p><span>Member · Paris</span></div>
          <div><p>— Yasmin K.</p><span>Visitor · Lyon</span></div>
          <div><p>— Elif D.</p><span>Member · Marseille</span></div>
        </div>
      </section>

      <section className="closing-cta">
        <div><h2>Begin, gently.</h2><p>Membership and private sessions available. EN · FR · AR</p></div>
        <Link to="/booking" className="closing-cta__action">Book your first visit</Link>
      </section>
    </SiteShell>
  );
}