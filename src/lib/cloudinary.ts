export async function uploadToCloudinary(file: File): Promise<string> {
  const url = "https://api.cloudinary.com/v1_1/dkol5whuy/auto/upload";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "kawehub_unsigned");

  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Cloudinary upload failed");
  }

  const data = await res.json();
  return data.secure_url; // ✅ this is the hosted file URL
}
