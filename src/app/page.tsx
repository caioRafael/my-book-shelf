import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TextInput } from '@/components/TextInput'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col w-[460px] h-4/5 bg-white rounded-xl shadow-2xl gap-6">
      <Image src={'./logo.svg'} alt="logo" width={150} height={92} />
      <section className="flex flex-col gap-3">
        <header className="flex flex-col items-center gap-6">
          <h1 className={`${inter.className} text-text`}>Welcome Back!</h1>
          <p className="text-secondaryText">
            Sign in to continue to yourDigital Library
          </p>
        </header>
        <div className="flex flex-col gap-3">
          <TextInput label="Email" type="text" />
          <TextInput label="Password" type="password" isPassword />
          <Link
            href={'/home'}
            className="h-[40px] w-full bg-orange text-white flex items-center justify-center rounded-md"
          >
            <p className={`${inter.className} font-semibold`}>Login</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
