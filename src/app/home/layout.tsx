import { ReactNode } from 'react'
import { Sidebar } from './components/Sidebar'

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
    <div className="w-[90%] h-[90%] bg-background rounded-xl flex">
      <Sidebar />
      {children}
    </div>
  )
}
