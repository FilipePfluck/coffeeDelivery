import { styled } from '../../../stitches.config'

export const PaymentMethodsContainer = styled('div', {
  width: '100%',
  padding: 32,
  borderRadius: '4px',
  background: '$card',
  display: 'flex',
  flexDirection: 'column',
})

export const PaymentHeader = styled('header', {
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
    color: '$purple',
  },
})

export const ButtonsContainer = styled('div', {
  display: 'flex',
  gap: 16,
  width: '100%',
  height: 52,
  marginTop: 32,

  button: {
    width: '100%',
    justifyContent: 'flex-start',
    padding: '0 16px',
    fontSize: 12,
  },
})
