import { styled } from '../../../stitches.config'

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  variants: {
    inputSize: {
      extraSmall: {
        width: 60,
        '@bp1': {
          width: '100%',
        },
      },
      small: {
        width: 200,
        '@bp1': {
          width: '100%',
        },
      },
      auto: {
        flex: 1,
      },
    },
  },
})

export const Input = styled('input', {
  display: 'flex',
  height: 42,
  minHeight: 42,
  padding: 12,
  borderRadius: 4,
  background: '$input',
  border: '1px solid $hover',
  outline: 0,
  width: '100%',

  '&::placeholder': {
    color: '$label',
    fontSize: 14,
  },

  variants: {
    hasError: {
      true: {
        border: '1px solid $red',
      },
    },
  },
})

export const ErrorMessage = styled('p', {
  fontSize: 12,
  color: '$red',
  margin: '8px 0',
})
