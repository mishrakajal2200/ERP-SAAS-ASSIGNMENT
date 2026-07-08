import { Users } from "lucide-react";
import { useSelector } from "react-redux";

const RecentEmployees = () => {
  const { dashboard, loading } = useSelector(
    (state) => state.dashboard
  );

  const employees = dashboard?.recentEmployees || [];

  if (loading) {
    return (
      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">
        <p className="text-slate-400">Loading employees...</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">

          <Users className="text-cyan-400" />

          <h2 className="text-xl text-white font-semibold">
            New Employees
          </h2>

        </div>

        <span className="text-sm text-slate-400">
          {employees.length} Employees
        </span>

      </div>

      {employees.length === 0 ? (

        <div className="text-center py-10">

          <p className="text-slate-500">
            No employees found.
          </p>

        </div>

      ) : (

        <div className="space-y-5">

          {employees.map((employee) => (

            <div
              key={employee._id}
              className="
              flex
              items-center
              justify-between
              bg-slate-800
              rounded-2xl
              p-4
              hover:bg-slate-700
              transition
              "
            >

              <div className="flex items-center gap-4">

                <img
                  src={
                    employee.profileImage ||
                    `https://ui-avatars.com/api/?name=${employee.name}&background=0D8ABC&color=fff`
                  }
                  alt={employee.name}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>

                  <h3 className="text-white font-semibold">
                    {employee.name}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {employee.role}
                  </p>

                  <p className="text-slate-500 text-xs mt-1">
                    {employee.department?.name || "No Department"}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <p className="text-green-400 text-sm">
                  New
                </p>

                <p className="text-slate-500 text-xs">
                  {employee.createdAt
                    ? new Date(employee.createdAt).toLocaleDateString()
                    : ""}
                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default RecentEmployees;