import api from "../../api/axios.js";

export const getDashboardAPI = () =>
    api.get("/dashboard");