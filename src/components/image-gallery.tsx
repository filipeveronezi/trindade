import Image from 'next/image'

export function ImageGallery() {
  return (
    <section className="grid grid-cols-2 gap-4">
      <div className="grid gap-4">
        <Image
          className="h-full w-full rounded-xl object-cover lg:rounded-2xl"
          priority
          src="/galeria-3.jpg"
          alt="Momento do café da Igreja Batista da Trindade"
          width={250}
          height={250}
        />
        <Image
          className="h-full w-full rounded-xl object-cover lg:rounded-2xl"
          priority
          src="/galeria-2.jpg"
          alt="Quadros decorativos da Igreja Batista da Trindade"
          width={250}
          height={250}
        />

        <Image
          className="h-full w-full rounded-xl object-cover lg:rounded-2xl"
          src="/galeria-4.jpg"
          alt="Membro da Igreja Batista da Trindade ajudando com a limpeza"
          width={250}
          height={250}
        />
      </div>
      <div className="grid gap-4">
        <Image
          className="h-full w-full rounded-xl object-cover lg:rounded-2xl"
          priority
          src="/galeria-1.jpg"
          alt="Pastor Pedro lecionando na Escola Bíblica Dominical"
          width={250}
          height={250}
        />
        <Image
          className="h-full w-full rounded-xl object-cover lg:rounded-2xl"
          src="/galeria-6.jpg"
          alt="A Bíblia Sagrada"
          width={250}
          height={250}
        />
        <Image
          className="h-full w-full rounded-xl object-cover lg:rounded-2xl"
          src="/galeria-5.jpg"
          alt="Culto da Igreja Batista da Trindade"
          width={250}
          height={250}
        />
      </div>
    </section>
  )
}
