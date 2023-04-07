'use client'
import { ComboBox } from '@/components/ComboBox'
import { ChevronDown, Languages } from 'lucide-react'
import { useState } from 'react'

export function LanguageSelector() {
  const [lang, setLang] = useState<string>('En')
  return (
    <ComboBox options={language} onChange={setLang}>
      <button className="flex items-center justify-center gap-4 w-32 h-12 bg-white rounded-full border border-secondaryText">
        <Languages size={20} className="text-orange" />
        {lang}
        <ChevronDown size={20} />
      </button>
    </ComboBox>
  )
}

const language = [
  {
    key: 'pt-br',
    text: 'Pt-br',
  },
  {
    key: 'en',
    text: 'En',
  },
]
