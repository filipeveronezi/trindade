import Image from 'next/image'

export function ImageGallery() {
  return (
    <section className="grid grid-cols-2 gap-4">
      <div className="grid max-w-xs gap-4">
        <Image
          className="aspect-square rounded-xl object-cover"
          priority
          src="/galeria-3.jpg"
          alt="Momento do café da Igreja Batista da Trindade"
          width={300}
          height={300}
        />
        <Image
          className="aspect-[9/16] rounded-xl object-cover"
          priority
          src="/galeria-2.jpg"
          alt="Quadros decorativos da Igreja Batista da Trindade"
          width={300}
          height={300}
        />

        <Image
          className="aspect-square rounded-xl object-cover"
          src="/galeria-4.jpg"
          alt="Membro da Igreja Batista da Trindade ajudando com a limpeza"
          width={300}
          height={300}
        />
      </div>
      <div className="grid max-w-xs gap-4">
        <Image
          className="aspect-[9/16] rounded-xl object-cover"
          priority
          src="/galeria-1.jpg"
          alt="Pastor Pedro lecionando na Escola Bíblica Dominical"
          width={300}
          height={300}
        />
        <Image
          className="aspect-square rounded-xl object-cover"
          src="/galeria-6.jpg"
          alt="A Bíblia Sagrada"
          width={300}
          height={300}
        />
        <Image
          className="aspect-square rounded-xl object-cover"
          src="/galeria-5.jpg"
          alt="Culto da Igreja Batista da Trindade"
          width={300}
          height={300}
        />
      </div>
    </section>
  )
}
