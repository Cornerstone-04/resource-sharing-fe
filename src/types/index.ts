import type { Timestamp } from "firebase/firestore";

export interface ResourceType {
  id: string;
  title: string;
  courseCode: string;
  author?: string;
  format?: string;
  department: string;
  level: string;
  type: "Softcopy" | "Hardcover";
  fileUrl?: string;
  image?: string;
  location?: string;
  meetup?: string;
  description?: string;
  available: boolean;
  owner: string;
  ownerPhone?: string;
  ownerName?: string;
  borrowers: BorrowerType[];
  createdAt: Timestamp;
  savers?: string[];
}

export type UserData = {
  uid: string;
  firstName: string;
  lastName: string;
  phone: string;
  studentEmail: string;
  email: string;
  avatarUrl?: string;
};

export type ChatUser = {
  id: string;
  name: string;
  avatar: string;
};

export type BorrowerType = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  borrowDate: Timestamp;
  returnDate: Timestamp;
};

export type BorrowRequestType = {
  id: string;
  resourceId: string;
  resourceTitle: string;
  requesterId: string;
  requesterName: string;
  requesterEmail: string;
  ownerId: string;
  ownerName: string;
  status: "pending" | "approved" | "declined" | "completed" | "cancelled";
  message: string;
  proposedDuration: number;
  agreedDuration?: number | null;
  expectedReturnDate?: Date | null;
  pickupLocation?: string;
  requestedAt: Timestamp; 
  respondedAt?: Timestamp;
  borrowedAt?: Timestamp;
  returnedAt?: Timestamp;
  chatRoomId?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
