const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-5 py-3
        rounded-2xl
        font-semibold
        transition
        duration-300
        bg-gradient-to-r
        from-cyan-500
        to-blue-500
        text-white
        hover:scale-105
        disabled:opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;