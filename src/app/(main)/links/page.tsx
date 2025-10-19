import Link from "next/link";

export default function LinksPage() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-screen-2xl flex-col items-center overflow-y-hidden px-4 py-20">
      <h1 className="w-full py-6 text-2xl font-bold">
        Links e informações úteis
      </h1>
      <ul className="flex w-full max-w-screen-md flex-col gap-4">
        <li className="flex flex-col gap-2">
          <h2 className="font-bold">Endereço</h2>
          <Link
            className="text-zinc-600 decoration-zinc-500 underline-offset-2 transition-colors hover:text-zinc-950 hover:underline"
            href="https://maps.app.goo.gl/mXB2g3v6bvJuB1fW6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Rua Sueli Aparecida Leite Nogueira, 569</p>
            <p>Ribeirão dos Porcos - Atibaia, SP</p>
          </Link>
        </li>
      </ul>
    </main>
  )
}