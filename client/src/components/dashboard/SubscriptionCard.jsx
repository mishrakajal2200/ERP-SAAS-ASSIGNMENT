import {
  Crown,
  CalendarDays,
  CreditCard,
  Users,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { useSelector } from "react-redux";

const SubscriptionCard = () => {
  const { dashboard, loading } = useSelector(
    (state) => state.dashboard
  );

  const subscription = dashboard?.subscription;

  if (loading) {
    return (
      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 animate-pulse h-[620px]" />
    );
  }

  if (!subscription) {
    return (
      <section className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
        <h2 className="text-white text-xl">
          Subscription information not available.
        </h2>
      </section>
    );
  }

  const seatPercentage = Math.round(
    (subscription.usedSeats / subscription.totalSeats) * 100
  );

  return (
    <section
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-3xl
      p-7
      shadow-xl
      hover:border-violet-500
      transition-all
      duration-300
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="
            h-16
            w-16
            rounded-2xl
            bg-gradient-to-r
            from-yellow-400
            via-orange-500
            to-pink-500
            flex
            items-center
            justify-center
            shadow-lg
            "
          >
            <Crown
              className="text-white"
              size={30}
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              {subscription.plan}
            </h2>

            <p className="text-slate-400">
              Subscription Plan
            </p>
          </div>
        </div>

        <button
          className="
          h-11
          w-11
          rounded-xl
          bg-slate-800
          hover:bg-violet-500
          transition
          flex
          items-center
          justify-center
          "
        >
          <ArrowUpRight size={20} />
        </button>
      </div>

      {/* Status */}

      <div className="mt-7">
        <span
          className={`
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          text-sm
          ${
            subscription.status === "Active"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }
        `}
        >
          <Sparkles size={18} />

          {subscription.status}
        </span>
      </div>

      {/* Details */}

      <div className="space-y-5 mt-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <CreditCard
              size={20}
              className="text-cyan-400"
            />

            <span className="text-slate-400">
              Billing
            </span>
          </div>

          <span className="text-white font-semibold">
            {subscription.billing}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <CalendarDays
              size={20}
              className="text-indigo-400"
            />

            <span className="text-slate-400">
              Renewal
            </span>
          </div>

          <span className="text-white font-semibold">
            {subscription.renewal}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Users
              size={20}
              className="text-cyan-400"
            />

            <span className="text-slate-400">
              Team Members
            </span>
          </div>

          <span className="text-white font-semibold">
            {subscription.usedSeats} /{" "}
            {subscription.totalSeats}
          </span>
        </div>
      </div>

      {/* Payment */}

      <div
        className="
        mt-8
        rounded-2xl
        bg-gradient-to-r
        from-violet-500/20
        to-cyan-500/20
        border
        border-violet-500/20
        p-5
        "
      >
        <p className="text-slate-300 text-sm">
          Next Payment
        </p>

        <h2 className="text-3xl font-bold text-white mt-2">
          {subscription.amount}
        </h2>
      </div>

      {/* Seat Usage */}

      <div className="mt-8">
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">
            Seat Usage
          </span>

          <span className="text-cyan-400 font-medium">
            {seatPercentage}%
          </span>
        </div>

        <div
          className="
          h-3
          bg-slate-800
          rounded-full
          mt-3
          overflow-hidden
          "
        >
          <div
            style={{
              width: `${seatPercentage}%`,
            }}
            className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-violet-500
            transition-all
            duration-500
            "
          />
        </div>
      </div>

      {/* Footer */}

      <button
        className="
        mt-8
        w-full
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-violet-600
        to-cyan-500
        hover:opacity-90
        transition
        text-white
        font-semibold
        shadow-lg
        "
      >
        Upgrade Subscription
      </button>
    </section>
  );
};

export default SubscriptionCard;