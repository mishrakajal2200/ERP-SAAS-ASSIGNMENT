import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "./userSlice";
import Table from "../../components/ui/Table";
import Button from "../../components/common/Button";
import UserForm from "./UserForm";
import { Box } from "@mui/material";

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEdit = (user) => {
    setEditData(user);
    setOpen(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const columns = [
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "role", headerName: "Role" },
    {
      field: "actions",
      headerName: "Actions",
      render: (row) => (
        <>
          <Button onClick={() => handleEdit(row)}>Edit</Button>
          <Button color="error" onClick={() => handleDelete(row._id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  const tableData = users.map((u) => ({
    ...u,
    actions: columns[3].render(u),
  }));

  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Add User</Button>

      <Table columns={columns} data={tableData} />

      <UserForm
        open={open}
        onClose={() => {
          setOpen(false);
          setEditData(null);
        }}
        editData={editData}
      />
    </Box>
  );
};

export default UserList;