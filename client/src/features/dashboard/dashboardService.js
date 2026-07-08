import { getDashboardAPI } from "./dashboardAPI.js";

export const getDashboardService = async () => {
    const res = await getDashboardAPI();

    return res.data.data;
}