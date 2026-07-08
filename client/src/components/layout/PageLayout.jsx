const PageLayout = ({
  title,
  children,
  action,
}) => {
  return (
    <div className="space-y-6">
      <div
        className="
          flex items-center
          justify-between
        "
      >
        <div>
          <h1
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            {title}
          </h1>
        </div>

        {action && action}
      </div>

      <div>{children}</div>
    </div>
  );
};

export default PageLayout;