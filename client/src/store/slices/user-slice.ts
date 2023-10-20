import { StateCreator } from "zustand";
import { User } from "../../types/user.";

export interface UserSlice {
  currentUserData: User | null;
  setCurrentUserData: (data: User) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set, get) => ({
  currentUserData: null,
  setCurrentUserData: (data) =>
    set(() => ({
      currentUserData: data,
    })),
});
