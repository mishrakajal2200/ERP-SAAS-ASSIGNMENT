import { NavLink } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `
        flex
        items-center
        justify-between
        rounded-xl
        px-4
        py-3
        transition-all
        duration-200

        ${
          isActive
            ? "bg-cyan-500 text-white"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
        }
      `
      }
    >
      <div className="flex items-center gap-3">
        <Icon size={20} />

        <span>{item.name}</span>
      </div>

      {item.badge && (
        <span
          className="
          text-xs
          px-2
          py-1
          rounded-full
          bg-red-500
          text-white
        "
        >
          {item.badge}
        </span>
      )}
    </NavLink>
  );
};

export default SidebarItem;