import { SafeImage } from "@/components/ui/SafeImage";
import { ImageReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GalleryGrid({
  images,
  eyebrow,
  title = "Gallery",
  titleAccent,
  dense = false,
}: {
  images: readonly string[];
  eyebrow?: string;
  title?: string;
  titleAccent?: string;
  dense?: boolean;
}) {
  return (
    <section className={`section-pad ${dense ? "py-10 sm:py-12 md:py-14" : "py-20 md:py-28"}`}>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        titleAccent={titleAccent}
        align="center"
        size="section"
        dense
        className="!mb-8"
      />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {images.map((src, i) => (
          <ImageReveal
            key={src}
            className={`relative overflow-hidden rounded-xl ${
              i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
            }`}
            delay={i * 0.04}
          >
            <SafeImage src={src} alt={`Gallery image ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </ImageReveal>
        ))}
      </div>
    </section>
  );
}
