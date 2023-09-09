import Image from 'next/image'
import { Balancer } from 'react-wrap-balancer'

export function Leadership() {
  return (
    <section className="mt-8 flex w-full max-w-3xl flex-col-reverse gap-8 sm:flex-row sm:items-center">
      <Image
        className="mx-auto aspect-video h-full w-full rounded-xl object-cover sm:aspect-square sm:max-h-64 sm:max-w-[16rem]"
        src="/pedro.jpg"
        alt="Pastor Pedro"
        width={1600}
        height={900}
      />
      <div className="flex flex-col gap-4">
        <h2 className="bg-gradient-to-tr from-zinc-900 via-neutral-800 to-zinc-600 bg-clip-text text-xl font-extrabold tracking-tight text-transparent lg:text-xl">
          <Balancer>Liderança</Balancer>
        </h2>
        <p className="text-sm font-medium text-zinc-600">
          <Balancer>
            A igreja é pastoreada pelo Pr. Pedro Wazen de Freitas, formado em
            Administração de empresas pela FGV-SP, bacharel em Teologia pelo
            SBPV. Mestre em Novo Testamento pelo CPAJ, mestrando em
            Aconselhamento Bíblico pelo STBL / NUTRA.
          </Balancer>
        </p>
        <p className="text-sm font-medium text-zinc-600">
          <Balancer>
            Atuou como missionário transcultural na África e como evangelista no
            Aeroporto de Guarulhos. Professor externo de Teologia Sistemática do
            SBPV.
          </Balancer>
        </p>
        <p className="text-sm font-medium text-zinc-600">
          <Balancer>Casado com a Daniela e pai da Ana e do João.</Balancer>
        </p>
      </div>
    </section>
  )
}
