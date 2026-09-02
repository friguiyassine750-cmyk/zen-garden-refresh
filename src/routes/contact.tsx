import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, Phone, Facebook } from "lucide-react";
import { PageIntro, SiteShell } from "@/components/zenshe/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & FAQ | ZenShe Spa" },
      { name: "description", content: "Find ZenShe Spa: address and map, opening hours, phone, email, social channels, and answers to common questions." },
      { property: "og:title", content: "Contact & FAQ | ZenShe Spa" },
      { property: "og:description", content: "Where to find us, how to reach us, and answers to the questions we hear most." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  ["Do I need to book in advance?", "Yes — we keep a deliberately small schedule. Most weeks fill about ten days ahead, and same-day slots occasionally open in the mornings."],
  ["Is the spa women-only?", "Every treatment space and practitioner is women-only. Partners are welcome to wait in the courtyard."],
  ["What languages do you offer?", "Every ritual can be held in French, Arabic, or English. Tell us your preference when you book."],
  ["What happens at a first visit?", "A private fifteen-minute conversation with your practitioner before anything else. You can change or stop the plan at any point."],
  ["Can I buy a gift card?", "Yes, for any ritual or amount. Ask at reception or email us and we'll send a linen card by post."],
  ["What is your cancellation policy?", "Free until 24 hours before. Inside that window we charge half the ritual, unless you're unwell — then just tell us."],
];

const MAP_URL = "https://www.google.com/maps/search/?api=1&query=12+Rue+des+Jardins+Paris";

function ContactPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Contact"
        title="Come find us."
        copy="The house sits behind a green door on a quiet street. Ring once; someone will come."
      />

      <section className="contact-grid">
        <div className="contact-card">
          <MapPin size={20} />
          <h2>Visit</h2>
          <p>12 Rue des Jardins<br />75011 Paris, France</p>
          <a className="text-link" href={MAP_URL} target="_blank" rel="noreferrer">Open in Google Maps</a>
        </div>
        <div className="contact-card">
          <Clock size={20} />
          <h2>Hours</h2>
          <p>Tue – Fri · 10:00 – 20:00<br />Saturday · 09:00 – 18:00<br />Sun & Mon · closed</p>
        </div>
        <div className="contact-card">
          <Phone size={20} />
          <h2>Call</h2>
          <p><a href="tel:+33100000000">+33 1 00 00 00 00</a></p>
          <a className="text-link" href="mailto:hello@zenshe.spa"><Mail size={15} /> hello@zenshe.spa</a>
        </div>
        <div className="contact-card">
          <Instagram size={20} />
          <h2>Social</h2>
          <div className="social-row">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="ZenShe on Instagram"><Instagram size={18} /> Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="ZenShe on Facebook"><Facebook size={18} /> Facebook</a>
          </div>
        </div>
      </section>

      <section className="map-band">
        <a href={MAP_URL} target="_blank" rel="noreferrer" className="map-band__link">
          <iframe
            title="Map showing ZenShe Spa location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=2.36%2C48.855%2C2.39%2C48.87&layer=mapnik"
            loading="lazy"
          />
          <span>View on Google Maps</span>
        </a>
      </section>

      <section className="editorial-section faq-section">
        <div className="section-heading"><h2>Questions</h2><span className="section-index">(b) · FAQ</span></div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question} className="faq-item">
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
