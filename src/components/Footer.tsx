import { BAND_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-4 py-8 text-center text-sm text-zinc-500">
      <p>
        {BAND_NAME} — {new Date().getFullYear()}
      </p>
    </footer>
  );
}
