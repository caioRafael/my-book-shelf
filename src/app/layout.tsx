import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'My Book Shelf',
  description: 'book shelf',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props
  return (
    <html lang="en">
      <body className="bg-app bg-cover flex items-center justify-center w-full h-[100vh]">
        {children}
      </body>
    </html>
  )
}
