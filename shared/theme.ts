import { ThemeProps } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const theme = {
    fonts: {
        basic: 'helvetica, sans-serif',
        accent: '"Permanent Market", cursive',
    },
    colors: {
        orange: '#FD8A2C',
        blue: '#60C2FB',
        pink: '#F15FB9',
    },
}

export type MainThemeProps = ThemeProps<typeof theme>
export const GlobalStyle = createGlobalStyle<MainThemeProps>`
body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.basic};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    *,
    *::after,
    *::before { box-sizing: border-box; }
    h1, h2, h3, h4, h5, h6 { margin: 0; }
    a { color: ${({ theme }) => theme.colors.blue} }
    a:hover { color: ${({ theme }) => theme.colors.pink} }
    .main {
    padding: 70px 0 20px;
    min-height: calc(100vh - 50px);
    }
`
