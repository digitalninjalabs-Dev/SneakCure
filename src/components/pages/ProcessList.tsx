import { SplitTitle } from "@/components/ui/SplitTitle";

export function ProcessList({
  steps,
  title = "Our process",
  titleAccent,
}: {
  steps: readonly string[];
  title?: string;
  titleAccent?: string;
}) {
  return (
    <section className="section-pad bg-soft-white py-20 grain md:py-28">
      <div className="mx-auto max-w-4xl">
        <SplitTitle title={title} accent={titleAccent} as="h2" size="md" align="center" className="mb-12" />
        <ol className="space-y-4">
          {steps.map((step, i) => (
            <li key={step} className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white/60 p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gloss-black text-xs font-medium text-soft-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="pt-1 text-base leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
