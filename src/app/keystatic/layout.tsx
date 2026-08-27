// This layout intentionally has no locale wrapping so Keystatic admin
// is served at /keystatic without any i18n middleware interference.
// It's a root layout in its own right (Next.js "multiple root layouts"
// pattern) since it sits outside the [locale] segment.
import "../globals.css";

export default function KeystaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
