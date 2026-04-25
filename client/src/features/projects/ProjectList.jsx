import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "./projectsSlice.js";
import Table from "../../components/ui/Table";

const ProjectList = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((s) => s.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  const columns = [
    { field: "name", headerName: "Project Name" },
    { field: "status", headerName: "Status" },
  ];

  return <Table columns={columns} data={projects} />;
};

export default ProjectList;