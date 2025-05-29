import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

type Props = {
  request: Request;
  onAccept: () => void;
  onDecline: () => void;
  onChat: () => void;
};

export default function LendingRequestCard({
  request,
  onAccept,
  onDecline,
  onChat,
}: Props) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg">{request.title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            Course: {request.courseCode}
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          {new Date(request.requestDate).toLocaleDateString()}
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={request.requester.avatar} />
            <AvatarFallback>{request.requester.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{request.requester.name}</p>
            <p className="text-xs text-muted-foreground">
              Requested this material
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          {request.status === "pending" ? (
            <>
              <Button size="sm" variant="outline" onClick={onDecline}>
                Decline
              </Button>
              <Button size="sm" onClick={onAccept}>
                Accept
              </Button>
            </>
          ) : (
            <Button size="sm" variant="secondary" onClick={onChat}>
              Chat
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
