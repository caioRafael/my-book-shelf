import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export function Carousel() {
  return (
    <div className="h-44 w-[30%] rounded-md bg-carousel opacity-75 p-3 text-white flex flex-col justify-between">
      <div className="flex flex-col justify-center gap-2">
        <h1 className={`${inter.className} font-bold text-lg`}>Today Quote</h1>
        <p>
          “There is more treasure in books than in all the pirat loot on
          Treasure Island.”
        </p>
        <p className="flex self-end">-Walt Disney</p>
      </div>
      <div className="flex gap-2">
        <div className="w-3 h-3 border border-white rounded-full bg-white" />
        <div className="w-3 h-3 border border-white rounded-full" />
        <div className="w-3 h-3 border border-white rounded-full" />
      </div>
    </div>
  )
}
