interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function SectionHeader({ title, subtitle, description }: SectionHeaderProps) {
  return (
    <div className="text-center w-full flex flex-col items-center">
      {subtitle && (
        <p className="text-sm font-medium uppercase tracking-label-wide text-foreground mb-4">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
