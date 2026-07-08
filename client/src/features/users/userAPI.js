import api from "../../api/axios";

export const getUsersAPI =
  () => api.get("/users");