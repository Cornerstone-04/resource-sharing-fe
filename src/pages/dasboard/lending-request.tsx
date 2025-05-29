import { useState } from "react";
import LendingRequestCard from "@/components/dashboard/lending-request-card";

type Request = {
  id: number;
  requester: {
    name: string;
    avatar: string;
  };
  title: string;
  courseCode: string;
  status: "pending" | "accepted" | "declined";
  requestDate: string;
};

const dummyRequests: Request[] = [
  {
    id: 1,
    title: "Data Structures and Algorithms",
    courseCode: "CSC302",
    requester: {
      name: "Samuel Olu",
      avatar: "/avatars/01.png",
    },
    status: "pending",
    requestDate: "2025-05-26",
  },
  {
    id: 2,
    title: "Database Systems",
    courseCode: "CSC308",
    requester: {
      name: "Aisha Bello",
      avatar: "/avatars/02.png",
    },
    status: "accepted",
    requestDate: "2025-05-24",
  },
];

export default function LendingRequestsPage() {
  const [requests, setRequests] = useState<Request[]>(dummyRequests);

  const handleUpdateStatus = (id: number, status: "accepted" | "declined") => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Lending Requests</h1>
      {requests.length === 0 ? (
        <p className="text-muted-foreground">No requests yet.</p>
      ) : (
        <div className="space-y-4">
          {requests.map((req) => (
            <LendingRequestCard
              key={req.id}
              request={req}
              onAccept={() => handleUpdateStatus(req.id, "accepted")}
              onDecline={() => handleUpdateStatus(req.id, "declined")}
              onChat={() =>
                alert("Navigate to chat with " + req.requester.name)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
