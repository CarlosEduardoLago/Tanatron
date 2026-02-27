import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-page px-4 text-center">
      <h1 className="font-logo text-4xl tracking-widest text-white">404</h1>
      <p className="text-zinc-400">Página não encontrada.</p>
      <Link
        href="/"
        className="text-amber-500 underline hover:text-amber-400"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
