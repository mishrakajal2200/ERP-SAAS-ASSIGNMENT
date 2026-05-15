// src/components/ui/Table.jsx

const Table = ({ columns, data }) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} className="text-left p-2">
              {col}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-t">
            {columns.map((col) => (
              <td key={col} className="p-2">
                {row[col.toLowerCase()]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;