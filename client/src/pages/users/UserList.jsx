// src/pages/users/UserList.jsx

import { useEffect, useMemo, useState } from "react";
import { getUsers } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  FiPlus,
  FiSearch,
  FiEdit3,
  FiUsers,
  FiShield,
  FiMail,
  FiFilter,
  FiChevronRight,
  FiTrendingUp,
  FiActivity,
} from "react-icons/fi";

const UserList = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  // FETCH USERS
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers();
        setUsers(res.data.data || []);
      } catch (error) {
        toast.error(
          error?.response?.data?.message ||
            "Failed to fetch users"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // FILTERED USERS
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        user.email
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesRole =
        roleFilter === "all"
          ? true
          : user.role === roleFilter;

      return matchesSearch && matchesRole;
    });
  }, [users, search, roleFilter]);

  // ROLE BADGE
  const getRoleStyle = (role) => {
    switch (role) {
      case "admin":
        return `
          bg-indigo-500/15
          text-indigo-300
          border border-indigo-500/20
        `;

      default:
        return `
          bg-emerald-500/10
          text-emerald-300
          border border-emerald-500/20
        `;
    }
  };

  // LOADING
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />

          <p className="text-gray-400 text-lg">
            Loading users...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white p-6 md:p-8">
      {/* HERO SECTION */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">
        <div>
          <p className="uppercase tracking-[0.35em] text-indigo-300 text-sm mb-3">
            USER MANAGEMENT
          </p>

          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            Workspace Users
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Manage employee access, permissions,
            tenant-based roles, and workspace
            collaboration across your ERP SaaS
            platform.
          </p>
        </div>

        {/* ADD BUTTON */}
        <button
          onClick={() => navigate("/users/create")}
          className="
            group
            flex items-center gap-3
            px-7 py-4
            rounded-2xl
            bg-gradient-to-r from-indigo-500 to-purple-600
            hover:scale-[1.03]
            active:scale-[0.98]
            transition-all duration-300
            shadow-[0_15px_50px_rgba(99,102,241,0.35)]
            font-semibold
            self-start
          "
        >
          <FiPlus className="text-lg" />

          Add New User

          <FiChevronRight className="group-hover:translate-x-1 transition-all duration-300" />
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* TOTAL USERS */}
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-6
            shadow-2xl
          "
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-2">
                  Total Users
                </p>

                <h2 className="text-4xl font-black">
                  {users.length}
                </h2>
              </div>

              <div
                className="
                  w-16 h-16 rounded-2xl
                  bg-indigo-500/15
                  flex items-center justify-center
                  text-indigo-400 text-3xl
                "
              >
                <FiUsers />
              </div>
            </div>
          </div>
        </div>

        {/* ADMINS */}
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-6
            shadow-2xl
          "
        >
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-2">
                  Admin Users
                </p>

                <h2 className="text-4xl font-black">
                  {
                    users.filter(
                      (u) => u.role === "admin"
                    ).length
                  }
                </h2>
              </div>

              <div
                className="
                  w-16 h-16 rounded-2xl
                  bg-purple-500/15
                  flex items-center justify-center
                  text-purple-400 text-3xl
                "
              >
                <FiShield />
              </div>
            </div>
          </div>
        </div>

        {/* ACTIVE */}
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-6
            shadow-2xl
          "
        >
          <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-2">
                  Active Workspace
                </p>

                <h2 className="text-4xl font-black">
                  98%
                </h2>
              </div>

              <div
                className="
                  w-16 h-16 rounded-2xl
                  bg-emerald-500/15
                  flex items-center justify-center
                  text-emerald-400 text-3xl
                "
              >
                <FiTrendingUp />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE SECTION */}
      <div
        className="
          relative overflow-hidden
          rounded-[32px]
          border border-white/10
          bg-white/5
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        "
      >
        {/* GLOW */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full" />

        {/* HEADER */}
        <div className="relative z-10 p-6 border-b border-white/10">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
            <div>
              <h2 className="text-2xl font-bold">
                Employee Directory
              </h2>

              <p className="text-gray-400 mt-2">
                Search and manage all tenant users
                across your organization.
              </p>
            </div>

            {/* FILTERS */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* SEARCH */}
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  placeholder="Search users..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  className="
                    w-full sm:w-72
                    pl-12 pr-4 py-3
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    text-white
                    placeholder:text-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-indigo-500/40
                    transition-all duration-300
                  "
                />
              </div>

              {/* ROLE FILTER */}
              <div className="relative">
                <FiFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" />

                <select
                  value={roleFilter}
                  onChange={(e) =>
                    setRoleFilter(e.target.value)
                  }
                  className="
                    pl-12 pr-10 py-3
                    rounded-2xl
                    bg-[#111827]
                    border border-white/10
                    text-white
                    appearance-none
                    focus:outline-none
                    focus:ring-2
                    focus:ring-indigo-500/40
                    transition-all duration-300
                  "
                >
                  <option value="all">
                    All Roles
                  </option>

                  <option value="admin">
                    Admin
                  </option>

                  <option value="user">
                    User
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="relative z-10 overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="px-6 py-5 text-sm font-semibold text-gray-400">
                  User
                </th>

                <th className="px-6 py-5 text-sm font-semibold text-gray-400">
                  Email
                </th>

                <th className="px-6 py-5 text-sm font-semibold text-gray-400">
                  Role
                </th>

                <th className="px-6 py-5 text-sm font-semibold text-gray-400">
                  Status
                </th>

                <th className="px-6 py-5 text-sm font-semibold text-gray-400 text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr
                    key={user._id}
                    className="
                      border-b border-white/5
                      hover:bg-white/[0.03]
                      transition-all duration-300
                    "
                  >
                    {/* USER */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div
                          className="
                            w-12 h-12 rounded-2xl
                            bg-gradient-to-br from-indigo-500 to-purple-600
                            flex items-center justify-center
                            font-bold
                            shadow-lg shadow-indigo-500/20
                          "
                        >
                          {user.name?.charAt(0)}
                        </div>

                        <div>
                          <h3 className="font-semibold text-white">
                            {user.name}
                          </h3>

                          <p className="text-sm text-gray-400">
                            Tenant Workspace User
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* EMAIL */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3 text-gray-300">
                        <FiMail className="text-indigo-400" />

                        {user.email}
                      </div>
                    </td>

                    {/* ROLE */}
                    <td className="px-6 py-5">
                      <span
                        className={`
                          px-4 py-2 rounded-full text-sm font-medium
                          ${getRoleStyle(user.role)}
                        `}
                      >
                        {user.role}
                      </span>
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-emerald-400">
                        <FiActivity />

                        <span className="text-sm">
                          Active
                        </span>
                      </div>
                    </td>

                    {/* ACTION */}
                    <td className="px-6 py-5 text-right">
                      <button
                        onClick={() =>
                          navigate(
                            `/users/edit/${user._id}`
                          )
                        }
                        className="
                          inline-flex items-center gap-2
                          px-5 py-2.5
                          rounded-xl
                          bg-indigo-500/10
                          hover:bg-indigo-500/20
                          border border-indigo-500/20
                          text-indigo-300
                          transition-all duration-300
                        "
                      >
                        <FiEdit3 />

                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="py-16 text-center"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className="
                          w-20 h-20 rounded-3xl
                          bg-white/5
                          border border-white/10
                          flex items-center justify-center
                          text-4xl text-gray-500
                          mb-5
                        "
                      >
                        <FiUsers />
                      </div>

                      <h3 className="text-xl font-semibold mb-2">
                        No users found
                      </h3>

                      <p className="text-gray-400">
                        Try adjusting your search or
                        filters.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;