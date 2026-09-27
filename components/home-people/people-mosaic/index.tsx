import { PhotoTile } from "@/components/photo-tile";
import { peoplePhotos } from "@/lib/home/people";

const tileSizes = "(min-width: 45rem) 25vw, 50vw";

export function PeopleMosaic() {
  const { community, lab, monitoring, nursery, planting, workshop } =
    peoplePhotos;

  return (
    <div className="gap-item desktop:h-150 flex h-104">
      <div className="gap-item flex min-w-0 flex-3 flex-col">
        <PhotoTile {...nursery} className="flex-1" sizes={tileSizes} />
        <PhotoTile {...lab} className="desktop:h-50 h-40" sizes={tileSizes} />
      </div>
      <div className="gap-item flex min-w-0 flex-3 flex-col">
        <PhotoTile
          {...monitoring}
          className="desktop:h-58 h-40"
          sizes={tileSizes}
        />
        <PhotoTile
          {...planting}
          className="desktop:flex hidden flex-1"
          sizes={tileSizes}
        />
        <PhotoTile
          {...community}
          className="desktop:hidden flex-1"
          sizes={tileSizes}
        />
      </div>
      <div className="gap-item desktop:flex hidden min-w-0 flex-2 flex-col">
        <PhotoTile {...community} className="flex-1" sizes={tileSizes} />
        <PhotoTile {...workshop} className="h-44" sizes={tileSizes} />
      </div>
    </div>
  );
}
