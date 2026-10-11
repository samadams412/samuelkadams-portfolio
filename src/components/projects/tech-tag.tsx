import { techIcons } from "@/lib/tech-icons";

export function TechTag({ label }: { label: string }) {
  const Icon = techIcons[label];

  return (
    <li className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
      {Icon ? <Icon className="h-3.5 w-3.5" aria-hidden="true" /> : null}
      {label}
    </li>
  );
}
