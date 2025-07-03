import { useUserData } from "@/hooks/useUserData";
import { useState, useEffect, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updatePassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";
import { Eye, EyeOff, Upload, Camera, User, Save } from "lucide-react";
import { uploadAvatar } from "@/hooks/useUpdateProfile";
import { Button } from "../ui/button";

export default function ProfileForm() {
  const { data, refetch } = useUserData();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (data?.avatarUrl) {
      setPreviewUrl(data.avatarUrl);
    }
  }, [data]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);

    try {
      const user = auth.currentUser;
      if (!user) throw new Error("No authenticated user");

      if (selectedFile) {
        await uploadAvatar(selectedFile);
      }

      if (newPassword.trim()) {
        await updatePassword(user, newPassword);
      }

      toast.success("Profile updated successfully");
      refetch?.();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };
  return (
    <div className="space-y-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 p-6">
      {/* Avatar Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Profile Picture</h3>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 dark:border-zinc-600 shadow-sm group-hover:border-blue-300 transition-colors">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 dark:bg-zinc-700 flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-400" />
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-full">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <div>
              <h4 className="font-medium text-base">
                {data?.firstName} {data?.lastName}
              </h4>
              <p className="text-sm text-muted-foreground">{data?.email}</p>
            </div>

            <Label className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-pointer text-sm font-medium">
              <Upload className="w-4 h-4" />
              Change Picture
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </Label>

            {selectedFile && (
              <p className="text-xs text-muted-foreground">
                Selected: {selectedFile.name}
              </p>
            )}
          </div>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-zinc-700" />

      {/* Password Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Change Password</h3>

        <div className="max-w-md space-y-2">
          <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            New Password
          </Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
            <Button
              variant="ghost"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-zinc-700" />

      {/* Save Button */}
      <div className="flex justify-end">
        <Button
          onClick={handleSubmit}
          disabled={isUpdating}
          className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-md transition-colors disabled:cursor-not-allowed"
        >
          {isUpdating ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Saving...
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
