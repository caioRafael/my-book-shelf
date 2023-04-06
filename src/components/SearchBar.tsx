'use client'
import * as Toolbar from '@radix-ui/react-toolbar'
import { ComboBox } from './ComboBox'

export function SearchBar() {
  return (
    <Toolbar.Root className="w-1/3 h-12 border rounded-full border-secondaryText">
      <ComboBox>
        <Toolbar.Button className="h-full w-[20%] rounded-l-full">
          All
        </Toolbar.Button>
      </ComboBox>
      <input
        type="text"
        placeholder="Search"
        className="h-full w-[80%] rounded-r-full"
      />
    </Toolbar.Root>
  )
}
