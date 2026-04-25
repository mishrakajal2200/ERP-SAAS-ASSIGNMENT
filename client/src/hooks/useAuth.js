import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const useAuth = () => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    user,
    token,
    isAuthenticated: !!token,
    logout: handleLogout,
  };
};

export default useAuth;