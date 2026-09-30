import { ResponsiveCopy } from "@/components/responsive-copy";
import { StatusBadge } from "@/components/status-badge";
import { cn } from "@/lib/cn";
import { actionAreas, areasContent } from "@/lib/results/areas";

const headClassName = "typo-meta text-text pb-item text-left uppercase";

const cellClassName = "py-inset pr-block align-middle";

export function AreasTable() {
  const { area, hectares, region, start, status, type } = areasContent.columns;
  const headings = [
    { className: "w-1/4", label: area },
    { className: "w-1/6", label: region },
    { className: "w-1/6", label: type },
    { className: "w-28", label: hectares },
    { className: "w-28", label: start },
  ];

  return (
    <table className="wide:table hidden w-full table-fixed">
      <thead className="border-border-strong border-b">
        <tr>
          {headings.map(({ className, label }) => (
            <th
              className={cn(headClassName, "pr-block", className)}
              key={label}
              scope="col"
            >
              {label}
            </th>
          ))}
          <th className={headClassName} scope="col">
            {status}
          </th>
        </tr>
      </thead>
      <tbody>
        {actionAreas.map((item) => (
          <tr className="border-border border-b" key={item.name}>
            <th
              className={cn(
                "typo-card-title text-text text-left",
                cellClassName,
              )}
              scope="row"
            >
              {item.name}
            </th>
            <td className={cn("text-text", cellClassName)}>{item.region}</td>
            <td className={cn("text-text-2", cellClassName)}>
              <ResponsiveCopy copy={item.type} />
            </td>
            <td className={cn("typo-meta text-text", cellClassName)}>
              {item.hectares}
            </td>
            <td className={cn("typo-meta text-text", cellClassName)}>
              {item.start}
            </td>
            <td className="py-inset align-middle">
              <StatusBadge status={item.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
