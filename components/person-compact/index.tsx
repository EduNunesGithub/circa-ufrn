import Image from "next/image";

import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";

export type Person = {
  avatar: string;
  name: string;
  role: Copy;
};

export function PersonCompact({ avatar, name, role }: Person) {
  return (
    <span className="gap-item flex items-center">
      <Image
        alt=""
        className="size-10 shrink-0 rounded-full object-cover"
        height={40}
        src={avatar}
        width={40}
      />
      <span className="flex flex-col">
        <span className="typo-label-strong text-text">{name}</span>
        <span className="typo-caption text-text-muted">
          <ResponsiveCopy copy={role} />
        </span>
      </span>
    </span>
  );
}
