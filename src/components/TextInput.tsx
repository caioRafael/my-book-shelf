'use client'

import { Inter } from 'next/font/google'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

interface TextInputProps {
  label?: string
  type?: string
  placeholder?: string
  isPassword?: boolean
}

export function TextInput(props: TextInputProps) {
  const { label, type, isPassword, placeholder } = props
  const [inputType, setInputType] = useState<string>(type || 'text')

  const alterType = () => {
    if (inputType === 'text') {
      setInputType('password')
    } else {
      setInputType('text')
    }
  }
  return (
    <div className="flex flex-col gap-0">
      <p className={`${inter.className} font-semibold`}>{label}</p>
      <div className="h-[40px] w-full border border-secondaryText rounded-md flex">
        <input
          type={inputType}
          className="h-full shadow-none w-full rounded-md p-2"
          placeholder={placeholder}
        />
        {isPassword && (
          <button
            className="w-8 flex justify-center items-center"
            onClick={alterType}
          >
            {inputType === 'password' ? (
              <Eye size={20} />
            ) : (
              <EyeOff size={20} />
            )}
          </button>
        )}
      </div>
    </div>
  )
}
