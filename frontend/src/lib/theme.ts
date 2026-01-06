import { createTheme } from '@mantine/core'

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',

  colors: {
    primary: [
      '#f4f4f5',
      '#e4e4e7',
      '#d4d4d8',
      '#a1a1aa',
      '#71717a',
      '#52525b',
      '#3f3f46',
      '#27272a',
      '#18181b',
      '#18181b',
      '#09090b',
    ],

    gray: [
      '#fcfcfc',
      '#f5f5f5',
      '#e5e5e5',
      '#d4d4d4',
      '#a3a3a3',
      '#737373',
      '#525252',
      '#404040',
      '#262626',
      '#525252',
    ],

    accent: [
      '#faf5ff',
      '#f3e8ff',
      '#e9d5ff',
      '#d8b4fe',
      '#c084fc',
      '#a855f7',
      '#9333ea',
      '#7e22ce',
      '#6b21a8',
      '#581c87',
    ],

    white: [
      '#f6f4ef',
      '#f7f5f1',
      '#f8f6f3',
      '#f9f7f5',
      '#faf9f7',
      '#fbfaf9',
      '#fcfbfa',
      '#fdfcfc',
      '#fefefe',
      '#ffffff',
    ],
  },

  primaryColor: 'primary',
  defaultRadius: 'md',
})
