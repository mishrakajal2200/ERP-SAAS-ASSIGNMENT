import { Button as MuiButton } from "@mui/material";

const Button = ({
  children,
  variant = "contained",
  color = "primary",
  onClick,
  type = "button",
  fullWidth = false,
  loading = false,
  ...props
}) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
      disabled={loading}
      sx={{
        textTransform: "none",
        borderRadius: "8px",
        fontWeight: 600,
        padding: "10px 16px",
      }}
      {...props}
    >
      {loading ? "Loading..." : children}
    </MuiButton>
  );
};

export default Button;