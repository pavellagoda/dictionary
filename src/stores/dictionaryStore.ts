import { observable } from 'mobx';

class DictionaryStore {
  @observable private words: string[] = ['one', 'two', 'three', 'four', 'five', 'testeerree'];
  private getMatchedWords = (letter: string) => {
    return this.words.filter((word) => word.includes(letter));
  };
  public getStarsWith = (letter: string) => {
    return this.words.filter((word) => word.startsWith(letter));
  };

  public getEndsWith = (letter: string) => {
    return this.words.filter((word) => word.endsWith(letter));
  };

  public getRepeated = (letter: string) => {
    return this.words.filter((word) => word.includes(`${letter}${letter}`));
  };

  public getAppearanceNumber = (letter: string) => {
    const indexes: number[] = [];
    const list = this.getMatchedWords(letter);
    list.forEach((word) => {
      let idx = word.indexOf(letter);
      while (idx !== -1) {
        indexes.push(idx);
        idx = word.indexOf(letter, idx + 1);
      }
    });
    return indexes.length;
  };
}

export default DictionaryStore;
