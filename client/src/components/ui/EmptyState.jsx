// src/components/ui/EmptyState.jsx

const EmptyState = ({ message }) => {
  return (
    <div className="text-center py-10 text-gray-500">
      <p>{message || "No data available"}</p>
    </div>
  );
};

export default EmptyState;