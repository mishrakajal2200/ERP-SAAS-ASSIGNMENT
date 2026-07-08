import {
  getDepartmentsAPI,
  createDepartmentAPI,
  updateDepartmentAPI,
  deleteDepartmentAPI,
} from "./departmentAPI";

// GET
export const getDepartmentsService =
  async () => {
    const res =
      await getDepartmentsAPI();

    return res.data;
  };

// CREATE
export const createDepartmentService =
  async (data) => {
    const res =
      await createDepartmentAPI(
        data
      );

    return res.data;
  };

// UPDATE
export const updateDepartmentService =
  async (
    id,
    data
  ) => {
    const res =
      await updateDepartmentAPI(
        id,
        data
      );

    return res.data;
  };

// DELETE
export const deleteDepartmentService =
  async (id) => {
    const res =
      await deleteDepartmentAPI(
        id
      );

    return res.data;
  };