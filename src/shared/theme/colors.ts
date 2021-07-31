interface SemanticColors {
  global: {
    body: string
    text: string
  }
  primary: string
  secondary: string
  accent: string
}

export type ColorsType = typeof GENERIC_COLORS & SemanticColors

export type ThemeMode = 'light' | 'dark'
export const GENERIC_COLORS = {
  purple: '#9378d9',
  green: '#5BD097',
  teal: '#2FD2E3',
  orange: '#FFAC53',
  grey: {
    dark: '#121620',
    light: '#f1f1f1',
  },
}

export const createColors = (mode: ThemeMode): ColorsType => {
  const semanticColors = mode === 'dark' ? createDarkColors() : createLightColors()

  return {
    ...GENERIC_COLORS,
    ...semanticColors,
  }
}

const createLightColors = (): SemanticColors => {
  return {
    global: {
      body: GENERIC_COLORS.grey.light,
      text: GENERIC_COLORS.grey.dark,
    },
    primary: GENERIC_COLORS.teal,
    secondary: GENERIC_COLORS.purple,
    accent: GENERIC_COLORS.orange,
  }
}

const createDarkColors = (): SemanticColors => {
  return {
    global: {
      body: GENERIC_COLORS.grey.dark,
      text: GENERIC_COLORS.grey.light,
    },
    primary: GENERIC_COLORS.teal,
    secondary: GENERIC_COLORS.purple,
    accent: GENERIC_COLORS.orange,
  }
}

export const COLORS = {
  ...GENERIC_COLORS,
  primary: GENERIC_COLORS.teal,
  secondary: GENERIC_COLORS.purple,
}
