import { StateCreator } from "zustand";
import { Message } from "../../types/user.";

export interface MessageSlice {
  emptyMessageContainer: boolean;
  setEmptyMessageContainer: (data: boolean) => void;
  selectedChatMessages: Message[] | null;
  setSelectedChatMessages: (data: Message[]) => void;
}

export const createMessageSlice: StateCreator<MessageSlice> = (set, get) => ({
  emptyMessageContainer: true,
  setEmptyMessageContainer: (data) =>
    set(() => ({
      emptyMessageContainer: data,
    })),

  selectedChatMessages: null,
  setSelectedChatMessages: (data) =>
    set(() => ({
      selectedChatMessages: data,
    })),
});
