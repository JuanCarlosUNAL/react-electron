import 'styled-components';

import defaultTheme from './defaultTheme';

declare module 'styled-components' {
  export type DefaultTheme = typeof defaultTheme
}
