// src/pages/dashboard/Dashboard.jsx

import {
  FaUsers,
  FaProjectDiagram,
  FaTasks,
  FaArrowUp,
} from "react-icons/fa";

import {
  MdOutlinePendingActions,
  MdOutlineBusinessCenter,
} from "react-icons/md";

import {
  HiOutlineChartSquareBar,
  HiOutlineClock,
} from "react-icons/hi";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,248",
      growth: "+12%",
      icon: <FaUsers />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Active Projects",
      value: "86",
      growth: "+8%",
      icon: <FaProjectDiagram />,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Pending Tasks",
      value: "342",
      growth: "+18%",
      icon: <FaTasks />,
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Departments",
      value: "14",
      growth: "+3%",
      icon: <MdOutlineBusinessCenter />,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const recentActivities = [
    {
      title: "New Project Created",
      desc: "ERP Migration System",
      time: "2 mins ago",
    },
    {
      title: "Task Completed",
      desc: "UI Dashboard Design",
      time: "18 mins ago",
    },
    {
      title: "New Employee Added",
      desc: "John Doe joined Design Team",
      time: "1 hour ago",
    },
    {
      title: "Server Updated",
      desc: "Production deployment successful",
      time: "3 hours ago",
    },
  ];

  const projects = [
    {
      name: "CRM Dashboard",
      progress: 82,
      status: "In Progress",
    },
    {
      name: "HR Management",
      progress: 65,
      status: "Review",
    },
    {
      name: "Finance ERP",
      progress: 92,
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-6">
      {/* TOP HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
        <div>
          <h1 className="text-4xl font-black tracking-tight">
            Multi-Tenant ERP Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Manage projects, employees, departments and analytics
          </p>
        </div>

        {/* SEARCH + PROFILE */}
        <div className="flex items-center gap-4">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl px-4 py-3 w-[260px]">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-full text-sm placeholder:text-slate-500"
            />
          </div>

          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl backdrop-blur-xl">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-11 h-11 rounded-full object-cover"
            />

            <div>
              <h3 className="font-semibold text-sm">Kajal Mishra</h3>
              <p className="text-xs text-slate-400">
                Super Admin
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            {/* Glow */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-20 blur-3xl`}
            />

            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-slate-400 text-sm">
                  {item.title}
                </p>

                <h2 className="text-4xl font-black mt-2">
                  {item.value}
                </h2>

                <div className="flex items-center gap-1 mt-4 text-emerald-400 text-sm">
                  <FaArrowUp />
                  {item.growth} this month
                </div>
              </div>

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl shadow-lg`}
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* LEFT SECTION */}
        <div className="xl:col-span-2 space-y-6">
          {/* ANALYTICS */}
          <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-2xl p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">
                  Revenue Analytics
                </h2>

                <p className="text-slate-400 text-sm mt-1">
                  Company performance overview
                </p>
              </div>

              <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-xl text-sm">
                +24% Growth
              </div>
            </div>

            {/* CHART PLACEHOLDER */}
            <div className="h-[320px] rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <HiOutlineChartSquareBar className="text-7xl text-cyan-400 mx-auto mb-4" />

                <p className="text-xl font-semibold">
                  Advanced Analytics Chart
                </p>

                <p className="text-slate-400 mt-2">
                  Integrate Recharts / Chart.js here
                </p>
              </div>
            </div>
          </div>

          {/* PROJECT TABLE */}
          <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                Running Projects
              </h2>

              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 rounded-xl text-sm font-semibold hover:opacity-90">
                View All
              </button>
            </div>

            <div className="space-y-5">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">
                      {project.name}
                    </h3>

                    <span className="text-sm text-cyan-400">
                      {project.status}
                    </span>
                  </div>

                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      style={{
                        width: `${project.progress}%`,
                      }}
                    />
                  </div>

                  <div className="mt-2 text-right text-sm text-slate-400">
                    {project.progress}% completed
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {/* TEAM PERFORMANCE */}
          <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Team Performance
            </h2>

            <div className="flex justify-center">
              <div className="relative w-48 h-48 rounded-full border-[14px] border-cyan-500 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-5xl font-black">
                    84%
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    Productivity
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Recent Activities
            </h2>

            <div className="space-y-5">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <HiOutlineClock />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      {activity.title}
                    </h4>

                    <p className="text-sm text-slate-400 mt-1">
                      {activity.desc}
                    </p>

                    <span className="text-xs text-slate-500 mt-2 block">
                      {activity.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-6 shadow-2xl">
            <h2 className="text-2xl font-bold mb-3">
              Quick Actions
            </h2>

            <p className="text-sm text-white/80 mb-6">
              Create new projects, assign tasks and manage teams
            </p>

            <div className="space-y-3">
              <button className="w-full bg-white/20 hover:bg-white/30 transition rounded-2xl py-3 font-semibold">
                + Create Project
              </button>

              <button className="w-full bg-white/20 hover:bg-white/30 transition rounded-2xl py-3 font-semibold">
                + Add Employee
              </button>

              <button className="w-full bg-white/20 hover:bg-white/30 transition rounded-2xl py-3 font-semibold">
                + Create Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;