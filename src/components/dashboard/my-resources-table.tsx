import { Badge } from "@/components/ui/badge";

export default function MyResourcesTable({
  data,
}: {
  data: {
    id: number;
    title: string;
    courseCode: string;
    author: string;
    format: string;
    borrowDate: string;
    returnDate: string;
    status: string;
    image: string;
  }[];
}) {
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
      {data.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-7 gap-4 px-6 py-4 border-t border-muted"
        >
          <div>
            <img
              src={item.image}
              alt={item.title}
              className="w-12 h-16 rounded object-cover"
            />
          </div>
          <div>{item.title}</div>
          <div>{item.courseCode}</div>
          <div>{item.author}</div>
          <div>{item.format}</div>
          <div>
            <div className="text-xs">{item.borrowDate}</div>
            <div className="text-xs">{item.returnDate}</div>
          </div>
          <Badge variant="secondary" className="w-fit">
            {item.status}
          </Badge>
        </div>
      ))}
    </div>
  );
}
