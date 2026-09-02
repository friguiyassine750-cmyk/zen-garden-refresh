import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import apothecaryImage from "@/assets/zenshe-apothecary.jpg";
import ritualImage from "@/assets/zenshe-gallery-ritual.jpg";
import { PageIntro, SiteShell } from "@/components/zenshe/SiteShell";

export const Route = createFileRoute("/new")({
  head: () => ({
    meta: [
      { title: "New This Season | ZenShe Spa" },
      { name: "description", content: "The Linen Apothecary, new seasonal rituals, and limited botanical editions arriving at ZenShe Spa." },
      { property: "og:title", content: "New This Season | ZenShe Spa" },
      { property: "og:description", content: "Fresh rituals and limited botanical editions at ZenShe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewPage,
});

const arrivals = [
  ["01", "The Linen Apothecary", "A small shelf of oils, salts and cloth, blended in the courtyard kitchen.", "Collection"],
  ["02", "Églantine Ritual", "Wild rosehip and warm compress work, offered only while the hedges hold.", "70 min · €165"],
  ["03", "Evening Root Bath", "A late-hours soak with vetiver and bay, for the week that refuses to end.", "60 min · €125"],
  ["04", "Two-Hand Duet", "Four hands, one body, entirely synchronised. Six slots a week.", "90 min · €260"],
];

function NewPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="New this season"
        title="What has just arrived."
        copy="Short editions and fresh rituals, added as the courtyard changes. Most run for a single season and then rest."
      />

      <section className="new-feature">
        <img src={apothecaryImage} alt="Botanical oils and linen towels from the ZenShe apothecary" loading="lazy" />
        <div>
          <p className="eyebrow">The headline</p>
          <h2>The Linen Apothecary</h2>
          <p>Twelve formulas, blended in small runs and bottled by hand. Built to continue at home what the ritual begins here.</p>
          <Link to="/store" className="primary-action">Shop the collection</Link>
        </div>
      </section>

      <section className="editorial-section">
        <div className="section-heading"><h2>Also new</h2><span className="section-index">(a) · This season</span></div>
        <div className="ritual-list">
          {arrivals.map(([number, title, copy, meta]) => (
            <Link to="/booking" className="ritual-row" key={number}>
              <span className="ritual-row__number">{number}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
              <span className="ritual-row__meta">{meta}</span>
              <ArrowRight className="ritual-row__arrow" size={19} />
            </Link>
          ))}
        </div>
      </section>

      <section className="new-note">
        <img src={ritualImage} alt="A handmade ritual bowl with fresh botanicals" loading="lazy" />
        <p>Seasonal editions are limited by what the courtyard and our growers can give us. When a ritual disappears from this page, it will usually return next year.</p>
      </section>
    </SiteShell>
  );
}
