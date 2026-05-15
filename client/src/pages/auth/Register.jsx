// src/pages/auth/Register.jsx

import { useState } from "react";
import { registerCompany } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  FiUser,
  FiMail,
  FiLock,
  FiBriefcase,
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
  });

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

      await registerCompany(form);

      toast.success("Company Registered Successfully 🚀");

      navigate("/login");
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#030712]
        flex
        items-center
        justify-center
        px-6
        py-10
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/30 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/30 blur-[140px] rounded-full" />

        <div className="absolute top-[40%] left-[45%] w-[350px] h-[350px] bg-pink-500/20 blur-[120px] rounded-full" />
      </div>

      {/* GRID */}
      <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="hidden lg:block">
          <div className="max-w-xl">
            <p className="uppercase tracking-[0.4em] text-indigo-300 text-sm mb-6">
              Multi Tenant ERP Platform
            </p>

            <h1 className="text-6xl font-black leading-tight text-white">
              Build Your
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Company Workspace
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed">
              Launch your secure SaaS ERP platform
              with multi-tenant architecture,
              enterprise analytics, department
              management, and modern collaboration
              tools.
            </p>

            {/* FEATURES */}
            <div className="mt-12 space-y-5">
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12 h-12 rounded-2xl
                    bg-indigo-500/15
                    border border-indigo-500/20
                    flex items-center justify-center
                    text-indigo-400
                    text-xl
                  "
                >
                  <FiShield />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Enterprise Security
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Secure tenant isolation with
                    advanced role-based access
                    management.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12 h-12 rounded-2xl
                    bg-purple-500/15
                    border border-purple-500/20
                    flex items-center justify-center
                    text-purple-400
                    text-xl
                  "
                >
                  <FiTrendingUp />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Advanced Analytics
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Real-time dashboards, KPI
                    tracking, and productivity
                    insights.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12 h-12 rounded-2xl
                    bg-pink-500/15
                    border border-pink-500/20
                    flex items-center justify-center
                    text-pink-400
                    text-xl
                  "
                >
                  <FiCheckCircle />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Scalable Architecture
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Designed for startups, teams,
                    and enterprise-level
                    organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div
            className="
              relative overflow-hidden
              w-full max-w-xl
              rounded-[32px]
              border border-white/10
              bg-white/5
              backdrop-blur-3xl
              shadow-[0_20px_100px_rgba(0,0,0,0.55)]
              p-8 md:p-10
            "
          >
            {/* GLOW */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />

            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

            {/* CONTENT */}
            <div className="relative z-10">
              {/* HEADER */}
              <div className="mb-10">
                <div
                  className="
                    w-20 h-20 rounded-3xl
                    bg-gradient-to-br from-indigo-500 to-purple-600
                    flex items-center justify-center
                    text-4xl text-white
                    shadow-2xl shadow-indigo-500/30
                    mb-6
                  "
                >
                  <FiBriefcase />
                </div>

                <h2 className="text-4xl font-black text-white">
                  Create Account
                </h2>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  Start building your company ERP
                  workspace with secure multi-tenant
                  architecture.
                </p>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
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
                      placeholder="Enter your full name"
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
                      placeholder="Enter your email"
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

                {/* COMPANY */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Company Name
                  </label>

                  <div className="relative">
                    <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                    <input
                      type="text"
                      name="companyName"
                      placeholder="Enter company name"
                      value={form.companyName}
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

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    flex items-center justify-center gap-3
                    py-4
                    rounded-2xl
                    bg-gradient-to-r from-indigo-500 to-purple-600
                    text-white
                    font-semibold
                    shadow-xl shadow-indigo-500/30
                    hover:scale-[1.02]
                    active:scale-[0.98]
                    transition-all duration-300
                    disabled:opacity-70
                  "
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Creating Workspace...
                    </>
                  ) : (
                    <>
                      Create Company
                      <FiArrowRight />
                    </>
                  )}
                </button>
              </form>

              {/* LOGIN */}
              <div className="mt-8 text-center">
                <p className="text-gray-400">
                  Already have an account?
                </p>

                <button
                  onClick={() => navigate("/login")}
                  className="
                    mt-3
                    text-indigo-400
                    hover:text-indigo-300
                    font-semibold
                    transition-all
                  "
                >
                  Login to your workspace →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;