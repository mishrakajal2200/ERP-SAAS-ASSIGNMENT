import TaskForm from "../../components/forms/TaskForm";

const CreateTask = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Create Task
      </h1>

      <TaskForm />
    </div>
  );
};

export default CreateTask;