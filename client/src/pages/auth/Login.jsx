// src/pages/auth/Login.jsx

import { useState } from "react";
import { loginUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  FiMail,
  FiLock,
  FiArrowRight,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // HANDLE CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await loginUser(form);

      console.log("LOGIN RESPONSE:", res.data);

      // BACKEND RESPONSE
      const { token, user } = res.data.data;

      // SAVE TOKEN
      localStorage.setItem("token", token);

      // SAVE TENANT ID
      if (user?.companyId) {
        localStorage.setItem(
          "tenantId",
          user.companyId
        );
      }

      toast.success(
        `Welcome back ${user?.name || ""} 🚀`
      );

      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      toast.error(
        err?.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen
        relative
        overflow-hidden
        bg-[#030712]
        flex
        items-center
        justify-center
        px-6
        py-10
      "
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0">
        {/* GRADIENT BLOBS */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full" />

        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />

        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full" />

        {/* GRID */}
        <div
          className="
            absolute inset-0 opacity-[0.04]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />
      </div>

      {/* CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="hidden lg:block">
          <p className="uppercase tracking-[0.35em] text-indigo-300 text-sm mb-6">
            MULTI TENANT ERP SAAS
          </p>

          <h1 className="text-6xl font-black leading-tight text-white">
            Manage Your
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Business Operations
            </span>
            Seamlessly
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-2xl">
            Advanced ERP SaaS platform for managing
            users, departments, projects, analytics,
            tasks, and company operations with secure
            tenant-based architecture.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
            {/* CARD */}
            <div
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-5
              "
            >
              <div
                className="
                  w-14 h-14 rounded-2xl
                  bg-indigo-500/15
                  flex items-center justify-center
                  text-indigo-400 text-2xl mb-4
                "
              >
                <FiShield />
              </div>

              <h3 className="font-semibold text-white mb-2">
                Secure Access
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                Tenant-isolated authentication and
                enterprise-grade security.
              </p>
            </div>

            {/* CARD */}
            <div
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-5
              "
            >
              <div
                className="
                  w-14 h-14 rounded-2xl
                  bg-purple-500/15
                  flex items-center justify-center
                  text-purple-400 text-2xl mb-4
                "
              >
                <FiTrendingUp />
              </div>

              <h3 className="font-semibold text-white mb-2">
                Analytics
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                Monitor company growth and team
                productivity in real-time.
              </p>
            </div>

            {/* CARD */}
            <div
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-5
              "
            >
              <div
                className="
                  w-14 h-14 rounded-2xl
                  bg-cyan-500/15
                  flex items-center justify-center
                  text-cyan-400 text-2xl mb-4
                "
              >
                <FiUsers />
              </div>

              <h3 className="font-semibold text-white mb-2">
                Team Management
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                Manage employees, projects, and
                departments effortlessly.
              </p>
            </div>
          </div>
        </div>

        {/* LOGIN CARD */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="
              relative overflow-hidden
              w-full max-w-xl
              rounded-[32px]
              border border-white/10
              bg-white/[0.06]
              backdrop-blur-3xl
              shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              p-8 md:p-10
            "
          >
            {/* GLOW */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />

            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">
              {/* HEADER */}
              <div className="mb-10">
                <div
                  className="
                    w-20 h-20 rounded-3xl
                    bg-gradient-to-br from-indigo-500 to-purple-600
                    flex items-center justify-center
                    text-white text-4xl
                    shadow-2xl shadow-indigo-500/30
                    mb-6
                  "
                >
                  <FiShield />
                </div>

                <h2 className="text-4xl font-black text-white">
                  Welcome Back
                </h2>

                <p className="text-gray-400 mt-3 leading-relaxed">
                  Sign in to access your ERP SaaS
                  workspace and manage your company
                  operations securely.
                </p>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="space-y-7"
              >
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
                        focus:ring-indigo-500/40
                        focus:border-indigo-500/40
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
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      name="password"
                      placeholder="Enter your password"
                      value={form.password}
                      onChange={handleChange}
                      required
                      className="
                        w-full
                        pl-12 pr-14 py-4
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

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                    >
                      {showPassword ? (
                        <FiEyeOff />
                      ) : (
                        <FiEye />
                      )}
                    </button>
                  </div>
                </div>

                {/* OPTIONS */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-3 text-sm text-gray-400 cursor-pointer">
                    <input
                      type="checkbox"
                      className="accent-indigo-500"
                    />

                    Remember me
                  </label>

                  <button
                    type="button"
                    className="text-sm text-indigo-300 hover:text-indigo-200 transition"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    w-full
                    flex items-center justify-center gap-3
                    py-4
                    rounded-2xl
                    bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500
                    hover:scale-[1.02]
                    active:scale-[0.98]
                    transition-all duration-300
                    shadow-[0_15px_50px_rgba(99,102,241,0.35)]
                    font-semibold
                    text-white
                    disabled:opacity-70
                  "
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />

                      Signing In...
                    </>
                  ) : (
                    <>
                      Access Dashboard

                      <FiArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                    </>
                  )}
                </button>
              </form>

              {/* FOOTER */}
              <div className="mt-10 text-center">
                <p className="text-gray-400">
                  Don’t have an account?{" "}

                  <button
                    onClick={() =>
                      navigate("/register")
                    }
                    className="
                      text-indigo-300
                      hover:text-indigo-200
                      font-semibold
                      transition-all duration-300
                    "
                  >
                    Create Account
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;