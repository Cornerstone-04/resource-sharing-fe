export type ResourceType = {
  id: number;
  title: string;
  courseCode: string;
  author: string;
  available: boolean;
  image: string;
  description: string;
  owner: string;
  format: string;
  location: string;
  type: string; // e.g., "Softcopy" or "Hardcover"
  level: string; // e.g., "100", "200", etc.
  department: string; // e.g., "CSC", "TCS", etc.
  borrowers: {
    name: string;
    avatar: string;
  }[];
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
