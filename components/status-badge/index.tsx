import { cn } from "@/lib/cn";

export type ProjectStatus = "active" | "done" | "planned";

type StatusBadgeProps = {
  status: ProjectStatus;
};

const statuses: Record<ProjectStatus, { className: string; label: string }> = {
  active: { className: "bg-success-soft text-success", label: "Em andamento" },
  done: { className: "bg-bg-alt text-text-2", label: "Concluído" },
  planned: { className: "bg-warning-soft text-warning", label: "Planejado" },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const { className, label } = statuses[status];

  return (
    <span
      className={cn(
        "typo-caption-strong gap-control px-control flex h-6 w-fit items-center rounded-full",
        className,
      )}
    >
      <span aria-hidden className="size-2 rounded-full bg-current" />
      {label}
    </span>
  );
}
