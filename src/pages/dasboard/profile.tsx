import ProfileForm from "@/components/dashboard/profile-form";

export default function ProfilePage() {
  return (
    <div className="max-w-2xl flex flex-col p-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold flex gap-2 items-center">
          Profile Settings
        </h1>
        <p className="text-muted-foreground">
          Update your profile information and account settings.
        </p>
      </div>
      <ProfileForm />
    </div>
  );
}
