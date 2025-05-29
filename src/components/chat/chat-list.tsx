import type { ChatUser } from "@/types";

interface ChatListProps {
  users: ChatUser[];
  currentUserId: string;
  onSelect: (user: ChatUser) => void;
  selectedUserId?: string;
}

export default function ChatList({
  users,
  currentUserId,
  onSelect,
  selectedUserId,
}: ChatListProps) {
  return (
    <div className="w-full sm:w-1/3 border-r bg-white dark:bg-gray-800">
      <h2 className="text-lg font-semibold p-4">Chats</h2>
      <ul>
        {users
          .filter((u) => u.id !== currentUserId)
          .map((user) => (
            <li
              key={user.id}
              onClick={() => onSelect(user)}
              className={`p-4 cursor-pointer flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                selectedUserId === user.id ? "bg-gray-100 dark:bg-gray-700" : ""
              }`}
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <span>{user.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
