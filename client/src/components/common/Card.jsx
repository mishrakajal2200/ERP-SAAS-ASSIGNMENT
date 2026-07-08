const Card = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-6
        shadow-2xl
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;