import { styled } from '../../../stitches.config'

export const Button = styled('button', {
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

  variants: {
    isSelected: {
      true: {
        background: '$purpleLight',
        border: '1px solid $purple',
      },
    },
  },
})
