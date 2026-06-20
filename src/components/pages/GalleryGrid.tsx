import { SafeImage } from "@/components/ui/SafeImage";
import { SplitTitle } from "@/components/ui/SplitTitle";

export function GalleryGrid({
  images,
  title = "Gallery",
  titleAccent,
}: {
  images: readonly string[];
  title?: string;
  titleAccent?: string;
}) {
  return (
    <section className="section-pad py-20 md:py-28">
      <SplitTitle title={title} accent={titleAccent} as="h2" size="md" align="center" className="mb-10" />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {images.map((src, i) => (
          <div key={src} className={`relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
            <SafeImage src={src} alt={`Gallery image ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
