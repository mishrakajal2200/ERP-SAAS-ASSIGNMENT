import { useAuth } from "./useAuth";

const usePermissions =
  () => {
    const { user } =
      useAuth();

    const isAdmin =
      user?.role ===
      "admin";

    const isManager =
      user?.role ===
      "manager";

    const isEmployee =
      user?.role ===
      "employee";

    return {
      isAdmin,
      isManager,
      isEmployee,
    };
  };

export default usePermissions;