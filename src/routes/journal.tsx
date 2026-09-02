import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import windowImage from "@/assets/zenshe-gallery-window.jpg";
import ritualImage from "@/assets/zenshe-gallery-ritual.jpg";
import apothecaryImage from "@/assets/zenshe-apothecary.jpg";
import { PageIntro, SiteShell } from "@/components/zenshe/SiteShell";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "The Journal | ZenShe Spa" },
      { name: "description", content: "Notes on intimate wellness, botanical care, and slow ritual from the practitioners at ZenShe Spa." },
      { property: "og:title", content: "The Journal | ZenShe Spa" },
      { property: "og:description", content: "Essays and notes from inside the ZenShe house." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JournalPage,
});

const feature = {
  category: "Essay",
  title: "The room before the room",
  excerpt: "Why we spent a year designing a waiting room, and what happens to a body that is allowed to arrive before it is touched.",
  meta: "8 min read · August 2026",
  image: windowImage,
};

const entries = [
  { category: "Botanicals", title: "Églantine, in three preparations", meta: "5 min · July 2026", image: ritualImage },
  { category: "Practice", title: "What we mean when we say pelvic reset", meta: "6 min · June 2026", image: apothecaryImage },
  { category: "House notes", title: "Reading the courtyard through the seasons", meta: "4 min · May 2026", image: windowImage },
  { category: "Conversations", title: "Three languages, one anatomy", meta: "7 min · April 2026", image: ritualImage },
];

function JournalPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="The journal"
        title="Notes from the house."
        copy="Slow writing from our practitioners: botany, anatomy, and the quiet mechanics of feeling at ease in your own body."
      />

      <article className="journal-feature">
        <img src={feature.image} alt="" loading="lazy" />
        <div>
          <p className="eyebrow">{feature.category}</p>
          <h2>{feature.title}</h2>
          <p className="journal-feature__excerpt">{feature.excerpt}</p>
          <span className="journal-meta">{feature.meta}</span>
          <span className="text-link">Read the essay <ArrowRight size={15} /></span>
        </div>
      </article>

      <section className="editorial-section">
        <div className="section-heading"><h2>More entries</h2><span className="section-index">(a) · Archive</span></div>
        <div className="journal-list">
          {entries.map((entry) => (
            <article className="journal-row" key={entry.title}>
              <img src={entry.image} alt="" loading="lazy" />
              <div>
                <p className="eyebrow">{entry.category}</p>
                <h3>{entry.title}</h3>
              </div>
              <span className="journal-meta">{entry.meta}</span>
              <ArrowRight size={18} />
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
