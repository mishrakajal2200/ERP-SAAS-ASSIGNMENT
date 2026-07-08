const GradientButton = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3
        rounded-2xl
        font-semibold
        text-white
        bg-gradient-to-r
        from-cyan-500
        via-blue-500
        to-purple-600
        shadow-lg
        hover:scale-105
        transition
        duration-300
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default GradientButton;