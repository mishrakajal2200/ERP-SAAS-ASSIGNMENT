import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Mail,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

import { useDispatch } from "react-redux";
import { forgotPassword } from "../../features/auth/authSlice.js";

const ForgotPassword = () => {

  const dispatch = useDispatch();
  
  const [email, setEmail] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(forgotPassword(email));
  };

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden">

      {/* Grid Background */}
      <div
        className="
        absolute inset-0
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:40px_40px]
      "
      />

      {/* Glow Effects */}
      <div className="absolute -top-40 left-0 h-[400px] w-[400px] bg-blue-500/20 rounded-full blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-cyan-500/20 rounded-full blur-[150px]" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">

        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="text-center mb-8">

            <div className="h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto">
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
            border
            border-white/10
            rounded-3xl
            p-8
            shadow-2xl
          "
          >

            <div className="flex items-center gap-2 mb-4">

              <div className="h-10 w-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <ShieldCheck
                  size={20}
                  className="text-blue-400"
                />
              </div>

              <span className="text-blue-400 text-sm font-medium">
                Secure Recovery
              </span>

            </div>

            <h2 className="text-3xl font-bold text-white">
              Forgot Password?
            </h2>

            <p className="text-slate-400 mt-3 leading-relaxed">
              Enter your registered email
              address and we'll send you a
              secure password reset link.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8"
            >

              <div className="relative">

                <Mail
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-500
                  "
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    h-14
                    pl-11
                    pr-4
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    placeholder:text-slate-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                />

              </div>

              <button
                type="submit"
                className="
                  mt-5
                  w-full
                  h-14
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  font-semibold
                  transition-all
                  duration-300
                "
              >
                Send Reset Link →
              </button>

            </form>

            {/* Back To Login */}
            <div className="mt-6 text-center">

              <Link
                to="/login"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-slate-400
                  hover:text-white
                  transition
                "
              >
                <ArrowLeft size={16} />
                Back to Login
              </Link>

            </div>

            {/* Trust */}
            <div
              className="
                mt-8
                flex
                justify-center
                gap-5
                text-xs
                text-slate-500
                flex-wrap
              "
            >
              <span>
                ✓ SOC2
              </span>

              <span>
                ✓ GDPR
              </span>

              <span>
                ✓ Encrypted
              </span>
            </div>

          </div>

          {/* Footer */}
          <p className="text-center text-slate-500 text-sm mt-6">
            Trusted by 500+ organizations
            worldwide
          </p>

        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;