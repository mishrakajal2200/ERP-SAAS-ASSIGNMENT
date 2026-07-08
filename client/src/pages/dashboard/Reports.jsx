import RevenueChart from "../../components/dashboard/RevenueChart";
import TaskChart from "../../components/dashboard/TaskChart";
import DepartmentOverview from "../../components/dashboard/DepartmentOverview";

const Reports = () => {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Reports
        </h1>

        <p className="text-gray-500 mt-2">
          View business insights and export reports.
        </p>
      </div>

      {/* Filters */}

      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex flex-wrap gap-4">

          <input
            type="date"
            className="border rounded-lg px-4 py-2"
          />

          <input
            type="date"
            className="border rounded-lg px-4 py-2"
          />

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
            Filter
          </button>

          <button className="bg-green-600 text-white px-5 py-2 rounded-lg">
            Export CSV
          </button>

          <button className="bg-red-600 text-white px-5 py-2 rounded-lg">
            Export PDF
          </button>

        </div>

      </div>

      <RevenueChart />

      <TaskChart />

      <DepartmentOverview />

      {/* Summary Cards */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow p-6">

          <h3 className="text-lg font-semibold">
            Total Revenue
          </h3>

          <h1 className="text-3xl font-bold mt-3">
            $1,250,000
          </h1>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <h3 className="text-lg font-semibold">
            Projects Completed
          </h3>

          <h1 className="text-3xl font-bold mt-3">
            198
          </h1>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <h3 className="text-lg font-semibold">
            Employee Productivity
          </h3>

          <h1 className="text-3xl font-bold mt-3">
            92%
          </h1>

        </div>

      </div>

    </div>
  );
};

export default Reports;