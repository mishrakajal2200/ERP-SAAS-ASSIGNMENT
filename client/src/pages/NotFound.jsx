import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        404
      </Typography>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Page Not Found
      </Typography>

      <Button variant="contained" onClick={() => navigate("/")}>
        Go to Dashboard
      </Button>
    </Box>
  );
};

export default NotFound;