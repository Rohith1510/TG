import { cn } from "@/lib/utils";

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassmorphicCard({ children, className }: GlassmorphicCardProps) {
  return (
    <div 
      className={cn(
        "bg-white/40 backdrop-blur-md border border-white/20 shadow-lg rounded-lg overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}