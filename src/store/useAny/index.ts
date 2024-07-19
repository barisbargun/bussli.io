import { StateCreator, create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Slice, initialState } from "./initialise";

const createCartSlice: StateCreator<Slice,
  [["zustand/immer", never]], [], Slice> = (set, get) => ({
    ...initialState,
  });

export default create<Slice>()(
  immer((...a) => ({
    ...createCartSlice(...a)
  }))
);