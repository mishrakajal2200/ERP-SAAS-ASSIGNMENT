import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../../features/auth/authSlice";


import {
  Building2,
  Eye,
  EyeOff,
  Mail,
  Lock,
  Briefcase,
  TrendingUp,
  Users,
  Wallet,
  Activity,
  ShieldCheck,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector(
  (state) => state.auth
);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    workspace: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.workspace ||
    !formData.email ||
    !formData.password
  ) {
    toast.error("Please fill all fields.");

    return;
  }

  const loadingToast = toast.loading(
    "Signing in..."
  );

  try {
    const result = await dispatch(
      login(formData)
    );

    toast.dismiss(loadingToast);

    if (login.fulfilled.match(result)) {
      toast.success(
        `Welcome back, ${result.payload.data.user.name}! 🎉`
      );

      navigate("/dashboard");
    } else {
      toast.error(
        result.payload ||
          "Invalid email or password."
      );

      setFormData((prev) => ({
        ...prev,
        password: "",
      }));
    }
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    toast.dismiss(loadingToast);

    toast.error(
      "Something went wrong."
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

          {/* Glow */}
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
                Manage Your Entire Business
                <br />
                From One Dashboard
              </h2>

              <p className="mt-6 text-xl text-slate-400 leading-relaxed">
                HR, Payroll, CRM, Projects,
                Inventory and Analytics unified
                into one powerful enterprise platform.
              </p>
            </div>

            {/* Dashboard Preview */}
            <div className="grid grid-cols-2 gap-6 max-w-4xl">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-105 transition">
                <div className="flex items-center justify-between">
                  <Wallet className="text-green-400" />
                  <span className="text-green-400 text-sm">
                    +18.4%
                  </span>
                </div>

                <h3 className="mt-6 text-slate-400">
                  Revenue
                </h3>

                <h2 className="text-4xl font-bold text-white mt-2">
                  ₹12.4M
                </h2>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-105 transition">
                <div className="flex items-center justify-between">
                  <Users className="text-blue-400" />
                  <span className="text-blue-400 text-sm">
                    Active
                  </span>
                </div>

                <h3 className="mt-6 text-slate-400">
                  Employees
                </h3>

                <h2 className="text-4xl font-bold text-white mt-2">
                  482
                </h2>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-105 transition">
                <div className="flex items-center justify-between">
                  <Activity className="text-cyan-400" />
                  <span className="text-cyan-400 text-sm">
                    Live
                  </span>
                </div>

                <h3 className="mt-6 text-slate-400">
                  Attendance
                </h3>

                <h2 className="text-4xl font-bold text-white mt-2">
                  96%
                </h2>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-105 transition">
                <div className="flex items-center justify-between">
                  <TrendingUp className="text-violet-400" />
                  <span className="text-violet-400 text-sm">
                    Running
                  </span>
                </div>

                <h3 className="mt-6 text-slate-400">
                  Projects
                </h3>

                <h2 className="text-4xl font-bold text-white mt-2">
                  18
                </h2>
              </div>
            </div>

            {/* Footer */}
            <div className="flex gap-8 text-slate-400">
              <span>✓ SOC2 Certified</span>
              <span>✓ 256-bit Encryption</span>
              <span>✓ 99.99% Uptime</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-2/5 flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-10">
              <div className="h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto">
                <Building2 className="text-white" />
              </div>

              <h1 className="text-3xl font-bold text-white mt-4">
                ERP Nexus
              </h1>
            </div>

            {/* Card */}
            <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
              <span className="inline-flex px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">
                Secure Login
              </span>

              <h2 className="text-4xl font-bold text-white mt-6">
                Welcome back 👋
              </h2>

              <p className="text-slate-400 mt-3">
                Continue managing your organization,
                employees and operations.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 mt-8"
              >
                {/* Workspace */}
                <div>
                  <label className="text-slate-300 text-sm">
                    Workspace
                  </label>

                  <div className="relative mt-2">
                    <Briefcase
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      type="text"
                      name="workspace"
                      value={formData.workspace}
                      onChange={handleChange}
                      placeholder="company-name"
                      className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-slate-300 text-sm">
                    Email
                  </label>

                  <div className="relative mt-2">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="text-slate-300 text-sm">
                    Password
                  </label>

                  <div className="relative mt-2">
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
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-11 pr-12 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                </div>

                <div className="flex justify-between items-center text-sm">
                  <label className="flex items-center gap-2 text-slate-400">
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <button
                   
                    type="button"
                    className="text-blue-400 hover:text-blue-300"
                  >
                  <Link to="/forgot-password">

                   Forget Password?
                  </Link>
                  </button>
                </div>

                
<p className="text-center text-sm text-slate-400 mt-6">
  Don't have an account?{" "}
  <Link
    to="/register-company"
    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
  >
    Sign up
  </Link>
</p>
                <button
type="submit"
disabled={loading}
className="
w-full
h-14
rounded-xl
bg-blue-600
text-white
font-semibold
hover:bg-blue-700
transition-all
duration-300
disabled:opacity-60
disabled:cursor-not-allowed
"
>
{loading
  ? "Signing In..."
  : "Continue to Dashboard →"}
</button>

                <div className="flex justify-center gap-6 text-xs text-slate-500 pt-3">
                  <span>✓ SOC2</span>
                  <span>✓ GDPR</span>
                  <span>✓ Encrypted</span>
                </div>
              </form>

            </div>

            <p className="text-center text-slate-500 text-sm mt-6">
              Trusted by 500+ organizations worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;