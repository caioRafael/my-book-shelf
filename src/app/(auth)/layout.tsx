import { ReactNode } from 'react'
import { Sidebar } from './components/Sidebar'
import { HeaderPage } from './components/HeaderPage'

export const metadata = {
  title: 'My Book Shelf',
  description: 'book shelf',
}

interface HomeLayoutProps {
  children: ReactNode
}

export default function HomeLayout(props: HomeLayoutProps) {
  const { children } = props
  return (
    <div className="w-[90%] h-[90%] bg-background rounded-xl flex shadow-2xl">
      <Sidebar />
      <div className="flex flex-col w-full">
        <HeaderPage />
        {children}
      </div>
    </div>
  )
}
