import { StateCreator } from "zustand";

export interface UtilsSlice {
  subSidebarCollapsed: boolean;
  toggleSubSidebar: () => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export const createUtilsSlice: StateCreator<UtilsSlice> = (set, get) => ({
  subSidebarCollapsed: false,
  toggleSubSidebar: () =>
    set({ subSidebarCollapsed: !get().subSidebarCollapsed }),
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
});
