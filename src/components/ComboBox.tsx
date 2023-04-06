import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ReactNode } from 'react'

interface ComboBoxProps {
  children: ReactNode
}

export function ComboBox(props: ComboBoxProps) {
  const { children } = props
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="flex flex-col gap-2 p-2 w-44 max-h-60 border border-secondaryText bg-white rounded-lg mt-2">
          <DropdownMenu.Item>item 1</DropdownMenu.Item>
          <DropdownMenu.Item>item 1</DropdownMenu.Item>
          <DropdownMenu.Item>item 1</DropdownMenu.Item>
          <DropdownMenu.Item>item 1</DropdownMenu.Item>
          <DropdownMenu.Item>item 1</DropdownMenu.Item>
          <DropdownMenu.Item>item 1</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
