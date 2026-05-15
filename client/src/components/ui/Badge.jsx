// src/components/ui/Badge.jsx

const Badge = ({ text, color = "green" }) => {
  const colors = {
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span className={`px-2 py-1 rounded text-sm ${colors[color]}`}>
      {text}
    </span>
  );
};

export default Badge;