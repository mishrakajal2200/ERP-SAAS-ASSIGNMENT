// src/services/storageService.js

// USER
export const setUser = (user) => {
  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );
};

export const getUser = () => {
  const user = localStorage.getItem("user");

  return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
  localStorage.removeItem("user");
};

// COMPANY
export const setCompanyId = (companyId) => {
  localStorage.setItem(
    "companyId",
    companyId
  );
};

export const getCompanyId = () => {
  return localStorage.getItem("companyId");
};

export const removeCompanyId = () => {
  localStorage.removeItem("companyId");
};

// CLEAR ALL
export const clearStorage = () => {
  localStorage.clear();
};