import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import RequestToBorrowButton from "../shared/request-button";
import type { ResourceType } from "@/types";
import SaveButton from "../shared/save-button";

export default function ResourceDetail({
  resource,
  allResources,
}: {
  resource: ResourceType;
  allResources?: ResourceType[];
}) {
  const relatedResources = allResources!
    .filter(
      (r) =>
        r.id !== resource.id && // exclude current resource
        r.department === resource.department &&
        r.level === resource.level
    )
    .slice(0, 4); // Limit to 4

  return (
    <div className="px-4 md:px-6 py-6">
      {/* Detail Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 flex items-center justify-center">
          <img
            src={resource.image || "/placeholder.svg"}
            alt={resource.title}
            className="rounded-lg max-h-96 object-cover"
          />
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">{resource.courseCode}</h1>
              <Badge
                className={
                  resource.available
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }
              >
                {resource.available ? "Available" : "Unavailable"}
              </Badge>
            </div>
            <p className="text-muted-foreground">{resource.description}</p>
          </div>

          <div className="text-sm space-y-1">
            <p>
              <span className="font-semibold">Title:</span> {resource.title}
            </p>
            <p>
              <span className="font-semibold">Owner:</span>{" "}
              {resource.owner || "Unknown"}
            </p>
            {resource.type === "Hardcover" && resource.ownerPhone && (
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {resource.ownerPhone}
              </p>
            )}
            <p>
              <span className="font-semibold">Author:</span> {resource.author}
            </p>
            {resource.type === "Hardcover" ? (
              <p>
                <span className="font-semibold">Type:</span> {resource?.type}
              </p>
            ) : (
              <p>
                <span className="font-semibold">Format:</span>{" "}
                {resource?.format}
              </p>
            )}
            <p>
              <span className="font-semibold">Location:</span>{" "}
              {resource.meetup || resource.location || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Department:</span>{" "}
              {resource.department}
            </p>
            <p>
              <span className="font-semibold">Level:</span> {resource.level}
            </p>
          </div>

          {resource.type === "Softcopy" && resource.fileUrl ? (
            <div className="flex gap-3 flex-col sm:flex-row">
              <a
                href={resource.fileUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-block text-center bg-kw-primary hover:bg-blue-700 text-white py-2 rounded-md transition-all"
              >
                Download File
              </a>
              <div className="flex-1">
                <SaveButton resource={resource} />
              </div>
            </div>
          ) : (
            <RequestToBorrowButton resource={resource} />
          )}

          {/* Only show borrowers for Hardcopy */}
          {resource.type === "Hardcover" &&
            resource.borrowers &&
            resource.borrowers.length > 0 && (
              <div className="flex items-center gap-3 mt-4">
                <div className="flex -space-x-2">
                  {resource.borrowers.map((borrower, i) => (
                    <Avatar key={i} className="h-8 w-8 border-2 border-white">
                      <AvatarImage src={borrower.avatar} />
                      <AvatarFallback>{borrower.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <p className="text-sm text-zinc-500">
                  & {resource.borrowers.length}{" "}
                  {resource.borrowers.length > 1 ? "others" : "person"} have
                  borrowed this
                </p>
              </div>
            )}
        </div>
      </div>

      {/* Related Resources */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Related Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {relatedResources.map((rel) => (
            <div
              key={rel.id}
              className="bg-white dark:bg-zinc-800 rounded-xl border p-4"
            >
              <img
                src={rel.image || "/placeholder.svg"}
                alt={rel.title}
                className="rounded-lg mb-3 aspect-[3/4] object-cover w-full"
              />
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="font-semibold">{rel.courseCode}</span>
                <Badge
                  className={
                    rel.available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }
                >
                  {rel.available ? "Available" : "Unavailable"}
                </Badge>
              </div>

              <RequestToBorrowButton resource={rel} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
