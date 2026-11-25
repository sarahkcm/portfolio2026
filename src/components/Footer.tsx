import { site } from "@/content/profile";

export function Footer() {
  return (
    <footer className="bg-night text-night-2">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/10 px-5 py-7 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>All project material uses public or synthetic data only.</p>
      </div>
    </footer>
  );
}
