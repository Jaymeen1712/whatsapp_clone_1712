import { StateCreator } from "zustand";
import { Message } from "../../types/user.";

export interface MessageSlice {
  emptyMessageContainer: boolean;
  setEmptyMessageContainer: (data: boolean) => void;
  selectedChatMessages: Message[] | null;
  setSelectedChatMessages: (data: Message[]) => void;
  incomingChatFlag: boolean;
  setIncomingChatFlag: (data: boolean) => void;
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
  incomingChatFlag: false,
  setIncomingChatFlag: (data) =>
    set(() => ({
      incomingChatFlag: data,
    })),
});
