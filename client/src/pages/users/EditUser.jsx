// src/pages/users/EditUser.jsx

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../../services/userService";
import toast from "react-hot-toast";

import {
  FiUser,
  FiMail,
  FiShield,
  FiEdit3,
  FiSave,
  FiUsers,
  FiCheckCircle,
  FiArrowLeft,
} from "react-icons/fi";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "user",
  });

  // FETCH USER
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserById(id);

        setForm({
          name: res?.data?.data?.name || "",
          email: res?.data?.data?.email || "",
          role: res?.data?.data?.role || "user",
        });
      } catch (error) {
        console.error(error);

        toast.error(
          error?.response?.data?.message ||
            "Failed to fetch user"
        );
      } finally {
        setFetching(false);
      }
    };

    fetchUser();
  }, [id]);

  // HANDLE CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateUser(id, form);

      toast.success("User updated successfully");

      navigate("/users");
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ||
          "Update failed"
      );
    } finally {
      setLoading(false);
    }
  };

  // LOADING SCREEN
  if (fetching) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-5">
          <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />

          <p className="text-gray-400 text-lg">
            Loading user details...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden text-white p-6 md:p-10">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10">
        {/* TOP HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-indigo-300 uppercase tracking-[0.3em] text-sm mb-3">
              USER MANAGEMENT
            </p>

            <h1 className="text-4xl md:text-5xl font-black">
              Edit User
            </h1>

            <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
              Modify employee information, update role
              permissions, and securely manage access
              inside your multi-tenant ERP SaaS system.
            </p>
          </div>

          <button
            onClick={() => navigate("/users")}
            className="
              flex items-center gap-3
              px-6 py-3
              rounded-2xl
              border border-white/10
              bg-white/5
              hover:bg-white/10
              transition-all duration-300
              backdrop-blur-xl
            "
          >
            <FiArrowLeft />
            Back to Users
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="xl:col-span-2">
            <div
              className="
                relative overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                p-8 md:p-10
              "
            >
              {/* CARD GLOW */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full" />

              <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                {/* CARD HEADER */}
                <div className="flex items-center gap-5 mb-10">
                  <div
                    className="
                      w-16 h-16 rounded-2xl
                      bg-gradient-to-br from-indigo-500 to-purple-600
                      flex items-center justify-center
                      text-3xl
                      shadow-lg shadow-indigo-500/30
                    "
                  >
                    <FiEdit3 />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      User Information
                    </h2>

                    <p className="text-gray-400 mt-1">
                      Update profile details and access
                      permissions
                    </p>
                  </div>
                </div>

                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-7"
                >
                  {/* NAME */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Full Name
                    </label>

                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        required
                        className="
                          w-full
                          pl-12 pr-4 py-4
                          rounded-2xl
                          bg-white/5
                          border border-white/10
                          text-white
                          placeholder:text-gray-500
                          focus:outline-none
                          focus:ring-2
                          focus:ring-indigo-500/40
                          focus:border-indigo-500/40
                          transition-all duration-300
                        "
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Email Address
                    </label>

                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        required
                        className="
                          w-full
                          pl-12 pr-4 py-4
                          rounded-2xl
                          bg-white/5
                          border border-white/10
                          text-white
                          placeholder:text-gray-500
                          focus:outline-none
                          focus:ring-2
                          focus:ring-indigo-500/40
                          focus:border-indigo-500/40
                          transition-all duration-300
                        "
                      />
                    </div>
                  </div>

                  {/* ROLE */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      User Role
                    </label>

                    <div className="relative">
                      <FiShield className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg z-10" />

                      <select
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className="
                          w-full
                          pl-12 pr-4 py-4
                          rounded-2xl
                          bg-[#111827]
                          border border-white/10
                          text-white
                          focus:outline-none
                          focus:ring-2
                          focus:ring-indigo-500/40
                          appearance-none
                          transition-all duration-300
                        "
                      >
                        <option value="user">
                          User
                        </option>

                        <option value="admin">
                          Admin
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        flex items-center justify-center gap-3
                        px-8 py-4
                        rounded-2xl
                        bg-gradient-to-r from-indigo-500 to-purple-600
                        hover:scale-[1.02]
                        active:scale-[0.98]
                        transition-all duration-300
                        shadow-xl shadow-indigo-500/25
                        font-semibold
                        disabled:opacity-70
                      "
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />

                          Updating...
                        </>
                      ) : (
                        <>
                          <FiSave />
                          Save Changes
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => navigate("/users")}
                      className="
                        px-8 py-4
                        rounded-2xl
                        bg-white/5
                        border border-white/10
                        hover:bg-white/10
                        transition-all duration-300
                        font-medium
                      "
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            {/* ACCOUNT STATUS */}
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
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                <div
                  className="
                    w-14 h-14 rounded-2xl
                    bg-emerald-500/15
                    flex items-center justify-center
                    text-emerald-400 text-2xl mb-5
                  "
                >
                  <FiCheckCircle />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  Account Active
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  User account is active and securely
                  connected with your company tenant
                  environment.
                </p>
              </div>
            </div>

            {/* ROLE ACCESS */}
            <div
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-6
                shadow-2xl
              "
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="
                    w-12 h-12 rounded-2xl
                    bg-indigo-500/15
                    flex items-center justify-center
                    text-indigo-400 text-xl
                  "
                >
                  <FiUsers />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Role Permissions
                  </h3>

                  <p className="text-sm text-gray-400">
                    Access management system
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-indigo-500/10 border border-indigo-500/20 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-indigo-300">
                      Admin Access
                    </h4>

                    <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
                      Full Access
                    </span>
                  </div>

                  <p className="text-sm text-gray-400">
                    Manage departments, projects,
                    analytics, users, tasks, and company
                    configurations.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-200">
                      User Access
                    </h4>

                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                      Limited Access
                    </span>
                  </div>

                  <p className="text-sm text-gray-400">
                    Access assigned projects, tasks,
                    collaboration tools, and reports.
                  </p>
                </div>
              </div>
            </div>

            {/* SECURITY CARD */}
            <div
              className="
                rounded-3xl
                border border-white/10
                bg-gradient-to-br from-indigo-500/10 to-purple-500/10
                backdrop-blur-2xl
                p-6
                shadow-2xl
              "
            >
              <h3 className="text-xl font-bold mb-4">
                Tenant Security
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Your multi-tenant ERP architecture
                isolates company data securely using
                tenant-based access control and role
                authorization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;