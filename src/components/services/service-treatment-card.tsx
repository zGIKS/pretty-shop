import Image from "next/image";

type ServiceTreatmentCardProps = {
  name: string;
  description: string;
  image?: string;
};

export function ServiceTreatmentCard({
  name,
  description,
  image,
}: ServiceTreatmentCardProps) {
  return (
    <article className="group flex h-full flex-col">
      {image ? (
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted/40">
          <Image
            src={image}
            alt={name}
            width={900}
            height={900}
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}
      <div className="flex grow flex-col gap-3 px-1 pt-4">
        <h3 className="text-xl leading-tight tracking-tight">{name}</h3>
        <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
    </article>
  );
}
