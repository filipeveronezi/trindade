import { CubeTransparentIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export function About() {
  return (
    <section className="mt-16 flex max-w-3xl flex-col gap-4 lg:flex-row">
      <div className="flex w-full flex-1 flex-col gap-8 rounded-xl border bg-white p-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-balance bg-gradient-to-tr from-zinc-900 via-neutral-800 to-zinc-600 bg-clip-text text-center text-xl font-extrabold tracking-tight text-transparent lg:text-xl">
            Declaração de fé
          </h2>
          <p className="mx-auto max-w-md text-balance text-center text-sm font-medium text-zinc-600">
            Resumidamente, estes são os princípios e crenças fundamentais que
            norteiam nossa comunidade. Cremos:
          </p>
        </div>
        <ul className="flex flex-1 flex-col gap-5 text-sm font-medium text-zinc-950">
          <li className="flex items-center gap-2">
            <CubeTransparentIcon className="size-8" />
            <span className="w-full">
              Na inspiração verbal e plenária das Escrituras, que são inerrantes
              e infalíveis
            </span>
          </li>
          <li className="flex items-center gap-2">
            <CubeTransparentIcon className="size-8" />
            <span className="w-full">
              Na suficiente aplicação das Escrituras como única regra de fé e
              prática
            </span>
          </li>
          <li className="flex items-center gap-2">
            <CubeTransparentIcon className="size-8" />
            <span className="w-full">
              Na Trindade, uma essência que subsiste eternamente em três
              pessoas: Pai, Filho e Espírito Santo
            </span>
          </li>
          <li className="flex items-center gap-2">
            <CubeTransparentIcon className="size-8" />
            <span className="w-full">
              Em Jesus Cristo, plenamente homem e plenamente Deus, Salvador de
              todo aquele que crê
            </span>
          </li>
          <li className="flex items-center gap-2">
            <CubeTransparentIcon className="size-8" />
            <span className="w-full">
              Na salvação por meio da fé, por causa da graça e com base na obra
              de Cristo
            </span>
          </li>
          <li className="flex items-center gap-2">
            <CubeTransparentIcon className="size-8" />
            <span className="w-full">
              Na volta visível e pessoal de Jesus Cristo
            </span>
          </li>
          <li className="flex items-center gap-2">
            <CubeTransparentIcon className="size-8" />
            <span className="w-full">
              Na vida eterna para todos os que confiam em Jesus Cristo para
              salvação
            </span>
          </li>
        </ul>
        <Link
          href="declaracao-fe-ibt.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-center text-xs text-zinc-600 underline transition-colors hover:text-zinc-950"
        >
          Acessar declaração de fé completa
        </Link>
      </div>
      <div className="flex w-full flex-1 flex-col gap-8 rounded-xl border bg-white p-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-balance bg-gradient-to-tr from-zinc-900 via-neutral-800 to-zinc-600 bg-clip-text text-center text-xl font-extrabold tracking-tight text-transparent lg:text-xl">
            Características
          </h2>
          <p className="mx-auto max-w-md text-balance text-center text-sm font-medium text-zinc-600">
            Nossa igreja apresenta algumas características que a tornam única
          </p>
        </div>
        <ul className="flex flex-1 flex-col gap-4 text-xs font-medium text-zinc-950">
          <li>
            Teologia definida, com soteriologia calvinista e teologia
            não-pentecostal{' '}
            <span className="text-zinc-600">
              — mas, comungamos com irmãos que, nestas questões (e em muitas
              outras) pensam diferente de nós
            </span>
          </li>
          <li>
            Identidade Institucional definida: somos batistas{' '}
            <span className="text-zinc-600">
              — mas, comungamos com irmãos de diversas denominações
              (presbiterianos, congregacionais, assembleianos, etc...),
              respeitando diferenças em favor da unidade cristã
            </span>
          </li>
          <li>
            Liturgia informal, autêntica e simples{' '}
            <span className="text-zinc-600">
              — buscamos adorar a Deus com sinceridade, ao mesmo tempo em que
              valorizamos a ordem e a exposição bíblica.
            </span>
          </li>
          <li>
            Relacionamentos verdadeiros e amplos{' '}
            <span className="text-zinc-600">
              — ser igreja é relacionar-se e assumir os riscos que tais
              relacionamentos proporcionam. Ao mesmo tempo, buscamos a proteção
              do rebanho com a instituição da disciplina eclesiástica, praticada
              sob orientação neotestamentária.
            </span>
          </li>
          <li>
            Transparência, gente normal, vulnerabilidade instituída e
            antilegalismo{' '}
            <span className="text-zinc-600">
              — buscamos a transparência (administrativa, espiritual e
              institucional). Somos imperfeitos e admitimos, constantemente,
              nossa incapacidade. Rejeitamos quaisquer formas de legalismo (em
              roupas, costumes e valores).
            </span>
          </li>
          <li>
            Oportunidade ampla de participação no planejamento e na execução{' '}
            <span className="text-zinc-600">
              — prezamos pela participação da congregação nas decisões e na
              execução de suas atividades. Ser igreja é agir como corpo.
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
