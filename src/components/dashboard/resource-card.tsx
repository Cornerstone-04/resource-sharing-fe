import { Badge } from "@/components/ui/badge";
import type { ResourceType } from "@/types";
import { Button } from "../ui/button";

type ResourceCardProps = {
  resource: ResourceType;
  onClick?: () => void;
};

export default function ResourceCard({ resource, onClick }: ResourceCardProps) {
  return (
    <div className="relative rounded-xl border bg-white dark:bg-zinc-800">
      <img
        src={resource.image || "/placeholder.svg"} // Fallback image if none provided
        alt={resource.title}
        className="w-full h-52 object-cover rounded-t-xl"
      />
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <p className="font-medium text-sm">{resource.courseCode}</p>
          <Badge
            variant="outline"
            className={
              resource.available
                ? "text-green-600 border-green-400"
                : "text-red-600 border-red-400"
            }
          >
            {resource.available ? "Available" : "Unavailable"}
          </Badge>
        </div>

        <Button
          className="inline-block w-full text-center bg-kw-primary  hover:bg-blue-700 text-white py-2 rounded-md transition-all"
          onClick={onClick}
        >
          View Resource
        </Button>
      </div>
    </div>
  );
}
