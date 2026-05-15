// src/context/TenantContext.jsx

import { createContext, useContext, useState } from "react";

const TenantContext = createContext();

export const TenantProvider = ({ children }) => {
  const [tenantId, setTenantId] = useState(
    localStorage.getItem("tenantId")
  );

  const updateTenant = (id) => {
    localStorage.setItem("tenantId", id);
    setTenantId(id);
  };

  return (
    <TenantContext.Provider value={{ tenantId, updateTenant }}>
      {children}
    </TenantContext.Provider>
  );
};

export const useTenant = () => useContext(TenantContext);