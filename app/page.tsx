import { cn } from "@/lib/cn";

export default function Home() {
  const isHighlighted = true;

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <h1
        className={cn(
          "text-2xl font-semibold",
          isHighlighted && "text-blue-600",
          "text-3xl",
        )}
      >
        App
      </h1>
    </main>
  );
}
