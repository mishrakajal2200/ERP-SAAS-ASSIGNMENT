// src/components/common/Input.jsx

const Input = ({ label, ...props }) => {
  return (
    <div>
      {label && <label className="text-sm text-gray-600">{label}</label>}
      <input
        {...props}
        className="w-full mt-1 p-3 rounded-lg bg-white/30 backdrop-blur border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default Input;