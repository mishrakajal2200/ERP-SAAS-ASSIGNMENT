import { Navigate } from "react-router-dom";

const AdminRoute = ({
  children,
}) => {
  const user = JSON.parse(
    localStorage.getItem(
      "user"
    )
  );

  // NOT LOGGED IN
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  // NOT ADMIN
  if (
    user.role !== "admin"
  ) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return children;
};

export default AdminRoute;