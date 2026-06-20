export function PageShell({
  children,
  flush = false,
}: {
  children: React.ReactNode;
  /** Full-bleed heroes that sit under the floating navbar (no top offset on main). */
  flush?: boolean;
}) {
  return (
    <main className={flush ? "bg-pearl" : "bg-pearl pt-[var(--site-header-offset)]"}>{children}</main>
  );
}
