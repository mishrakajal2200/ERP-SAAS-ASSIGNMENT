const StatsCard = ({
  title,
  value,
  icon,
  color = "from-cyan-500 to-blue-500",
}) => {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-6
        shadow-2xl
      "
    >
      {/* TOP */}
      <div
        className="
          flex items-center
          justify-between
        "
      >
        <div>
          <p
            className="
              text-slate-400
              text-sm
            "
          >
            {title}
          </p>

          <h2
            className="
              text-3xl
              font-bold
              text-white
              mt-2
            "
          >
            {value}
          </h2>
        </div>

        <div
          className={`
            w-14 h-14
            rounded-2xl
            bg-gradient-to-br
            ${color}
            flex items-center
            justify-center
            text-white
            text-2xl
          `}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;