import { useState } from "react";
import TenantContext from "./TenantContext";

const TenantProvider = ({ children }) => {
  const [tenantId, setTenantId] = useState(
    localStorage.getItem("tenantId")
  );

  const switchTenant = (id) => {
    setTenantId(id);
    localStorage.setItem("tenantId", id);
  };

  return (
    <TenantContext.Provider value={{ tenantId, switchTenant }}>
      {children}
    </TenantContext.Provider>
  );
};

export default TenantProvider;