type PageIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  noWrapDesktop?: boolean;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  className,
  noWrapDesktop = true,
}: PageIntroProps) {
  return (
    <div className={`max-w-6xl ${className || ""}`}>
      <p className="section-kicker">{eyebrow}</p>
      <h1
        className={`mt-4 max-w-none font-serif text-4xl leading-tight tracking-[-0.02em] text-stone sm:text-5xl lg:text-[2.85rem] xl:text-5xl ${
          noWrapDesktop ? "lg:whitespace-nowrap" : ""
        }`}
      >
        {title}
      </h1>
      {description ? (
        <p className="mt-5 max-w-4xl text-base leading-8 text-stone/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
