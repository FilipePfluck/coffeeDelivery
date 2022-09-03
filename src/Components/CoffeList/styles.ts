import { styled } from '../../../stitches.config'

export const CoffeeListContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',
  padding: 16,
  paddingBottom: 32,

  '>strong': {
    fontSize: 32,
    fontFamily: '"Baloo 2", cursive',
    color: '$subtitle',
  },

  '@bp1': {
    '>strong': {
      fontSize: 24,
      marginLeft: 16,
    },
  },
})

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: 24,
  marginTop: 24,

  '@bp3': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },

  '@bp2': {
    gridTemplateColumns: '1fr 1fr',
    padding: 16,
  },

  '@bp1': {
    gridTemplateColumns: '1fr',
  },
})
