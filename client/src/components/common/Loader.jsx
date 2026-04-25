import { CircularProgress, Box } from "@mui/material";

const Loader = ({ fullScreen = false }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: fullScreen ? "100vh" : "100%",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;