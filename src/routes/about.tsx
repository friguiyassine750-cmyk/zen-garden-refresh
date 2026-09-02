import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import windowImage from "@/assets/zenshe-gallery-window.jpg";
import ritualImage from "@/assets/zenshe-gallery-ritual.jpg";
import { PageIntro, SiteShell } from "@/components/zenshe/SiteShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story | ZenShe Spa" },
      { name: "description", content: "How ZenShe began: a small forest room, a stubborn belief that women's intimate care deserves time, privacy and honesty." },
      { property: "og:title", content: "Our Story | ZenShe Spa" },
      { property: "og:description", content: "The story behind ZenShe — a women's intimate wellness haven built on privacy and patience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const chapters = [
  {
    year: "2019",
    title: "A borrowed room",
    copy: "It started with one treatment table in a borrowed room above a florist. Amina had spent nine years in clinical care and had run out of patience for rushed appointments and lowered voices. She opened three afternoons a week and told her clients: take as long as you need.",
  },
  {
    year: "2021",
    title: "The courtyard",
    copy: "Word travelled the way it does between women — quietly, and completely. We moved into the old house with the walled courtyard, planted rosemary and églantine, and learned that half the healing happens before anyone touches anyone. So we built the waiting room first.",
  },
  {
    year: "2023",
    title: "Three languages",
    copy: "Our clients arrived speaking French, Arabic, English — often switching mid-sentence about things they had never said aloud. We hired for that. Today every ritual can be held in the language your body relaxes in.",
  },
  {
    year: "Today",
    title: "Still unhurried",
    copy: "We are eleven practitioners and one very old fig tree. We still book fewer appointments than we could. We still begin every visit with a conversation and no clock in sight.",
  },
];

function AboutPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Our story"
        title="Built slowly, on purpose."
        copy="ZenShe is a women's intimate wellness haven — a house where the body is discussed plainly, cared for gently, and never hurried."
      />

      <section className="story-lede">
        <img src={windowImage} alt="Light falling into the ZenShe bathing room" loading="lazy" />
        <blockquote>
          “We wanted a place where nobody has to explain themselves twice.”
          <cite>Amina L. — founder</cite>
        </blockquote>
      </section>

      <section className="editorial-section story-chapters">
        <div className="section-heading"><h2>Chapters</h2><span className="section-index">(a) · How we got here</span></div>
        <ol className="chapter-list">
          {chapters.map((chapter) => (
            <li key={chapter.year} className="chapter">
              <span className="chapter__year">{chapter.year}</span>
              <div>
                <h3>{chapter.title}</h3>
                <p>{chapter.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="values-band">
        <img src={ritualImage} alt="A ritual bowl of fresh botanicals" loading="lazy" />
        <div>
          <p className="eyebrow">What we hold to</p>
          <ul className="values-list">
            <li><strong>Privacy first.</strong> One client in the wing at a time. No shared corridors, no waiting-room glances.</li>
            <li><strong>Consent out loud.</strong> Every step is named before it happens, and can stop at any word.</li>
            <li><strong>Plain language.</strong> Anatomy is not a whisper. We say what we mean, in your language.</li>
            <li><strong>Botanical, not mystical.</strong> Herbs we can source, methods we can explain.</li>
          </ul>
        </div>
      </section>

      <section className="closing-cta">
        <div><h2>Come see the house.</h2><p>Visits begin with a conversation, not a treatment.</p></div>
        <Link to="/contact" className="closing-cta__action">Get in touch <ArrowRight size={16} /></Link>
      </section>
    </SiteShell>
  );
}
