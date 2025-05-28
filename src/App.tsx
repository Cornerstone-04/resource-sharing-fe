import { PageFade } from "./components/shared/page-fade";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import { Toaster } from "sonner";

export default function App() {
  return (
    <PageFade>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </PageFade>
  );
}
