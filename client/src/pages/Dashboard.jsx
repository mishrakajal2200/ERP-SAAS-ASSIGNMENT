import { Grid } from "@mui/material";
import Card from "../components/ui/Card";

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card title="Total Users" value="120" />
      </Grid>

      <Grid item xs={12} md={4}>
        <Card title="Projects" value="45" />
      </Grid>

      <Grid item xs={12} md={4}>
        <Card title="Tasks" value="300" />
      </Grid>
    </Grid>
  );
};

export default Dashboard;