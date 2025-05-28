import { useNavigate } from "react-router";

export const useAppNavigate = () => {
  const navigate = useNavigate();

  return {
    navigate,
    goToDashboard: () => navigate("/dashboard"),
    goToResources: () => navigate("/dashboard/resources"),
    goToMyMaterials: () => navigate("/dashboard/my-resources"),
    goToChat: () => navigate("/dashboard/chat"),
    goToHome: () => navigate("/"),
    goToLogin: () => navigate("/auth/login"),
    goToRegister: () => navigate("/auth/register"),
    goToVerifyEmail: () => navigate("/auth/verify-email"),
    goToVerifyDocs: () => navigate("/auth/verify-docs"),
    goToVerifySuccess: () => navigate("/auth/verify-success"),
    goToUploadResource: () => navigate("/dashboard/upload-resource"),
  };
};
