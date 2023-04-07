import { Inter } from 'next/font/google'
import { Card } from './Card'
const inter = Inter({ subsets: ['latin'] })

export function NewArrivalsContainer() {
  return (
    <div className="flex h-44 w-[65%] bg-carousel opacity-75 p-[2px] rounded-md">
      <div className="w-[58px] h-full flex whitespace-nowrap items-center justify-center">
        <h1 className={`${inter.className} font-bold -rotate-90 text-white`}>
          New Arrivals
        </h1>
      </div>
      <div className="flex w-full h-full bg-white rounded-r-md p-2 gap-2">
        <Card />
        <Card />
      </div>
    </div>
  )
}
