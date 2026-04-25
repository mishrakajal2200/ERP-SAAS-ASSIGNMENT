import { Card as MuiCard, CardContent, Typography } from "@mui/material";

const Card = ({ title, value, children }) => {
  return (
    <MuiCard
      sx={{
        borderRadius: "12px",
        boxShadow: 3,
      }}
    >
      <CardContent>
        {title && (
          <Typography variant="subtitle2" color="text.secondary">
            {title}
          </Typography>
        )}

        {value && (
          <Typography variant="h5" fontWeight="bold">
            {value}
          </Typography>
        )}

        {children}
      </CardContent>
    </MuiCard>
  );
};

export default Card;