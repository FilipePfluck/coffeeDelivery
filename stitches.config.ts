import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      background: '#FAFAFA',
      card: '#F3F2F2',
      input: '#EDEDED',
      button: '#E6E5E5',
      hover: '#D7D5D5',
      label: '#8D8686',
      text: '#574F4D',
      subtitle: '#403937',
      title: '#272221',

      purpleDark: '#4B2995',
      purple: '#8047F8',
      purpleLight: '#EBE5F9',
      yellowDark: '#C47F17',
      yellow: '#DBAC2C',
      yellowLight: '#F1E9C9',
    },
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
  },
})

export const GlobalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: {
    backgroundColor: '$background',
    minHeight: '100vh',
    width: '100vw',
    color: '$text',
    fontFamily: 'Roboto, sans-serif',
    overflowX: 'hidden',
  },
  input: {
    color: '$text',
    fontFamily: 'Roboto, sans-serif',
  },
  button: {
    cursor: 'pointer',
    border: 0,
    background: 'transparent',
    color: '$text',
    fontFamily: 'Roboto, sans-serif',
  },
  li: {
    listStyle: 'none',
  },
})
