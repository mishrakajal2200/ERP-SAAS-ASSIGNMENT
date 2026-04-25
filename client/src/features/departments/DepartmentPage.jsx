import { useEffect, useState } from "react";
import { getDepartmentsAPI } from "./departmentApi.js";
import { Box, Typography } from "@mui/material";

const DepartmentPage = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getDepartmentsAPI().then((res) => setDepartments(res.data));
  }, []);

  return (
    <Box>
      <Typography variant="h5">Departments</Typography>

      {departments.map((d) => (
        <Typography key={d._id}>{d.name}</Typography>
      ))}
    </Box>
  );
};

export default DepartmentPage;