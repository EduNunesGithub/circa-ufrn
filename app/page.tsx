import { cn } from "@/lib/cn";

export default function Home() {
  const isHighlighted = true;

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <h1 className={cn(isHighlighted && "text-blue-600")}>App</h1>
    </main>
  );
}
