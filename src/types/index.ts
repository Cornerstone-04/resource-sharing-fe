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
  borrowers: BorrowerType[];
  createdAt: Date;
}

export type BorrowerType = {
  name: string;
  email: string;
  avatar?: string;
};

export type Resource = {
  id: number;
  title: string;
  courseCode: string;
  description: string;
  image: string;
  available: boolean;
  owner: string;
  format: string;
  location: string;
  borrowers: { name: string; avatar: string }[];
};

// chat
export type ChatUser = {
  id: string;
  name: string;
  avatar: string;
};

export type ChatMessage = {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  attachments: string;
  isRead: boolean;
};

export type UserData = {
  firstName: string;
  lastName: string;
  phone: string;
  studentEmail: string;
  email: string;
};
