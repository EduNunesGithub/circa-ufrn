type ResponsiveLabelProps = {
  full: string;
  short: string;
};

export function ResponsiveLabel({ full, short }: ResponsiveLabelProps) {
  return (
    <>
      <span className="desktop:hidden">{short}</span>
      <span className="desktop:inline hidden">{full}</span>
    </>
  );
}
