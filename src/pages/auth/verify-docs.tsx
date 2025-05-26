import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function VerifyDocsPage() {
  const [docType, setDocType] = useState("");
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold">Upload Verification Document</h1>
      <p className="text-sm text-muted-foreground">
        Don’t have access to your student email? Upload a valid document like
        your admission letter or course form.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Document Type:", docType);
          console.log("Uploaded File:", file);
          // You can add logic to upload the file here
        }}
        className="space-y-4 text-left"
      >
        {/* Select document type */}
        <div className="space-y-2">
          <Label htmlFor="docType">Select Document Type</Label>
          <Select onValueChange={setDocType}>
            <SelectTrigger id="docType" className="w-full">
              <SelectValue placeholder="Choose document type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admission-letter">Admission Letter</SelectItem>
              <SelectItem value="course-form">Current Course Form</SelectItem>
              <SelectItem value="school-id">School ID Card</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* File upload */}
        <div className="space-y-2">
          <Label htmlFor="file">Upload File</Label>
          <Input
            type="file"
            id="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="cursor-pointer"
          />
          {file && (
            <p className="text-sm text-muted-foreground">
              Selected: {file.name}
            </p>
          )}
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full mt-4 bg-kw-primary">
          Submit for Review
        </Button>
      </form>
    </div>
  );
}
