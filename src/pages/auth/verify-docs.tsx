import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";

export default function VerifyDocsPage() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold">Upload Verification Document</h1>
      <p className="text-sm text-muted-foreground">
        You don’t have access to your student email? Upload proof of admission
        below.
      </p>

      <form className="space-y-4 text-left">
        <div className="space-y-2">
          <Label>Select Document Type</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose one..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admission-letter">Admission Letter</SelectItem>
              <SelectItem value="course-form">Course Form</SelectItem>
              <SelectItem value="school-id">School ID Card</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="file">Upload File</Label>
          <Input type="file" id="file" accept=".pdf,.jpg,.png" />
        </div>

        <Button type="submit" className="w-full mt-4 bg-kw-primary">
          Submit for Review
        </Button>
      </form>
    </div>
  );
}
