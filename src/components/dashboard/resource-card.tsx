import { Badge } from "@/components/ui/badge";
import RequestToBorrowButton from "../shared/request-button";
import type { ResourceType } from "@/types";

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

        <Badge
          className="absolute top-2 left-2 bg-kw-primary opacity-80 hover:opacity-100 text-xs text-white hover:scale-105 transition-all ease-in-out cursor-pointer"
          onClick={onClick}
        >
          View Details
        </Badge>

        <RequestToBorrowButton resource={resource} />
      </div>
    </div>
  );
}

// type ResourceCardProps = {
//   resource: {
//     id: number;
//     courseCode: string;
//     title: string;
//     image: string;
//     available: boolean;
//   };
//   onClick?: () => void;
// };

// export default function ResourceCard({ resource, onClick }: ResourceCardProps) {
//   return (
//     <div
//       onClick={onClick}
//       className="cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow transition"
//     >
//       <div className="aspect-[3/4] bg-gray-100">
//         <img
//           src={resource.image}
//           alt={resource.title}
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="p-4 space-y-1">
//         <h3 className="font-semibold">{resource.courseCode}</h3>
//         <p className="text-sm text-gray-600">{resource.title}</p>
//         <span
//           className={`text-xs font-medium px-2 py-1 inline-block rounded ${
//             resource.available
//               ? "bg-green-100 text-green-800"
//               : "bg-red-100 text-red-800"
//           }`}
//         >
//           {resource.available ? "Available" : "Unavailable"}
//         </span>
//       </div>
//     </div>
//   );
// }
