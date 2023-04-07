import Image from 'next/image'

export function Card() {
  return (
    <div className="w-32 h-full bg-white border border-secondaryText rounded-md p-2">
      <Image
        src={'/capa.jpg'}
        alt="capa"
        className="w-full h-full rounded-md"
        width={1000}
        height={1000}
      />
    </div>
  )
}
