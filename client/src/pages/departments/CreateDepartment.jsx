// src/pages/departments/CreateDepartment.jsx

import { useState } from "react";
import {
  Building2,
  Plus,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { createDepartment } from "../../services/departmentService";

const CreateDepartment = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createDepartment({ name });

      alert("Department Created Successfully 🚀");

      setName("");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden p-6 md:p-10">
      
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-indigo-500/20 border border-white/10 backdrop-blur-xl">
              <Building2 className="text-indigo-300" size={28} />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Create Department
              </h1>

              <p className="text-gray-400 mt-1">
                Organize teams and manage departments efficiently.
              </p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />

          <div className="relative z-10 p-8 md:p-10">

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-indigo-200 mb-8">
              <Sparkles size={16} />
              Multi-Tenant ERP Management
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >

              {/* Department Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Department Name
                </label>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Engineering Department"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/10
                      backdrop-blur-xl
                      px-5
                      py-4
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

                  <div className="absolute inset-y-0 right-4 flex items-center text-gray-500">
                    <Building2 size={20} />
                  </div>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-2 gap-5">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-white font-semibold mb-2">
                    Why Departments?
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    Departments help isolate teams, manage employees,
                    and organize projects inside your SaaS ERP system.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-white font-semibold mb-2">
                    Multi-Tenant Security
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    Every department is securely linked to the logged-in
                    company tenant using companyId isolation.
                  </p>
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  relative
                  overflow-hidden
                  w-full
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-600
                  to-cyan-500
                  px-6
                  py-4
                  font-semibold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-cyan-500/30
                  disabled:opacity-60
                "
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? (
                    "Creating Department..."
                  ) : (
                    <>
                      <Plus size={20} />
                      Create Department
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </span>

                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDepartment;