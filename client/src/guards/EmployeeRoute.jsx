import { Navigate } from "react-router-dom";

const EmployeeRoute = ({
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

  // ONLY EMPLOYEE ACCESS
  if (
    user.role !==
    "employee"
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

export default EmployeeRoute;