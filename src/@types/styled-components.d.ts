import { ColorsType } from 'src/shared/theme/colors'

declare module 'styled-components' {
  // eslint-disable-next-line no-restricted-imports
  import 'styled-components'

  export interface DefaultTheme {
    colors: typeof ColorsType
    spacing: (_: number) => string
  }
}
