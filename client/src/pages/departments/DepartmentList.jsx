// src/pages/departments/DepartmentList.jsx

import { useEffect, useState } from "react";

import {
  Building2,
  Search,
  Users,
  CalendarDays,
  Sparkles,
  Layers3,
} from "lucide-react";

import { getDepartments } from "../../services/departmentService";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await getDepartments();
        setDepartments(res.data.data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen relative overflow-hidden p-6 md:p-10">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-2xl bg-indigo-500/20 border border-white/10 backdrop-blur-xl">
                <Building2 className="text-indigo-300" size={28} />
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Departments
                </h1>

                <p className="text-gray-400 mt-1">
                  Manage all departments inside your ERP workspace.
                </p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-96">
            <input
              type="text"
              placeholder="Search department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/10
                backdrop-blur-xl
                py-4
                pl-14
                pr-5
                text-white
                placeholder:text-gray-500
                outline-none
                transition-all
                duration-300
                focus:border-indigo-400
                focus:ring-4
                focus:ring-indigo-500/20
              "
            />

            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">
                  Total Departments
                </p>

                <h2 className="text-3xl font-bold text-white mt-2">
                  {departments.length}
                </h2>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-500/20">
                <Layers3 className="text-indigo-300" size={28} />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">
                  Team Collaboration
                </p>

                <h2 className="text-3xl font-bold text-white mt-2">
                  Active
                </h2>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-500/20">
                <Users className="text-cyan-300" size={28} />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">
                  Multi-Tenant Status
                </p>

                <h2 className="text-3xl font-bold text-white mt-2">
                  Secure
                </h2>
              </div>

              <div className="p-4 rounded-2xl bg-pink-500/20">
                <Sparkles className="text-pink-300" size={28} />
              </div>
            </div>
          </div>
        </div>

        {/* Department List */}
        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">

          {/* Table Header */}
          <div className="grid grid-cols-12 px-6 py-5 border-b border-white/10 bg-white/5">
            <div className="col-span-6 text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Department
            </div>

            <div className="col-span-3 text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Created
            </div>

            <div className="col-span-3 text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Status
            </div>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="p-10 text-center text-gray-400">
              Loading departments...
            </div>
          ) : filteredDepartments.length === 0 ? (
            <div className="p-10 text-center">
              <Building2
                size={50}
                className="mx-auto text-gray-500 mb-4"
              />

              <h3 className="text-xl font-semibold text-white">
                No Departments Found
              </h3>

              <p className="text-gray-400 mt-2">
                Try creating a new department.
              </p>
            </div>
          ) : (
            filteredDepartments.map((dept) => (
              <div
                key={dept._id}
                className="
                  grid
                  grid-cols-12
                  items-center
                  px-6
                  py-5
                  border-b
                  border-white/5
                  hover:bg-white/5
                  transition-all
                  duration-300
                "
              >

                {/* Department */}
                <div className="col-span-6 flex items-center gap-4">

                  <div className="p-3 rounded-2xl bg-indigo-500/20">
                    <Building2
                      className="text-indigo-300"
                      size={22}
                    />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">
                      {dept.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                      ERP Department Workspace
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="col-span-3 flex items-center gap-2 text-gray-300 text-sm">
                  <CalendarDays size={16} />

                  {new Date(dept.createdAt).toLocaleDateString()}
                </div>

                {/* Status */}
                <div className="col-span-3">
                  <span className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-4
                    py-1.5
                    text-sm
                    font-medium
                    text-emerald-300
                  ">
                    Active
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartmentList;