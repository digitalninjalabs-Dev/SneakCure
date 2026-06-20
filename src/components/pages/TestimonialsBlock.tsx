import { SHARED_TESTIMONIALS } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsBlock() {
  return (
    <section className="section-pad py-20 md:py-28">
      <SectionHeading eyebrow="Voices" title="What our clients say" titleAccent="Real collector stories" align="center" />
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SHARED_TESTIMONIALS.map((t) => (
          <blockquote key={t.name} className="glass-card rounded-2xl p-6 sm:p-8">
            <p className="text-base leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-6">
              <cite className="not-italic font-medium">{t.name}</cite>
              <p className="mt-1 text-sm text-muted">{t.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
