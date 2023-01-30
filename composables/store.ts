import { usePersistStore } from "../stores/persistStore";
import { useDefaultStore } from "../stores/defaultStore";

export const usePStore = () =>{
  return usePersistStore();
};
export const useDStore = () =>{
  return useDefaultStore();
};


