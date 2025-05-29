"use client";

import { useState, useRef } from "react";
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
import { useUploadResource } from "@/hooks/useUploadResource";
import { useAppNavigate } from "@/hooks/navigation";
import { ThreeDotsLoader } from "../shared/three-dot-loader";

const levels = ["100", "200", "300", "400"];
const departments = ["CSC", "TCS", "MAC", "IFT", "LIS"];
const types = ["Softcopy", "Hardcover"];

export default function UploadForm() {
  const [type, setType] = useState<"Softcopy" | "Hardcover">("Softcopy");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const { uploadResource, isLoading: isSubmitting } = useUploadResource();
  const { goToResources } = useAppNavigate();

  const titleRef = useRef<HTMLInputElement>(null);
  const courseCodeRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const formatRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const meetupRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const file = fileRef.current?.files?.[0];
    if (!file) return alert("Please upload a file or image");

    const formData = {
      title: titleRef.current?.value || "",
      courseCode: courseCodeRef.current?.value || "",
      author: authorRef.current?.value || "",
      format: formatRef.current?.value || "",
      department,
      level,
      description: descriptionRef.current?.value || "",
      type,
      location: locationRef.current?.value || "",
      meetup: meetupRef.current?.value || "",
    };

    await uploadResource(formData, file);

    goToResources();
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Upload a Resource</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" ref={titleRef} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="courseCode">Course Code</Label>
              <Input id="courseCode" ref={courseCodeRef} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input id="author" ref={authorRef} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="format">Format</Label>
              <Input
                id="format"
                ref={formatRef}
                placeholder="e.g., PDF, DOCX, Paperback"
              />
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
                onValueChange={(val) =>
                  setType(val as "Softcopy" | "Hardcover")
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
            <Textarea id="description" ref={descriptionRef} rows={4} />
          </div>

          {type === "Softcopy" ? (
            <div className="space-y-2">
              <Label htmlFor="file">Upload File</Label>
              <Input
                ref={fileRef}
                type="file"
                accept=".pdf,.docx,.png,.jpg"
                required
              />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Physical Location</Label>
                  <Input id="location" ref={locationRef} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meetup">Meetup Location</Label>
                  <Input id="meetup" ref={meetupRef} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Upload Image</Label>
                <Input
                  ref={fileRef}
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  required
                />
              </div>
            </>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-kw-primary text-white hover:bg-kw-primary/90"
          >
            {isSubmitting ? <ThreeDotsLoader /> : "Submit Resource"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
