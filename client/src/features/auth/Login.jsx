import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Paper } from "@mui/material";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.auth);

  const onSubmit = async (data) => {
    const res = await dispatch(loginUser(data));

    if (res.meta.requestStatus === "fulfilled") {
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f6fa",
      }}
    >
      <Paper sx={{ p: 4, width: 400, borderRadius: "12px" }}>
        <Typography variant="h5" mb={2}>
          Login
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Email" {...register("email")} />
          <Input
            label="Password"
            type="password"
            {...register("password")}
          />

          <Button type="submit" fullWidth loading={loading}>
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;