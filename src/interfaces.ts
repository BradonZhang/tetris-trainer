import I from './assets/images/I.png';

export interface BlockInfo {
  sprite: typeof I;
  cycle: number;
};

export interface ISettings {
  ccw: string;
  oneEighty: string;
  cw: string;
  hd: string;
  oneRotate: boolean;
  hide: boolean;
};