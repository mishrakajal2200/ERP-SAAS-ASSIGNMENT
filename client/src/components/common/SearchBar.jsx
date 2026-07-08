import {
  HiOutlineSearch,
} from "react-icons/hi";

const SearchBar = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div
      className="
        flex items-center
        bg-white/5
        border border-white/10
        rounded-2xl
        px-4 py-3
      "
    >
      <HiOutlineSearch
        className="
          text-slate-400
          text-xl
        "
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          bg-transparent
          outline-none
          ml-3
          w-full
          text-white
          placeholder:text-slate-500
        "
      />
    </div>
  );
};

export default SearchBar;