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
  padding: 8,
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
  position: 'relative',
  backgroundColor: '$yellowLight',
  color: '$yellowDark',
  cursor: 'pointer',
})

export const Badge = styled('div', {
  position: 'absolute',
  top: -10,
  right: -10,
  height: 20,
  width: 20,
  borderRadius: '50%',
  background: '$yellowDark',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
  fontWeight: 'bold',
})
