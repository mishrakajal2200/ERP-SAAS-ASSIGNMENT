// src/components/ui/Card.jsx

const Card = ({ children }) => {
  return (
    <div className="bg-white/30 backdrop-blur-lg p-5 rounded-xl shadow">
      {children}
    </div>
  );
};

export default Card;