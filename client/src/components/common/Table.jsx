const Table = ({
  columns,
  data,
}) => {
  return (
    <div className="overflow-x-auto">
      <table
        className="
          w-full
          border-collapse
        "
      >
        <thead>
          <tr className="bg-white/5">
            {columns.map((col) => (
              <th
                key={col}
                className="
                  text-left
                  px-4 py-3
                  text-slate-300
                "
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="
                border-b
                border-white/5
              "
            >
              {Object.values(item).map(
                (value, i) => (
                  <td
                    key={i}
                    className="
                      px-4 py-3
                      text-white
                    "
                  >
                    {value}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;