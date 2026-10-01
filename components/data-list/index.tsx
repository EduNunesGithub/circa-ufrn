import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";

export type DataRow = {
  desktopOnly?: boolean;
  label: string;
  value: Copy;
};

type DataListProps = {
  rows: DataRow[];
  stackOnWide?: boolean;
};

export function DataList({ rows, stackOnWide = false }: DataListProps) {
  return (
    <dl className="flex flex-col">
      {rows.map(({ desktopOnly = false, label, value }) => (
        <div
          className={cn(
            "border-border-subtle gap-item py-inset flex border-b",
            stackOnWide && "wide:flex-col wide:gap-0",
            desktopOnly && "desktop:flex hidden",
          )}
          key={label}
        >
          <dt
            className={cn(
              "typo-meta text-text-muted shrink-0 uppercase",
              stackOnWide ? "wide:w-auto w-22" : "desktop:w-30 w-26",
            )}
          >
            {label}
          </dt>
          <dd className="text-text min-w-0 flex-1">
            <ResponsiveCopy copy={value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
