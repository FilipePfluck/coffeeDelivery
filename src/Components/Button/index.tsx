import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean
  children: ReactNode
}

export const Button = ({ children, isSelected, ...props }: ButtonProps) => {
  return (
    <S.Button isSelected={isSelected} {...props}>
      {children}
    </S.Button>
  )
}
