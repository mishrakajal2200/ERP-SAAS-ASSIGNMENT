// src/components/common/Button.jsx

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
}) => {
  const base =
    "px-4 py-2 rounded-lg font-medium transition backdrop-blur";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-white/20 text-white hover:bg-white/30",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;