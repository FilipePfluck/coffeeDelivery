import { styled } from '../../../stitches.config'

export const CardContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',

  padding: 20,
  paddingTop: 96,
  marginTop: 24,
  borderRadius: '4px 32px 4px 32px',
  background: '$card',
  position: 'relative',

  strong: {
    fontFamily: '"Baloo 2", cursive',
    fontSize: 20,
    color: '$subtitle',
    marginBottom: 8,
  },

  '>p': {
    fontSize: 14,
    color: '$label',
  },
})

export const ImageContainer = styled('div', {
  position: 'absolute',
  top: '-24px',
  left: '50%',
  transform: 'translate(-50%, 0)',

  img: {
    maxWidth: 120,
    maxHeight: 120,
  },
})

export const TagList = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  gap: 4,
  alignItems: 'center',
  justifyContent: 'center',
})

export const Tag = styled('div', {
  background: '$yellowLight',
  color: '$yellowDark',
  fontSize: 10,
  fontWeight: 'bold',
  padding: 8,
  borderRadius: 16,
  margin: '16px 0',
  textTransform: 'uppercase',
})

export const PriceAndCartContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'transparent',
  width: '100%',
  marginTop: 24,

  span: {
    fontSize: 14,
  },

  p: {
    fontSize: 24,
    fontWeight: 800,
    fontFamily: '"Baloo 2", cursive',
    marginLeft: 4,
  },

  '>div': {
    display: 'flex',
    alignItems: 'center',
  },
})

export const CartButton = styled('button', {
  height: 38,
  width: 38,
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$purple',
  color: '$white',
  marginLeft: 8,
  transition: '0.2s',

  '&:hover': {
    background: '$purpleDark',
  },
})
