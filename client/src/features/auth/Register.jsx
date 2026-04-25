import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "./authSlice";
import { Box, Typography, Paper } from "@mui/material";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5">Register</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Name" {...register("name")} />
          <Input label="Email" {...register("email")} />
          <Input label="Password" type="password" {...register("password")} />

          <Button type="submit" fullWidth>
            Register
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;