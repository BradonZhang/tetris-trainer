import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import I from './assets/images/I.png';
import J from './assets/images/J.png';
import L from './assets/images/L.png';
import O from './assets/images/O.png';
import S from './assets/images/S.png';
import T from './assets/images/T.png';
import Z from './assets/images/Z.png';
import useKeyDownMap from './hooks/useKeyDownMap';

const randRotation = () => Math.floor(Math.random() * 4);

interface BlockInfo {
  sprite: typeof I;
  cycle: number;
}
const blocks = {
  I: { sprite: I, cycle: 2 },
  J: { sprite: J, cycle: 4 },
  L: { sprite: L, cycle: 4 },
  O: { sprite: O, cycle: 1 },
  S: { sprite: S, cycle: 2 },
  T: { sprite: T, cycle: 4 },
  Z: { sprite: Z, cycle: 2 },
} as {[name: string]: BlockInfo};
const blockNames = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
const randBlockName = () => blockNames[Math.floor(Math.random() * blockNames.length)];

const App = () => {
  const [blockName, setBlockName] = useState(randBlockName);
  const [rotate, setRotate] = useState(0);
  const [answer, setAnswer] = useState(randRotation);
  const [check, setCheck] = useState(false);

  const keyMap = useMemo(() => ({
    j: () => setRotate(rotate => (rotate + 3) % 4),
    k: () => setRotate(rotate => (rotate + 2) % 4),
    l: () => setRotate(rotate => (rotate + 1) % 4),
    ' ': () => setCheck(true),
  }), []);
  useKeyDownMap(keyMap);

  const block = blocks[blockName];

  if (check) {
    setCheck(false);
    if ((rotate - answer) % block.cycle === 0) {
      setRotate(0);
      setAnswer(randRotation);
      setBlockName(randBlockName);
    } else {
      alert('Wrong rotation');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={blocks[blockName].sprite} alt={blockName} style={{transform: `rotate(${rotate * 90}deg)`}} />
        <img src={blocks[blockName].sprite} alt={blockName} style={{transform: `rotate(${answer * 90}deg)`}} />
      </header>
    </div>
  );
};

export default App;
