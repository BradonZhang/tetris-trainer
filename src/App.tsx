import React, { useState } from 'react';
import './App.css';
import Blocks from "./Blocks";
import Settings from "./Settings"
import { ISettings } from "./interfaces";

const App = () => {
  const defaultSettings: ISettings = {
    ccw: 'a',
    oneEighty: 's',
    cw: 'd',
    hd: ' ',
    oneRotate: false,
    hide: false
  };
  const [settings, setSettings] = useState(defaultSettings);
  const [menu, setMenu] = useState(0);

  const switchMenu = () => {
    switch(menu) {
      case 0:
        return (<Blocks settings={settings}/>);
      case 1:
        return (<Settings settings = {settings} setSettings={setSettings} />);
    }
    return (<></>)
  }

  return (
    <div className="App">
      <header className="App-header">
        <select
          name="menu"
          onChange={e => setMenu(Number(e.target.value))}
        >
          <option value="0">Game</option>
          <option value="1">Settings</option>
        </select>
      </header>
      <div className="body">
        {switchMenu()}
      </div>
    </div>
  );
};

export default App;
