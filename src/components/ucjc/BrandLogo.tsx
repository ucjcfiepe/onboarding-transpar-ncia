import horizontalBranca from "@/assets/fiepe-horizontal-branca.png.asset.json";
import empilhadaBranca from "@/assets/fiepe-empilhada-branca.png.asset.json";
import horizontalColorida from "@/assets/fiepe-horizontal-colorida.png.asset.json";
import empilhadaColorida from "@/assets/fiepe-empilhada-colorida.png.asset.json";
import { cn } from "@/lib/utils";

const ALT = "Sistema FIEPE — FIEPE, IEL, CIEPE, SENAI, SESI";

export function BrandLogo({
  variant = "color",
  className,
  horizontalClassName = "h-5 sm:h-6",
  stackedClassName = "h-9",
}: {
  variant?: "light" | "color";
  className?: string;
  horizontalClassName?: string;
  stackedClassName?: string;
}) {
  const horizontal = variant === "light" ? horizontalBranca : horizontalColorida;
  const stacked = variant === "light" ? empilhadaBranca : empilhadaColorida;

  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src={horizontal.url}
        alt={ALT}
        loading="lazy"
        decoding="async"
        className={cn("hidden w-auto sm:block", horizontalClassName)}
      />
      <img
        src={stacked.url}
        alt={ALT}
        loading="lazy"
        decoding="async"
        className={cn("w-auto sm:hidden", stackedClassName)}
      />
    </span>
  );
}
