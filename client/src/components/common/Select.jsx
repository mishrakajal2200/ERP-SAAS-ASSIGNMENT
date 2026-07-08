const Select = ({
  options,
  value,
  onChange,
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="
        w-full
        px-4 py-3
        rounded-2xl
        bg-white/5
        border border-white/10
        text-white
        outline-none
      "
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;