'use client'
import { Home, Search, Library, Gift } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Sidebar() {
  const path = usePathname()

  return (
    <aside className="h-full w-[300px] flex flex-col items-center bg-white rounded-l-xl pt-10 pb-4 justify-between">
      <div className="flex gap-14 flex-col">
        <Image src={'./logo.svg'} alt="logo" width={120} height={74} />
        <section className="flex flex-col gap-4">
          <Link
            href="/home"
            className={`${
              path === '/home' ? 'text-text' : 'text-secondaryText'
            } flex gap-1`}
          >
            <Home size={20} />
            Home
          </Link>
          <Link
            href="/home"
            className={`${
              path === '/search' ? 'text-text' : 'text-secondaryText'
            } flex gap-1`}
          >
            <Search size={20} />
            Search
          </Link>
          <Link
            href="/home"
            className={`${
              path === '/my-shelf' ? 'text-text' : 'text-secondaryText'
            } flex gap-1`}
          >
            <Library size={20} />
            My shelf
          </Link>
          <Link
            href="/home"
            className={`${
              path === '/contribute' ? 'text-text' : 'text-secondaryText'
            } flex gap-1`}
          >
            <Gift size={20} />
            Contribute
          </Link>
        </section>
      </div>

      <div className="flex flex-col gap-1">
        <p>About</p>
        <p>Support</p>
        <p>Terms & Condition</p>
      </div>
    </aside>
  )
}
