import { BAND_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-3 py-6 text-center text-sm text-zinc-500 sm:px-4 sm:py-8">
      <p>
        {BAND_NAME} — {new Date().getFullYear()}
      </p>
    </footer>
  );
}
