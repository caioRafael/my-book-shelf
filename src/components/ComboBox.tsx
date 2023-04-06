import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ReactNode } from 'react'

interface IComboboxOptions {
  key: string | number
  text: string
}
interface ComboBoxProps {
  children: ReactNode
  options: IComboboxOptions[]
  onChange: (item: string) => void
}

export function ComboBox(props: ComboBoxProps) {
  const { children, options, onChange } = props
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="flex flex-col gap-2 p-2 w-44 max-h-60 border border-secondaryText bg-white rounded-lg mt-2">
          {options?.map((item) => (
            <DropdownMenu.Item
              key={item.key}
              onClick={() => onChange(item.text as string)}
            >
              {item.text}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
