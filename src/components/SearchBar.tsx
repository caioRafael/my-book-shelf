'use client'
import * as Toolbar from '@radix-ui/react-toolbar'
import { ComboBox } from './ComboBox'
import { ChevronDown, Search } from 'lucide-react'
import { useState } from 'react'

export function SearchBar() {
  const [selected, setSelected] = useState<string>('All')
  return (
    <Toolbar.Root className="w-1/3 h-12 border rounded-full border-secondaryText flex">
      <ComboBox options={option} onChange={setSelected}>
        <Toolbar.Button className="h-full w-[20%] rounded-l-full flex items-center justify-around">
          {selected}
          <ChevronDown size={20} />
        </Toolbar.Button>
      </ComboBox>
      <div className="w-[80%] h-full bg-white rounded-r-full flex items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="h-full w-[85%] p-2"
        />
        <Search size={20} className="text-orange" />
      </div>
    </Toolbar.Root>
  )
}

const option = [
  {
    key: 'all',
    text: 'All',
  },
  {
    key: 'title',
    text: 'Title',
  },
  {
    key: 'autor',
    text: 'Autor',
  },
  {
    key: 'text',
    text: 'Text',
  },
  {
    key: 'subjects',
    text: 'Subjects',
  },
]
