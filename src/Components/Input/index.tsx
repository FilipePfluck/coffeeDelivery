import { InputHTMLAttributes } from 'react'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: any
  inputSize?: 'small' | 'extraSmall' | 'auto'
}

export const Input = ({ error, inputSize, ...props }: InputProps) => {
  return (
    <S.InputContainer inputSize={inputSize}>
      <S.Input hasError={!!error} {...props} />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.InputContainer>
  )
}
