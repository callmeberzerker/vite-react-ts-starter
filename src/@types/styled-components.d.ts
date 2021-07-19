import { COLORS } from 'src/shared/theme/colors'
// eslint-disable-next-line no-restricted-imports
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    global: {
      text: string
      body: string
    }
    colors: typeof COLORS
    spacing: (_: number) => string
  }
}
