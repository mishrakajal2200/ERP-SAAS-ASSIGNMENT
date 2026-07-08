import ProjectForm from "../../components/forms/ProjectForm";

const CreateProject =
  () => {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">
          Create Project
        </h1>

        <ProjectForm />
      </div>
    );
  };

export default CreateProject;