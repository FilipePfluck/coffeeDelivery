import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <S.Button {...props}> {children} </S.Button>
}
