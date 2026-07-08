import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Building2,
  ArrowLeft,
} from "lucide-react";

import { resetPassword } from "../../features/auth/authSlice";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { token } = useParams();

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      password: "",
      confirmPassword: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      resetPassword({
        token,
        password:
          formData.password,
        confirmPassword:
          formData.confirmPassword,
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden">

      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* Glow */}
      <div className="absolute -top-44 left-0 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-500/20 rounded-full blur-[180px]" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">

        <div className="w-full max-w-md">

          {/* Logo */}

          <div className="text-center mb-8">

            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto">

              <Building2 className="text-white" />

            </div>

            <h1 className="text-3xl font-bold text-white mt-4">
              ERP Nexus
            </h1>

            <p className="text-slate-400 mt-2">
              Enterprise Resource Planning
            </p>

          </div>

          {/* Card */}

          <div
            className="
              bg-white/5
              backdrop-blur-2xl
              border border-white/10
              rounded-3xl
              shadow-2xl
              p-8
            "
          >

            <div className="flex items-center gap-3 mb-4">

              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">

                <ShieldCheck
                  size={20}
                  className="text-cyan-400"
                />

              </div>

              <span className="text-cyan-400 text-sm font-medium">
                Secure Password Reset
              </span>

            </div>

            <h2 className="text-3xl font-bold text-white">
              Create New Password
            </h2>

            <p className="text-slate-400 mt-3">
              Your new password must be different
              from previously used passwords.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Password */}

              <div>

                <label className="block text-slate-300 mb-2 text-sm">
                  New Password
                </label>

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
                    value={
                      formData.password
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter new password"
                    className="
                      w-full
                      h-14
                      pl-11
                      pr-12
                      rounded-xl
                      bg-white/5
                      border border-white/10
                      text-white
                      placeholder:text-slate-500
                      focus:outline-none
                      focus:ring-2
                      focus:ring-cyan-500
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                  >

                    {showPassword ? (
                      <EyeOff
                        size={18}
                      />
                    ) : (
                      <Eye
                        size={18}
                      />
                    )}

                  </button>

                </div>

              </div>

              {/* Confirm */}

              <div>

                <label className="block text-slate-300 mb-2 text-sm">
                  Confirm Password
                </label>

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
                    value={
                      formData.confirmPassword
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Confirm password"
                    className="
                      w-full
                      h-14
                      pl-11
                      pr-12
                      rounded-xl
                      bg-white/5
                      border border-white/10
                      text-white
                      placeholder:text-slate-500
                      focus:outline-none
                      focus:ring-2
                      focus:ring-cyan-500
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                  >

                    {showConfirmPassword ? (
                      <EyeOff
                        size={18}
                      />
                    ) : (
                      <Eye
                        size={18}
                      />
                    )}

                  </button>

                </div>

              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">

                <p className="text-cyan-300 text-sm">
                  Password should contain at least
                  8 characters including uppercase,
                  lowercase, number and special
                  character.
                </p>

              </div>

              <button
                type="submit"
                className="
                  w-full
                  h-14
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-700
                  transition-all
                  duration-300
                  font-semibold
                  text-white
                "
              >
                Reset Password
              </button>

            </form>

            <div className="mt-6 text-center">

              <Link
                to="/login"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition"
              >

                <ArrowLeft size={16} />

                Back to Login

              </Link>

            </div>

            <div className="mt-8 flex justify-center gap-4 text-xs text-slate-500 flex-wrap">

              <span>✓ Secure</span>

              <span>✓ Encrypted</span>

              <span>✓ Protected</span>

            </div>

          </div>

          <p className="text-center text-slate-500 text-sm mt-6">
            Trusted by 500+ organizations worldwide
          </p>

        </div>

      </div>

    </div>
  );
};

export default ResetPassword;