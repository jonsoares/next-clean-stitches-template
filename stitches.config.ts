import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  getCssText,
  keyframes,
  theme,
  createTheme,
  config,
  reset
} = createStitches({
  theme: {
    colors: {},
    fontSizes: {},
    fontWeights: {},
    lineHeights: {}
  },
  media: {
    bp1: '(max-width: 680px)'
  },
  utils: {
    px: (value: string | number) => ({
      paddingRight: value,
      paddingLeft: value
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value
    })
  }
})

export const darkTheme = createTheme('dark-theme', {
  colors: {}
})

export const globalStyles = globalCss({
  'html, body': {
    padding: 0,
    margin: 0
  },
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    '&::selection': {
      background: '',
      color: ''
    },
    scrollBehavior: 'smooth',
    textDecoration: 'none',
    color: 'inherit'
  }
})

export type CSS = Stitches.CSS<typeof config>
