import { TextField } from "@mui/material";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  helperText,
  fullWidth = true,
  ...props
}) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error || helperText}
      fullWidth={fullWidth}
      variant="outlined"
      margin="normal"
      {...props}
    />
  );
};

export default Input;