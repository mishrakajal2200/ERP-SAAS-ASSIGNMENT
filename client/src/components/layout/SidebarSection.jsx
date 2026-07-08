import SidebarItem from "./SidebarItem";

const SidebarSection = ({ section }) => {
  return (
    <div className="space-y-2">

      <h3
        className="
          px-2
          text-xs
          uppercase
          tracking-widest
          text-slate-500
          font-semibold
        "
      >
        {section.title}
      </h3>

      {section.items.map((item) => (
        <SidebarItem
          key={item.name}
          item={item}
        />
      ))}
    </div>
  );
};

export default SidebarSection;