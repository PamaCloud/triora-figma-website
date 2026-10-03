interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  titleId?: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className="font-display text-36 font-semibold tracking-tight text-ink md:text-52"
        id={titleId}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-prose text-16 leading-16 text-body">
          {description}
        </p>
      )}
    </div>
  );
}
