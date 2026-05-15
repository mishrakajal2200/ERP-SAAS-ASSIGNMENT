// src/components/common/Select.jsx

const Select = ({ label, options = [], ...props }) => {
  return (
    <div>
      {label && <label className="text-sm text-gray-600">{label}</label>}
      <select
        {...props}
        className="w-full mt-1 p-3 rounded-lg bg-white/30 backdrop-blur border border-gray-200"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;