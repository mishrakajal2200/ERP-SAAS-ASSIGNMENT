import { useEffect } from "react";
import { useDispatch } from "react-redux";

import DashboardHome from "./DashboardHome";
import { getDashboard } from "../../features/dashboard/dashboardThunk.js";



const Dashboard = () => {

  const dispatch = useDispatch();

  useEffect(() => {
console.log("Dispatching Dashboard API");
    dispatch(getDashboard());

  }, [dispatch]);

  return (
    <div className="dashboard-page">

      <DashboardHome />

    </div>
  );
};

export default Dashboard;