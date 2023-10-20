import { StateCreator } from "zustand";
import { User } from "../../types/user.";

export interface SidebarSlice {
  newChatSidebar: boolean;
  setNewChatSidebar: (data: boolean) => void;
  selectedChatUserData: User | null;
  setSelectedChatUserData: (data: User) => void;
}

export const createSidebarSlice: StateCreator<SidebarSlice> = (set, get) => ({
  newChatSidebar: false,
  setNewChatSidebar: (data) =>
    set(() => ({
      newChatSidebar: data,
    })),
  selectedChatUserData: null,
  setSelectedChatUserData: (data) =>
    set(() => ({
      selectedChatUserData: data,
    })),
});
