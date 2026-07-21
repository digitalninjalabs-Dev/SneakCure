const PRIMARY = "Closed on Wednesdays";
const SECONDARY = "Open Mon–Tue & Thu–Sun · 10:00 AM – 8:00 PM IST";
const STAR = "✦";

function MarqueeTrack({
  tone,
}: {
  tone: "white" | "black";
}) {
  const item = (
    <span className="footer-x-marquee-item">
      <span className="footer-x-marquee-primary">{PRIMARY}</span>
      <span className="footer-x-marquee-star" aria-hidden>
        {STAR}
      </span>
      <span className="footer-x-marquee-secondary">{SECONDARY}</span>
      <span className="footer-x-marquee-star" aria-hidden>
        {STAR}
      </span>
    </span>
  );

  const strip = (
    <>
      {item}
      {item}
      {item}
      {item}
      {item}
      {item}
    </>
  );

  return (
    <div className={`footer-x-marquee-ribbon footer-x-marquee-ribbon--${tone}`}>
      <div className="footer-x-marquee-track">
        <div className="footer-x-marquee-group">{strip}</div>
        <div className="footer-x-marquee-group" aria-hidden>
          {strip}
        </div>
      </div>
    </div>
  );
}

export function FooterGetStartedMarquee() {
  return (
    <section
      className="footer-x-marquee"
      aria-label="Weekly holiday — closed every Wednesday"
    >
      <div className="footer-x-marquee-stage">
        <MarqueeTrack tone="white" />
        <MarqueeTrack tone="black" />
      </div>
      <p className="sr-only">
        Closed on Wednesdays. Open Monday–Tuesday and Thursday–Sunday, 10:00 AM – 8:00 PM IST.
      </p>
    </section>
  );
}
