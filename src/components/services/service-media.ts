import { PRODUCT_IMAGES, REEL_VIDEOS, SERVICE_IMAGES, productImage, serviceImage } from "@/lib/constants";
import { SERVICE_PAGES } from "@/lib/site-data";

export const SERVICES_HERO_VIDEO = "/video/herovideo.mp4";
export const SERVICES_CRAFT_VIDEO = "/video/fixing.mov";

export function serviceGallery(index: number): string[] {
  const base = SERVICE_PAGES[index]?.image ?? serviceImage(index);
  return [
    base,
    serviceImage(index + 1),
    productImage(index * 2),
    productImage(index * 2 + 1),
    SERVICE_IMAGES[index % SERVICE_IMAGES.length]!,
  ];
}

export function serviceReel(index: number): string {
  return REEL_VIDEOS[index % REEL_VIDEOS.length]!;
}

export const MOSAIC_IMAGES = [...SERVICE_IMAGES, ...PRODUCT_IMAGES.slice(0, 6)] as const;
