import Image, { type ImageProps } from "next/image";

/**
 * Wraps next/image for hydration safety when browser extensions
 * inject inline styles (e.g. filter: invert(0)) before React hydrates.
 */
export function SafeImage(props: ImageProps) {
  return (
    <Image
      {...props}
      suppressHydrationWarning
    />
  );
}
