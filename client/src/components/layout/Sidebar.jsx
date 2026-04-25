import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />

      <List>
        <ListItemButton component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton component={Link} to="/users">
          <ListItemText primary="Users" />
        </ListItemButton>

        <ListItemButton component={Link} to="/projects">
          <ListItemText primary="Projects" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;