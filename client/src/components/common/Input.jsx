const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        px-4 py-3
        rounded-2xl
        bg-white/5
        border border-white/10
        outline-none
        text-white
        placeholder:text-slate-500
      "
    />
  );
};

export default Input;