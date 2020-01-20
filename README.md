react-useismouse
=============

Super simple module to conditionally do stuff based on whether the user is using their mouse or keyboard.

Main use-case is when you want to use `outline: none` but don't want to ruin accessibility for people tabbing between fields.

```bash
npm i useismouse
```

```javascript
import useIsMouse from 'useismouse';

function App() {
  const isMouse = useIsMouse();
  return <div>{isMouse ? 'Using mouse' : 'Using keyboard'}</div>;
}
```

However you use it is up to you. But with styled-components it could be done as thus:

```javascript
import { styled, ThemeProvider } from 'styled-components';
import useIsMouse from 'useismouse';

const StyledDiv = styled.div`
  ${({ theme }) => theme.isMouse && 'outline: none;'}
`;

function App() {
  const isMouse = useIsMouse();
  return (
    <ThemeProvider theme={{ isMouse }}>
      <StyledDiv>Foo bar</StyledDiv>
    </ThemeProvider>
  );
}
```

Or globally:

```javascript
import { styled, css, createGlobalStyle } from 'styled-components';
import useIsMouse from 'useismouse';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => {
    if (theme.isMouse) {
      return css`
        * {
          outline: none;
        }
      `;
    }
  }}
`;

function App() {
  const isMouse = useIsMouse();
  return (
    <ThemeProvider>
      <GlobalStyle />
      <div>Foo bar</div>
    </ThemeProvider>
  );
}
```
