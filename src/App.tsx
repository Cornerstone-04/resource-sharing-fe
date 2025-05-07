import { PageFade } from "./components/shared/page-fade";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";

export default function App() {
  return (
    <PageFade>
      <RouterProvider router={router} />
    </PageFade>
  );
}
