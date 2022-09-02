import { styled } from '../../../stitches.config'

export const Quantity = styled('div', {
  background: '$button',
  borderRadius: 8,
  height: 38,
  width: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$purple',
    background: 'transparent',
    padding: '0 8px',
    fontSize: 20,
    borderRadius: '0 8px 8px 0',
  },
})
