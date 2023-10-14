import Link from 'next/link'

export default function Contact() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-screen-2xl flex-col items-center overflow-y-hidden px-4 py-20">
      <h1 className="mt-6 text-center text-xl font-extrabold tracking-tight lg:text-3xl">
        Contato
      </h1>
      <div className="flex flex-col gap-4 py-5">
        <div className="flex flex-col gap-1">
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
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">E-mail</h2>
          <Link
            className="text-cyan-600 decoration-cyan-700 underline-offset-2 transition-colors hover:text-cyan-700 hover:underline"
            href="mailto:contato@batistatrindade.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>contato@batistatrindade.com.br</span>
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">Telefone</h2>
          <Link
            className="text-cyan-600 decoration-cyan-700 underline-offset-2 transition-colors hover:text-cyan-700 hover:underline"
            href="https://api.whatsapp.com/send?phone=5511987713322"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>(11) 98771 3322</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
