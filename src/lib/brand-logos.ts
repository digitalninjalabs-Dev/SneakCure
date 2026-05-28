/** Transparent brand logos from /public/brandlogo */
export const BRAND_LOGO_FILES = [
  "cececec.png",
  "dwdfeef.png",
  "dwdwd.png",
  "efefcwc.png",
  "efefede.png",
  "qaswde.png",
  "qsqxq.png",
  "qssqsqs.png",
  "qsz.png",
  "sdsdsdsdsw.png",
  "wdwcd.png",
  "wdwdwdw.png",
  "1 (1).png",
  "wdwdwddc.png",
  "wdwdwdwd.png",
  "wdwxdc.png",
] as const;

export const BRAND_GRID_COLUMNS = 4;
export const BRAND_GRID_COUNT = BRAND_LOGO_FILES.length; // 4 × 4 — one logo per brand, no duplicates

export type BrandLogoItem = {
  id: string;
  src: string;
  alt: string;
  /** Grid cell index 0–(count-1) */
  slot: number;
};

export function createBrandGridItems(): BrandLogoItem[] {
  return BRAND_LOGO_FILES.map((file, i) => {
    const name = file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");
    return {
      id: `brand-logo-${file}`,
      slot: i,
      src: `/brandlogo/${file}`,
      alt: `${name} logo`,
    };
  });
}

export function slotToGridStyle(slot: number, columns: number) {
  return {
    gridColumn: (slot % columns) + 1,
    gridRow: Math.floor(slot / columns) + 1,
  };
}
