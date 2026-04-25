import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCompanies,
  createCompany,
  switchCompany,
} from "./companysSlice.js";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

const CompanyPage = () => {
  const dispatch = useDispatch();
  const { companies, currentCompany } = useSelector(
    (state) => state.company
  );

  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  const handleCreate = () => {
    dispatch(createCompany({ name }));
    setName("");
  };

  const handleSwitch = (id) => {
    dispatch(switchCompany(id));
  };

  return (
    <Box>
      <Typography variant="h5">Companies</Typography>

      {/* Create Company */}
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Input
          label="Company Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={handleCreate}>Create</Button>
      </Box>

      {/* Switch Tenant */}
      <Box sx={{ mt: 3 }}>
        <Typography>Select Company</Typography>
        <Select
          fullWidth
          value={currentCompany?._id || ""}
          onChange={(e) => handleSwitch(e.target.value)}
        >
          {companies.map((c) => (
            <MenuItem key={c._id} value={c._id}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

export default CompanyPage;