import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatsCards from "../../components/dashboard/StatsCards";
import RevenueChart from "../../components/dashboard/RevenueChart";
import TaskChart from "../../components/dashboard/TaskChart";
import DepartmentOverview from "../../components/dashboard/DepartmentOverview";
import RecentProjects from "../../components/dashboard/RecentProjects";
import UpcomingTasks from "../../components/dashboard/UpcomingTasks";
import RecentActivity from "../../components/dashboard/RecentActivity";
import QuickActions from "../../components/dashboard/QuickActions";

const DashboardHome = () => {
  return (
    <div className="space-y-8">

      <WelcomeBanner />

      <StatsCards />

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8">

        <RevenueChart />

        <TaskChart />

      </div>

      {/* Department + Projects */}
      <div className="grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2">

          <DepartmentOverview />

        </div>

        <UpcomingTasks />

      </div>

      {/* Projects */}
      <RecentProjects />

      {/* Activity + Actions */}
      <div className="grid lg:grid-cols-2 gap-8">

        <RecentActivity />

        <QuickActions />

      </div>

    </div>
  );
};

export default DashboardHome;