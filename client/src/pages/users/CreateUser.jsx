// src/pages/users/CreateUser.jsx

import { useState } from "react";
import { createUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  FiUser,
  FiMail,
  FiLock,
  FiShield,
  FiArrowRight,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";

const CreateUser = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createUser(form);

      toast.success("User created successfully");

      navigate("/users");
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Error creating user"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white p-6 md:p-8">
      {/* HEADER */}
      <div className="mb-8">
        <p className="text-indigo-300 uppercase tracking-[0.3em] text-sm mb-3">
          ERP USER MANAGEMENT
        </p>

        <h1 className="text-4xl md:text-5xl font-black">
          Create New User
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
          Add team members, assign access roles,
          and securely manage your multi-tenant
          ERP workspace users.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
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
            {/* GLOW EFFECT */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">
              {/* TOP */}
              <div className="flex items-center gap-4 mb-10">
                <div
                  className="
                    w-16 h-16 rounded-2xl
                    bg-gradient-to-br from-indigo-500 to-purple-600
                    flex items-center justify-center
                    text-3xl
                    shadow-lg shadow-indigo-500/30
                  "
                >
                  <FiUsers />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    User Information
                  </h2>

                  <p className="text-gray-400 mt-1">
                    Fill in the required details below
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
                      placeholder="Enter full name"
                      value={form.name}
                      onChange={handleChange}
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
                        focus:ring-indigo-500/50
                        focus:border-indigo-500/50
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
                      placeholder="Enter email address"
                      value={form.email}
                      onChange={handleChange}
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
                        focus:ring-indigo-500/50
                        focus:border-indigo-500/50
                        transition-all duration-300
                      "
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Password
                  </label>

                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                    <input
                      type="password"
                      name="password"
                      placeholder="Create secure password"
                      value={form.password}
                      onChange={handleChange}
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
                        focus:ring-indigo-500/50
                        focus:border-indigo-500/50
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
                        focus:ring-indigo-500/50
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
                        Creating...
                      </>
                    ) : (
                      <>
                        Create User
                        <FiArrowRight />
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

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* SECURITY CARD */}
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
                Secure Access
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm">
                Every user belongs to an isolated
                company tenant with secure role-based
                access control and protected resources.
              </p>
            </div>
          </div>

          {/* ROLE INFO */}
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
            <h3 className="text-xl font-bold mb-6">
              Role Permissions
            </h3>

            <div className="space-y-4">
              <div className="rounded-2xl bg-indigo-500/10 border border-indigo-500/20 p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-indigo-300">
                    Admin
                  </h4>

                  <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
                    Full Access
                  </span>
                </div>

                <p className="text-sm text-gray-400">
                  Manage users, projects, tasks,
                  analytics, and company operations.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-200">
                    User
                  </h4>

                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                    Limited Access
                  </span>
                </div>

                <p className="text-sm text-gray-400">
                  Access assigned tasks, projects,
                  and workspace collaboration tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;