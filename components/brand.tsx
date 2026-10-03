export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      aria-label="TrioraLabs home"
      className="brand"
      href="#home"
    >
      <span aria-hidden="true" className="brand__mark">
        T
      </span>
      <span className={footer ? "brand__name brand__name--footer" : "brand__name"}>
        TrioraLabs
      </span>
    </a>
  );
}
