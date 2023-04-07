import { Carousel } from '../components/Carousel'
import { NewArrivalsContainer } from '../components/NewArrivalsContainer'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col gap-7 max-w-full h-[90%] bg-background rounded-xl p-7">
      <div className="flex w-full gap-10">
        <Carousel />
        <NewArrivalsContainer />
      </div>
      <h1 className={`${inter.className} text-4xl font-semibold`}>Hello!</h1>
      {/* <section className="flex max-w-full  flex-col">
        <h1>Recommended for You</h1>
        <div className="flex flex-row gap-3 max-w-full h-60">
          <Card />
          <Card />
          <Card />
        </div>
      </section> */}
    </div>
  )
}
