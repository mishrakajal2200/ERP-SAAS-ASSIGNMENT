import {
  Users,
  Circle,
  Building2,
  Mail,
} from "lucide-react";

import { useSelector } from "react-redux";

const TeamMembers = () => {
  const { dashboard, loading } = useSelector(
    (state) => state.dashboard
  );

  const members =
    dashboard?.teamMembers || [];

  const statusColor = {
    Online: "bg-green-500",
    Away: "bg-yellow-500",
    Offline: "bg-slate-500",
    Busy: "bg-red-500",
  };

  if (loading) {
    return (
      <section className="bg-slate-900 rounded-3xl border border-slate-800 p-6 h-[500px] animate-pulse" />
    );
  }

  return (
    <section
      className="
      bg-slate-900
      rounded-3xl
      border
      border-slate-800
      shadow-xl
      p-6
      "
    >
      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-white">

            Team Members

          </h2>

          <p className="text-slate-400 text-sm mt-1">

            Active employees in your workspace

          </p>

        </div>

        <div
          className="
          w-12
          h-12
          rounded-2xl
          bg-indigo-500/10
          flex
          items-center
          justify-center
        "
        >

          <Users className="text-indigo-400" />

        </div>

      </div>

      {/* Empty */}

      {members.length === 0 ? (
        <div className="flex justify-center items-center h-64">

          <p className="text-slate-400">

            No team members found.

          </p>

        </div>
      ) : (
        <div className="space-y-5">

          {members.map((member) => (
            <div
              key={member._id}
              className="
              bg-slate-800
              hover:bg-slate-700
              transition
              rounded-2xl
              border
              border-slate-700
              p-5
              "
            >
              <div className="flex justify-between items-start">

                {/* Left */}

                <div className="flex gap-4">

                  <img
                    src={
                      member.avatar ||
                      `https://ui-avatars.com/api/?name=${member.name}&background=0F172A&color=fff`
                    }
                    alt={member.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-slate-700"
                  />

                  <div>

                    <h3 className="text-lg font-semibold text-white">

                      {member.name}

                    </h3>

                    <p className="text-cyan-400 text-sm">

                      {member.role}

                    </p>

                    <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">

                      <Mail size={15} />

                      <span>{member.email}</span>

                    </div>

                    <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">

                      <Building2 size={15} />

                      <span>

                        {member.department?.name ||
                          member.department ||
                          "No Department"}

                      </span>

                    </div>

                  </div>

                </div>

                {/* Right */}

                <div className="flex items-center gap-2">

                  <Circle
                    size={10}
                    fill="currentColor"
                    className={
                      statusColor[
                        member.status
                      ] || "text-slate-400"
                    }
                  />

                  <span
                    className={`
                      text-sm
                      font-medium
                      ${
                        member.status === "Online"
                          ? "text-green-400"
                          : member.status === "Away"
                          ? "text-yellow-400"
                          : member.status === "Busy"
                          ? "text-red-400"
                          : "text-slate-400"
                      }
                    `}
                  >
                    {member.status}
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}
    </section>
  );
};

export default TeamMembers;