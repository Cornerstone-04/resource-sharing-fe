import { Badge } from "@/components/ui/badge";
import { formatFirestoreDate } from "@/lib/date-utils";
import type { ResourceType } from "@/types";
import { format } from "date-fns";

export default function MyResourcesTable({ data }: { data: ResourceType[] }) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl border">
      <div className="grid grid-cols-7 gap-4 px-6 py-4 font-medium text-sm text-muted-foreground">
        <div>Cover</div>
        <div>Title</div>
        <div>Course Code</div>
        <div>Author</div>
        <div>Format</div>
        <div>Dates</div>
        <div>Status</div>
      </div>

      {data.map((item) => {
        const hasBorrowers = item.borrowers?.length > 0;
        const status = item.available
          ? "Available"
          : hasBorrowers
          ? "Borrowed"
          : "Unavailable";

        return (
          <div
            key={item.id}
            className="grid grid-cols-7 gap-4 px-6 py-4 border-t border-muted text-sm"
          >
            <div>
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-12 h-16 rounded object-cover"
              />
            </div>
            <div>{item.title}</div>
            <div>{item.courseCode}</div>
            <div>{item.author || "—"}</div>
            <div>{item.format || item.type}</div>
            <div>
              {item.type === "Softcopy" ? (
                <div className="text-xs text-muted-foreground">
                  Uploaded: {formatFirestoreDate(item.createdAt) || "—"}
                </div>
              ) : hasBorrowers ? (
                <div className="text-xs text-muted-foreground">
                  Last borrowed: {format(new Date(), "PPP")}
                  {/* Ideally use actual borrow timestamp */}
                </div>
              ) : (
                <div className="text-xs text-muted-foreground">—</div>
              )}
            </div>
            <Badge
              variant="secondary"
              className={`${
                status === "Available"
                  ? "bg-green-100 text-green-700"
                  : status === "Borrowed"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-700"
              } w-fit h-fit`}
            >
              {status}
            </Badge>
          </div>
        );
      })}
    </div>
  );
}
