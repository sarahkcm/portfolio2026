import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-32 sm:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">Page not found</h1>
      <p className="mt-4 text-ink-2">This page does not exist. It may have moved, or the link may be mistyped.</p>
      <Link href="/" className="mt-8 inline-block text-sm font-medium text-accent hover:underline">Back to home</Link>
    </section>
  );
}
