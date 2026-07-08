import DepartmentForm from "../../components/forms/DepartmentForm";

const CreateDepartment =
  () => {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">
          Create Department
        </h1>

        <DepartmentForm />
      </div>
    );
  };

export default CreateDepartment;