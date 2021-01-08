import { useContext } from 'react';
import { rootStoreContext } from '../stores/rootStore';

export const useStores = () => useContext(rootStoreContext);
