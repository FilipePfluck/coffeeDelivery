import { styled } from '../../../stitches.config'

export const BannerContainer = styled('div', {
  width: '100%',
  backgroundImage: 'url("/Background.png")',
})

export const BannerContent = styled('div', {
  display: 'flex',

  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',
  padding: '48px 16px',
})

export const LeftSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  lineHeight: 1.3,
  paddingRight: 16,

  h1: {
    fontFamily: '"Baloo 2", cursive',
    fontWeight: 800,
    fontSize: 48,
    color: '$title',
    marginBottom: 24,
  },

  p: {
    fontSize: 20,
    color: '$subtitle',
  },
})

export const AttractivesGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1.2fr',
  gap: 12,
  marginTop: 60,
})

export const Attractive = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  fontSize: 16,

  div: {
    height: 32,
    width: 32,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  svg: {
    color: '$white',
  },

  variants: {
    color: {
      yellow: {
        div: {
          background: '$yellow',
        },
      },
      yellowDark: {
        div: {
          background: '$yellowDark',
        },
      },
      gray: {
        div: {
          background: '$text',
        },
      },
      purple: {
        div: {
          background: '$purple',
        },
      },
    },
  },
})
