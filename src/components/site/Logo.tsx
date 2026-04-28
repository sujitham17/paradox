import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  withText?: boolean;
  light?: boolean;
}

export default function Logo({ className, withText = true, light = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2 group", className)}>
      <div className="relative h-12 w-12 md:h-16 md:w-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <img 
          src="/logo.png" 
          alt="Paradox Logo" 
          className={cn(
            "h-full w-full object-contain scale-[1.35]",
            light ? "brightness-150 drop-shadow-md" : "mix-blend-multiply brightness-110 contrast-125"
          )}
        />
      </div>
      {withText && (
        <div className="flex items-center">
          <div className="h-6 md:h-7 w-[120px] md:w-[140px] overflow-visible flex items-center">
            <img 
              src="/paradox-text.png" 
              alt="Paradox" 
              className={cn(
                "h-auto w-full object-contain scale-[1.15] transition-all duration-300",
                light ? "invert brightness-200 contrast-200" : "mix-blend-multiply brightness-110 contrast-125"
              )}
            />
          </div>
          <span className={cn(
            "font-sans text-[11px] uppercase tracking-[0.25em] ml-2 hidden sm:inline transition-opacity duration-300",
            light ? "text-background/50" : "text-muted-foreground"
          )}>
            / AGENCY
          </span>
        </div>
      )}
    </div>
  );
}
