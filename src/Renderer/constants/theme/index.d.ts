import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      greenDark: string;
      danger: string;
    };
  }
}
