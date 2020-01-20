import { useState, useEffect } from 'react';

export default function useIsMouse() {
  const [isMouse, setIsMouse] = useState(true);
  useEffect(() => {
    const onClick = document.addEventListener('click', (event) => {
      setIsMouse(true);
    });
    const onKeyboard = document.addEventListener('keydown', (event) => {
      if (['Meta', 'Alt', 'Control', 'Shift'].indexOf(event.key) > -1) {
        return;
      }
      setIsMouse(false);
    });
    return () => {
      onClick.removeEventListener();
      onKeyboard.removeEventListener();
    };
  }, []);
  return isMouse;
}

