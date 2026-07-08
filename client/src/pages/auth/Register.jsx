import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Building2,
  Mail,
  Lock,
  User,
  Building,
  Eye,
  EyeOff,
  Users,
  Wallet,
  Activity,
  TrendingUp,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";
import toast from "react-hot-toast";
const Register = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation
  if (
    !formData.companyName ||
    !formData.name ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    toast.error("Please fill all fields.");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match.");
    return;
  }

  try {
    const result = await dispatch(
      register(formData)
    ).unwrap();

    toast.success(
      result.message || "Workspace created successfully!"
    );

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  } catch (error) {
    toast.error(
      error || "Registration failed."
    );
  }
};
  

  return (
    <div className="min-h-screen bg-[#020617] overflow-hidden">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex lg:w-3/5 relative overflow-hidden">

          {/* Background Grid */}
          <div
            className="
              absolute inset-0
              bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
              linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
              bg-[size:40px_40px]
            "
          />

          {/* Glow Effects */}
          <div className="absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[180px]" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[180px]" />

          <div className="relative z-10 flex flex-col justify-between h-full w-full px-16 py-12">

            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-blue-600 flex items-center justify-center">
                <Building2 className="text-white" />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-white">
                  ERP Nexus
                </h1>

                <p className="text-slate-400">
                  Multi-Tenant ERP Platform
                </p>
              </div>
            </div>

            {/* Hero */}
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold text-white leading-tight">
                Launch Your Organization
                <br />
                In Minutes.
              </h2>

              <p className="mt-6 text-xl text-slate-400">
                Create your company workspace and
                start managing HR, Payroll,
                Projects, CRM and Analytics from
                one unified platform.
              </p>
            </div>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-2 gap-6 max-w-4xl">

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                <Wallet className="text-green-400" />

                <h3 className="text-slate-400 mt-4">
                  Revenue
                </h3>

                <h2 className="text-4xl font-bold text-white mt-2">
                  ₹12.4M
                </h2>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                <Users className="text-blue-400" />

                <h3 className="text-slate-400 mt-4">
                  Employees
                </h3>

                <h2 className="text-4xl font-bold text-white mt-2">
                  482
                </h2>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                <Activity className="text-cyan-400" />

                <h3 className="text-slate-400 mt-4">
                  Attendance
                </h3>

                <h2 className="text-4xl font-bold text-white mt-2">
                  96%
                </h2>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                <TrendingUp className="text-violet-400" />

                <h3 className="text-slate-400 mt-4">
                  Projects
                </h3>

                <h2 className="text-4xl font-bold text-white mt-2">
                  18
                </h2>
              </div>
            </div>

            <div className="flex gap-8 text-slate-400">
              <span>✓ SOC2 Certified</span>
              <span>✓ GDPR Compliant</span>
              <span>✓ 99.99% Uptime</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-2/5 flex items-center justify-center px-6 py-10">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Building2 className="text-white" />
              </div>

              <h1 className="text-3xl font-bold text-white mt-4">
                ERP Nexus
              </h1>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">

              <span className="inline-flex px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">
                Create Workspace
              </span>

              <h2 className="text-4xl font-bold text-white mt-6">
                Get Started 🚀
              </h2>

              <p className="text-slate-400 mt-3">
                Create your organization and
                start managing everything from
                one place.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 mt-8"
              >
                {/* Company */}
                <div className="relative">
                  <Building
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full h-14 pl-11 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500"
                  />
                </div>

                {/* Name */}
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-14 pl-11 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-14 pl-11 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full h-14 pl-11 pr-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full h-14 pl-11 pr-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                <button
                  type="submit"
                  className="
                    w-full
                    h-14
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    font-semibold
                    transition
                  "
                >
                  Create Workspace →
                </button>

                <p className="text-center text-sm text-slate-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;