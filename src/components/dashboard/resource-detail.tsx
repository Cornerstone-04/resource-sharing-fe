import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Resource } from "@/types";

export default function ResourceDetail({ resource }: { resource: Resource }) {
  return (
    <div className="px-2 md:px-6 py-6 h-screen">
     
      {/* Main detail */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 flex items-center justify-center">
          <img
            src={resource.image}
            alt={resource.title}
            className="rounded-lg max-h-96 object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{resource.courseCode}</h1>
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

          <div className="space-y-1 text-sm">
            <p>
              <span className="font-semibold">Owner:</span> {resource.owner}
            </p>
            <p>
              <span className="font-semibold">Format:</span> {resource.format}
            </p>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              {resource.location}
            </p>
          </div>

          <Button className="w-full bg-kw-primary text-white dark:text-white">
            Request (Chat)
          </Button>

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
              & 13 others have borrowed this book
            </p>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Related Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-800 rounded-xl border p-4"
            >
              <img
                src="/placeholder.svg"
                alt="Related"
                className="rounded-lg mb-3 aspect-[3/4] object-cover w-full"
              />
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-semibold">
                  {i === 1 ? "GNS 212" : "GNS 221"}
                </span>
                <Badge
                  variant="secondary"
                  className={
                    i === 1
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }
                >
                  {i === 1 ? "Unavailable" : "Available"}
                </Badge>
              </div>
              <p className="text-xs text-zinc-500">
                {i === 2 || i === 3 ? "Softcover" : "Hardcover"}
              </p>
              <Button className="w-full mt-3 bg-kw-primary">Request</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
