import api from "../../api/axios";

// GET DEPARTMENTS
export const getDepartmentsAPI =
  () =>
    api.get(
      "/departments"
    );

// CREATE DEPARTMENT
export const createDepartmentAPI =
  (data) =>
    api.post(
      "/departments",
      data
    );

// UPDATE DEPARTMENT
export const updateDepartmentAPI =
  (id, data) =>
    api.put(
      `/departments/${id}`,
      data
    );

// DELETE DEPARTMENT
export const deleteDepartmentAPI =
  (id) =>
    api.delete(
      `/departments/${id}`
    );