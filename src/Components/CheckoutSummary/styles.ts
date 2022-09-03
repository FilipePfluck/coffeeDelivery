import { styled } from '../../../stitches.config'

export const CheckoutSummaryContainer = styled('section', {
  padding: 32,
  borderRadius: '4px 32px 4px 32px',
  background: '$card',
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 'auto',
  width: 400,

  '@bp2': {
    width: '100%',
  },
})

export const CoffeeItem = styled('div', {
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  padding: 4,
  paddingBottom: 20,
  marginBottom: 16,
  borderBottom: '1px solid $button',
  width: '100%',

  '>div': {
    display: 'flex',
    flexDirection: 'column',
  },

  span: {
    fontWeight: 'bold',
    marginBottom: 'auto',
  },

  '@bp1': {
    flexDirection: 'column',
  },
})

export const ActionsContainer = styled('div', {
  display: 'flex',
  gap: 8,
  marginTop: 8,
})

export const DeleteButton = styled('button', {
  background: '$button',
  borderRadius: 8,
  padding: '0 8px',
  fontSize: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  color: '$text',

  svg: {
    color: '$purple',
  },

  transition: '0.2s',

  '&:hover': {
    background: '$hover',
  },
})

export const Subtotal = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: 8,

  div: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  strong: {
    fontSize: 20,
    color: '$subtitle',
  },
})

export const ConfirmButton = styled('button', {
  width: '100%',
  marginTop: 24,
  background: '$yellow',
  color: '$white',
  fontWeight: 'bold',
  borderRadius: 8,
  padding: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.2s',

  '&:hover': {
    background: '$yellowDark',
  },
})

export const EmptyState = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  width: '100%',
  marginBottom: 32,

  a: {
    textDecoration: 'none',
    color: '$purple',
    marginTop: 8,
  },
})
