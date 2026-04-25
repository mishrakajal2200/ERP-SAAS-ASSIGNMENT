import { useContext } from "react";
import TenantContext from "../context/TenantContext";

const useTenant = () => {
  return useContext(TenantContext);
};

export default useTenant;