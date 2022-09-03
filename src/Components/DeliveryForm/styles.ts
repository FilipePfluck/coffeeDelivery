import { styled } from '../../../stitches.config'

export const FormContainer = styled('div', {
  width: '100%',
  padding: 32,
  borderRadius: '4px',
  background: '$card',
  display: 'flex',
  flexDirection: 'column',
})

export const FormHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,

  div: {
    display: 'flex',
    flexDirection: 'column',
  },

  p: {
    color: '$subtitle',
  },

  span: {
    fontSize: 14,
  },

  svg: {
    color: '$yellowDark',
  },
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  width: '100%',
  marginTop: 32,
})

export const InputRow = styled('div', {
  display: 'flex',
  gap: 16,
  width: '100%',

  '@bp1': {
    flexDirection: 'column',
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

  '&::placeholder': {
    color: '$label',
    fontSize: 14,
  },

  variants: {
    size: {
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
