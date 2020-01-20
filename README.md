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
