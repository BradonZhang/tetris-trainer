import { useEffect } from 'react';

type KeyMap = {[key: string]: () => any};

const useKeyDownMap = (keyMap: KeyMap) => {
  // Add event listeners
  useEffect(() => {
    console.log(new Date(), 'New key map');
    // If pressed key is our target key then set to true
    const downHandler = ({ key }: { key: string }) => {
      if (key in keyMap) keyMap[key]();
    };
    window.addEventListener('keydown', downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [keyMap]);

  return keyMap;
}

export default useKeyDownMap;
