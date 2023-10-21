export interface User {
  createdAt: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
  updatedAt: string;
  username: string;
  uuid: string;
}

export interface Message {
  createdAt: string;
  id: number;
  message: string;
  receiverId: string;
  senderId: string;
  updatedAt: string;
  uuid: string;
}

export interface ChatHistory extends User {
  message?: string;
}
