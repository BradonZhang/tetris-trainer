import React, { useState, useEffect } from 'react';
import { ISettings } from "./interfaces"

const Settings = (props: { settings: ISettings, setSettings: React.Dispatch<React.SetStateAction<ISettings>> }) => {

  const { settings, setSettings } = props;

  const [ccw, setCcw] = useState(settings.ccw);
  const [oneEighty, setOneEighty] = useState(settings.oneEighty);
  const [cw, setCw] = useState(settings.cw);
  const [hd, setHd] = useState(settings.hd);
  const [oneRotate, setOneRotate] = useState(settings.oneRotate);
  const [hide, setHide] = useState(settings.hide);

  useEffect(() => {
    setSettings({ ccw: ccw, oneEighty: oneEighty, cw: cw, hd: hd, oneRotate: oneRotate, hide: hide });
  }, [ccw, oneEighty, cw, hd, oneRotate, hide, setSettings]);

  return (
    <div className="settings">
      <div>
        <label>CCW rotate</label>
        <input type="text"
          value={ccw}
          onChange={e => setCcw(e.target.value[e.target.value.length - 1])}
        />
      </div>
      <div>

      <label>One Eighty rotate</label>
        <input type="text" 
          value={oneEighty}
          onChange={e => setOneEighty(e.target.value[e.target.value.length - 1])}
        />
      </div>
      <div>

      <label>CW rotate</label>
        <input type="text" 
          value={cw}
          onChange={e => setCw(e.target.value[e.target.value.length - 1])}
        />
      </div>
      <div>
      <label>Hard Drop</label>
        <input type="text" 
          value={hd}
          onChange={e => setHd(e.target.value[e.target.value.length - 1])}
        />
      </div>
      <div>
        <label>Toggle One Rotate Enforcement</label>
        <input 
          type="checkbox"
          checked={oneRotate}
          onChange={e => {
            setOneRotate(e.target.checked);
            if(!e.target.checked){
              setHide(e.target.checked);
            }
          }}
        />
      </div>
      {oneRotate ? 
      <div>
        <label>Hide Starting Piece</label>
        <input 
          type="checkbox"
          checked={hide}
          onChange={e => setHide(e.target.checked)}
        />
      </div>
      :<></>}
    </div>
  );
};

export default Settings;
