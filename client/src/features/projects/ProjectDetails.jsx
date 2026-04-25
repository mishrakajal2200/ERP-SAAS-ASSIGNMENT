 import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const ProjectDetails = () => {
  const { id } = useParams();

  return <Typography>Project Details for {id}</Typography>;
};

export default ProjectDetails;