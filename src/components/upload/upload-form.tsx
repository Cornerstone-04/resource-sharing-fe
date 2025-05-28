import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const levels = ["100", "200", "300", "400"];
const departments = ["CSC", "TCS", "MAC", "IFT", "LIS"];
const types = ["Softcopy", "Hardcover"];

export default function UploadForm() {
  const [type, setType] = useState<"Softcopy" | "Hardcover">("Softcopy");
  const [department, setDepartment] = useState<string>("");
  const [level, setLevel] = useState<string>("");

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Upload a Resource</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="courseCode">Course Code</Label>
              <Input id="courseCode" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input id="author" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="format">Format</Label>
              <Input id="format" placeholder="e.g., PDF, DOCX, Paperback" />
            </div>
            <div className="space-y-2">
              <Label>Department</Label>
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Level</Label>
              <Select value={level} onValueChange={setLevel}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((lvl) => (
                    <SelectItem key={lvl} value={lvl}>
                      {lvl}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Type</Label>
              <Select
                value={type}
                onValueChange={(value) =>
                  setType(value as "Softcopy" | "Hardcover")
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {types.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" rows={4} />
          </div>

          {type === "Softcopy" ? (
            <div className="space-y-2">
              <Label htmlFor="file">Upload File</Label>
              <Input id="file" type="file" accept=".pdf,.docx,.png,.jpg" />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Physical Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Hostel Room, Library Shelf"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meetup">Suggested Meetup Location</Label>
                  <Input
                    id="meetup"
                    placeholder="e.g., ICT Center, Library Entrance"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Upload Image</Label>
                <Input id="image" type="file" accept=".png,.jpg,.jpeg" />
              </div>
            </>
          )}

          <Button
            type="submit"
            className="w-full bg-kw-primary text-white hover:bg-kw-primary/90"
          >
            Submit Resource
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
