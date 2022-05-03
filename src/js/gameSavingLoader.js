import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    console
    const data = await read();
    const string = await json(data);
    return JSON.parse(string)
  }
}
