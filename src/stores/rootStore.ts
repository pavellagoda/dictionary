import { createContext } from 'react';
import DictionaryStore from './dictionaryStore';

export const rootStoreContext = createContext({
  dictionaryStore: new DictionaryStore(),
});
