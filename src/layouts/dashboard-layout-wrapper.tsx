import DashboardLayout from "./dashboard-layout";
import { Outlet } from "react-router";

export default function DashboardLayoutWrapper() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
