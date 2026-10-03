import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="font-display text-52 font-semibold text-ink">
        This page took a different path.
      </h1>
      <p>The link may be out of date. Head back to the TrioraLabs homepage.</p>
      <ButtonLink href="/">Return home</ButtonLink>
    </main>
  );
}
