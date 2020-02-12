import { useState, useEffect } from 'react';

export default function useIsMouse({ blacklistedKeys = null, whitelistedKeys = null }) {
  const [isMouse, setIsMouse] = useState(true);
  useEffect(() => {
    const onClick = () => {
      setIsMouse(true);
    };
    const onKeyboard = (event) => {
      if (['Meta', 'Alt', 'Control', 'Shift'].indexOf(event.key) > -1) {
        return;
      }
      if (blacklistedKeys && Array.isArray(blacklistedKeys) && blacklistedKeys.indexOf(event.key) > -1) {
        return;
      }
      if (whitelistedKeys && Array.isArray(whitelistedKeys) && whitelistedKeys.indexOf(event.key) <= -1) {
        return;
      }
      setIsMouse(false);
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeyboard);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKeyboard);
    };
  }, [blacklistedKeys, whitelistedKeys]);
  return isMouse;
}
