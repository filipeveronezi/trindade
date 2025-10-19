import Image from 'next/image'

export function ImageGallery() {
  return (
    <section className="grid grid-cols-2 gap-2 lg:gap-4">
      <div className="grid max-w-xs gap-2 lg:gap-4">
        <Image
          className="aspect-square rounded-xl border bg-white object-cover p-1"
          priority
          src="/galeria-3.jpg"
          alt="Momento do café da Igreja Batista da Trindade"
          width={300}
          height={300}
        />
        <Image
          className="aspect-[9/16] rounded-xl border bg-white object-cover p-1"
          priority
          src="/galeria-2.jpg"
          alt="Quadros decorativos da Igreja Batista da Trindade"
          width={300}
          height={300}
        />
      </div>
      <div className="grid max-w-xs gap-2 lg:gap-4">
        <Image
          className="aspect-[9/16] rounded-xl border bg-white object-cover p-1"
          priority
          src="/galeria-1.jpg"
          alt="Pastor Pedro lecionando na Escola Bíblica Dominical"
          width={300}
          height={300}
        />
        <Image
          className="aspect-square rounded-xl border bg-white object-cover p-1"
          src="/galeria-6.jpg"
          alt="A Bíblia Sagrada"
          width={300}
          height={300}
        />
      </div>
      <div className="col-span-2 w-full">
        <Image
          className="aspect-[16/6] w-full rounded-xl border bg-white object-cover p-1"
          priority
          src="/igreja-2025.jpg"
          alt="Igreja Batista da Trindade"
          width={500}
          height={500}
        />
      </div>
    </section>
  )
}
