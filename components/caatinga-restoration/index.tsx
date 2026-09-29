import { ButtonLink } from "@/components/button-link";
import { Entrance } from "@/components/entrance";
import { MediaFrame } from "@/components/media-frame";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { SectionHeader } from "@/components/section-header";
import {
  restorationContent,
  restorationImages,
} from "@/lib/caatinga/restoration";

export function CaatingaRestoration() {
  const { description, overline, primaryAction, secondaryAction, title } =
    restorationContent;

  return (
    <section aria-labelledby="caatinga-restoration-title">
      <Entrance
        className="gap-group max-w-page px-gutter py-section wide:grid wide:grid-cols-12 wide:items-center wide:gap-block mx-auto flex flex-col"
        entrance="rise"
      >
        <div className="gap-group wide:col-span-5 wide:flex wide:flex-col contents">
          <div className="order-1">
            <SectionHeader
              overline={overline}
              title={title}
              titleId="caatinga-restoration-title"
            />
          </div>
          <p className="text-text-2 order-3">
            <ResponsiveCopy copy={description} />
          </p>
          <div className="gap-item desktop:flex-row desktop:flex-wrap order-4 flex flex-col">
            <ButtonLink href={primaryAction.href} label={primaryAction.label} />
            <ButtonLink
              href={secondaryAction.href}
              label={secondaryAction.label}
              variant="outline"
            />
          </div>
        </div>
        <ul className="gap-item wide:order-none wide:col-span-7 order-2 grid grid-cols-2">
          {restorationImages.map((image) => (
            <li key={image.src}>
              <MediaFrame
                appear
                className="desktop:h-80 wide:h-100 h-50 rounded-sm"
                image={image}
                sizes="(min-width: 56.75rem) 30vw, 50vw"
              />
            </li>
          ))}
        </ul>
      </Entrance>
    </section>
  );
}
