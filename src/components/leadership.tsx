import Image from 'next/image'

export function Leadership() {
  return (
    <section className="mt-8 flex w-full max-w-3xl flex-col-reverse gap-8 sm:flex-row sm:items-center">
      <Image
        className="mx-auto aspect-video size-full rounded-xl object-cover sm:aspect-square sm:max-h-64 sm:max-w-64"
        src="/pedro.jpg"
        alt="Pastor Pedro"
        width={1600}
        height={900}
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-balance bg-gradient-to-tr from-zinc-900 via-neutral-800 to-zinc-600 bg-clip-text text-xl font-extrabold tracking-tight text-transparent lg:text-xl">
          Liderança
        </h2>
        <p className="text-balance text-sm font-medium text-zinc-600">
          A igreja é pastoreada pelo Pr. Pedro Wazen de Freitas, formado em
          Administração de empresas pela FGV-SP, bacharel em Teologia pelo SBPV.
          Mestre em Novo Testamento pelo CPAJ, mestrando em Aconselhamento
          Bíblico pelo STBL / NUTRA.
        </p>
        <p className="text-balance text-sm font-medium text-zinc-600">
          Atuou como missionário transcultural na África e como evangelista no
          Aeroporto de Guarulhos. Professor externo de Teologia Sistemática do
          SBPV.
        </p>
        <p className="text-balance text-sm font-medium text-zinc-600">
          Casado com a Daniela e pai da Ana e do João.
        </p>
      </div>
    </section>
  )
}
