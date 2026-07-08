// src/utils/exportCSV.js

export const exportCSV = (
  data,
  fileName = "data.csv"
) => {
  if (!data || !data.length) {
    return;
  }

  const headers = Object.keys(data[0]);

  const csvRows = [];

  csvRows.push(headers.join(","));

  data.forEach((row) => {
    const values = headers.map(
      (header) => {
        return `"${row[header] ?? ""}"`;
      }
    );

    csvRows.push(values.join(","));
  });

  const blob = new Blob(
    [csvRows.join("\n")],
    {
      type: "text/csv",
    }
  );

  const url =
    window.URL.createObjectURL(blob);

  const a =
    document.createElement("a");

  a.href = url;

  a.download = fileName;

  a.click();

  window.URL.revokeObjectURL(url);
};