import type { ResourceType } from "@/types";

export const allResources: ResourceType[] = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    courseCode: "CSC101",
    author: "Dr. Adeola",
    available: true,
    image: "/placeholder.svg?height=100&width=75",
    description: "A beginner’s guide to computer science fundamentals.",
    owner: "John Doe",
    format: "PDF",
    location: "Shelf A2",
    department: "Computer Science",
    level: "100",
    type: "Softcopy",
    borrowers: [
      { name: "Jane Smith", avatar: "/avatars/jane.png" },
      { name: "Mike Johnson", avatar: "/avatars/mike.png" },
    ],
  },
  {
    id: 2,
    title: "Linear Algebra",
    courseCode: "MTH202",
    author: "Prof. Musa",
    available: false,
    image: "/placeholder.svg?height=100&width=75",
    description:
      "Essential linear algebra concepts and problem-solving techniques.",
    owner: "Alice Brown",
    format: "Hardcopy",
    location: "Shelf B1",
    department: "Mathematics",
    level: "200",
    type: "Hardcopy",
    borrowers: [{ name: "Samuel Green", avatar: "/avatars/samuel.png" }],
  },
];

export const myResources = [
  {
    id: 1,
    title: "The Bike Guy",
    courseCode: "GNS 221",
    author: "Cole Ademola",
    format: "Hardcover",
    borrowDate: "13th March 2025",
    returnDate: "16th May 2025",
    status: "Pending",
    image: "/placeholder.svg?height=100&width=75",
  },
];
