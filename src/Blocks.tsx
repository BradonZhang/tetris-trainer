import React, { useState, useEffect } from "react";
import I from './assets/images/I.png';
import J from './assets/images/J.png';
import L from './assets/images/L.png';
import O from './assets/images/O.png';
import S from './assets/images/S.png';
import T from './assets/images/T.png';
import Z from './assets/images/Z.png';
import useKeyDownMap from './hooks/useKeyDownMap';
import { ISettings, BlockInfo } from "./interfaces";
const randRotation = () => Math.floor(Math.random() * 4);

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

const Blocks = (props: {settings: ISettings}) => {
  const [blockName, setBlockName] = useState(randBlockName);
  const [rotate, setRotate] = useState(0);
  const [answer, setAnswer] = useState(randRotation);

  const { settings } = props;

  const block = blocks[blockName];

  const check = () => {
    if ((rotate - answer) % block.cycle === 0) {
      setRotate(0);
      setAnswer(randRotation);
      setBlockName(randBlockName);
    } else {
      if(settings.oneRotate){
        setRotate(0); 
      }
      alert('Wrong rotation');
    }
  }

  useEffect(() => {
    if(settings.oneRotate && rotate !== 0){
      check();
    }
  }, [rotate])

  const handleRotate = (numRotates: number) => {
    setRotate((rotate + numRotates)%4);
  };

  let keyMap: {[key: string]: () => void} = {};
  keyMap[settings.ccw] = () => handleRotate(3);
  keyMap[settings.oneEighty] = () => handleRotate(2);
  keyMap[settings.cw] = () => handleRotate(1);
  keyMap[settings.hd] = () => check();

  useKeyDownMap(keyMap);


  return (
    <div className="blocks">
      {
        settings.hide ? <div></div> :
        <img src={blocks[blockName].sprite} alt={blockName} style={{transform: `rotate(${rotate * 90}deg)`}} />
      }
      <img src={blocks[blockName].sprite} alt={blockName} style={{transform: `rotate(${answer * 90}deg)`}} />
    </div>
  );
};

export default Blocks;
