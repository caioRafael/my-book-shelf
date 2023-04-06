'use client'
import * as Toolbar from '@radix-ui/react-toolbar'
import { ComboBox } from './ComboBox'
import { ChevronDown } from 'lucide-react'
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
      <input
        type="text"
        placeholder="Search"
        className="h-full w-[80%] rounded-r-full p-2"
      />
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
