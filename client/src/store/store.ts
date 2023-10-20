import { create } from "zustand";
import {
  UserSlice,
  createUserSlice,
  SidebarSlice,
  createSidebarSlice,
  UtilsSlice,
  createUtilsSlice,
  MessageSlice,
  createMessageSlice,
} from "./slices";

type StoreState = UserSlice & SidebarSlice & UtilsSlice & MessageSlice;

export const useAppStore = create<StoreState>()((...a) => ({
  ...createUserSlice(...a),
  ...createSidebarSlice(...a),
  ...createUtilsSlice(...a),
  ...createMessageSlice(...a),
}));
