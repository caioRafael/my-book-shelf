import { SearchBar } from '@/components/SearchBar'
import { LanguageSelector } from './LanguageSelector'

export function HeaderPage() {
  return (
    <header className="flex w-full h-20 items-center justify-between gap-12 p-7">
      <SearchBar />
      <LanguageSelector />
    </header>
  )
}
