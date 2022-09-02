import { styled } from '../../../stitches.config'

export const HeaderContainer = styled('header', {
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',
  padding: '32px 16px',
  display: 'flex',
  aligItems: 'center',
  justifyContent: 'space-between',
})

export const RightContent = styled('div', {
  display: 'flex',
  gap: 12,
})

const HeaderContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 12,
  borderRadius: 8,
})

export const Location = styled(HeaderContent, {
  backgroundColor: '$purpleLight',
  color: '$purpleDark',
  svg: {
    color: '$purple',
  },
})

export const Cart = styled(HeaderContent, {
  backgroundColor: '$yellowLight',
  color: '$yellowDark',
  cursor: 'pointer',
})
