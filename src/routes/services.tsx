import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro, SiteShell } from "@/components/zenshe/SiteShell";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Wellness Rituals | ZenShe Spa" }, { name: "description", content: "Explore private botanical wellness rituals designed around women's intimate care." }, { property: "og:title", content: "Wellness Rituals | ZenShe Spa" }, { property: "og:description", content: "Private botanical rituals, offered with time and discretion." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: ServicesPage,
});

const categories = [
  { title: "Intimate care", note: "Private and restorative", items: [["Botanical Massage", "60 min", "€140"], ["Guided Pelvic Reset", "75 min", "€180"]] },
  { title: "Body rituals", note: "Slow, whole-body release", items: [["Forest Bathing", "45 min", "€95"], ["Linen Renewal", "90 min", "€210"]] },
  { title: "Seasonal", note: "Short editions, locally gathered", items: [["Églantine Ritual", "70 min", "€165"], ["Evening Root Bath", "60 min", "€125"]] },
];

function ServicesPage() {
  return <SiteShell><PageIntro eyebrow="The practice" title="Care, at your own pace." copy="Each ritual begins with a private conversation. Choose a starting point; your practitioner will shape the rest around comfort, consent, and what your body needs that day." />
    <div className="service-categories">{categories.map((category, index) => <section className="service-category" key={category.title}><div className="service-category__intro"><span>0{index + 1}</span><h2>{category.title}</h2><p>{category.note}</p></div><div>{category.items.map(([name, duration, price]) => <Link to="/booking" className="service-item" key={name}><h3>{name}</h3><span>{duration}</span><strong>{price}</strong><ArrowRight size={18} /></Link>)}</div></section>)}</div>
  </SiteShell>;
}