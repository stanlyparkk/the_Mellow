type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  noWrapDesktop?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  noWrapDesktop = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="section-kicker">{eyebrow}</p>
      <h2 className={`section-title mt-4 ${noWrapDesktop ? "lg:whitespace-nowrap" : ""}`}>
        {title}
      </h2>
      <p className="section-copy mt-5">{description}</p>
    </div>
  );
}
