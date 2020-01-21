import { useState, useEffect } from 'react';

export default function useIsMouse() {
  const [isMouse, setIsMouse] = useState(true);
  useEffect(() => {
    const onClick = () => {
      setIsMouse(true);
    };
    const onKeyboard = (event) => {
      if (['Meta', 'Alt', 'Control', 'Shift'].indexOf(event.key) > -1) {
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
  }, []);
  return isMouse;
}
