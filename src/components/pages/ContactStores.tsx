"use client";

import { MaterialIcon } from "@/components/pages/campaign-ui";
import { CONTACT_STORES } from "@/lib/site-data";

type Store = (typeof CONTACT_STORES)[number];

function storeMeta(store: Store) {
  if (store.name.toLowerCase().includes("delhi")) {
    return { city: "Delhi", role: "Headquarters", index: "01" };
  }
  if (store.name.toLowerCase().includes("lucknow")) {
    return { city: "Lucknow", role: "Company Studio", index: "02" };
  }
  return { city: "Kanpur", role: "Company Studio", index: "03" };
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/8 text-white/70">
        <MaterialIcon name={icon} className="text-[18px]" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">{label}</p>
        <div className="mt-1 text-sm leading-relaxed text-white/85">{children}</div>
      </div>
    </div>
  );
}

export function ContactStores() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {CONTACT_STORES.map((store) => {
        const meta = storeMeta(store);
        const isHq = meta.role === "Headquarters";

        return (
          <article
            key={store.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-gloss-black text-soft-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
          >
            <div className="border-b border-white/10 px-6 py-6 sm:px-7 sm:py-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-[10px] uppercase tracking-[0.28em] text-white/35">
                    Store {meta.index}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-[0.06em] text-soft-white sm:text-[1.75rem]">
                    {meta.city}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">{store.name}</p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] ${
                    isHq ? "bg-soft-white text-primary-black" : "border border-white/25 text-white/75"
                  }`}
                >
                  {meta.role}
                </span>
              </div>
              {store.landmark ? (
                <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-white/45">
                  <MaterialIcon name="location_on" filled className="text-sm" />
                  {store.landmark}
                </p>
              ) : null}
            </div>

            <div className="flex flex-1 flex-col gap-5 px-6 py-6 sm:px-7 sm:py-7">
              <InfoRow icon="home_pin" label="Address">
                {store.address}
              </InfoRow>
              <InfoRow icon="schedule" label="Hours">
                <p>{store.hours}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-soft-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden />
                  Weekly off · {store.weeklyOff}
                </p>
              </InfoRow>
              <InfoRow icon="call" label="Phone">
                <a
                  href={`tel:${store.phoneHref}`}
                  className="font-medium text-soft-white transition-opacity hover:opacity-70"
                >
                  {store.phone}
                </a>
              </InfoRow>
              <InfoRow icon="mail" label="Email">
                <a
                  href={`mailto:${store.email}`}
                  className="break-all font-medium text-soft-white transition-opacity hover:opacity-70"
                >
                  {store.email}
                </a>
              </InfoRow>

              <a
                href={`tel:${store.phoneHref}`}
                className="mt-auto inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-soft-white px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-black transition-colors hover:bg-white"
              >
                <MaterialIcon name="call" className="text-sm" />
                Call {meta.city}
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
