import { cn } from "@/lib/cn";

export default function Home() {
  const isHighlighted = true;

  return (
    <main className="px-gutter py-section flex min-h-screen items-center justify-center">
      <h1 className={cn(isHighlighted && "text-secondary")}>App</h1>
    </main>
  );
}
