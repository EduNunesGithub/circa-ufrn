import { DownloadItem } from "@/components/download-item";
import { Entrance } from "@/components/entrance";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { reports, reportsContent } from "@/lib/results/reports";

export function ResultsReports() {
  const { body, overline, title } = reportsContent;

  return (
    <section aria-labelledby="results-reports-title" className="bg-bg-alt">
      <Entrance
        className="gap-block max-w-page px-gutter py-section wide:grid wide:grid-cols-3 wide:items-start mx-auto flex flex-col"
        entrance="slide"
      >
        <SectionHeader
          description={body}
          descriptionOnMobile={false}
          overline={overline}
          title={title}
          titleId="results-reports-title"
        />
        <Stagger className="border-border wide:col-span-2 flex flex-col border-t">
          {reports.map((report, index) => (
            <StaggerItem key={index}>
              <DownloadItem {...report} />
            </StaggerItem>
          ))}
        </Stagger>
      </Entrance>
    </section>
  );
}
