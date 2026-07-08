import { useState } from "react";

import Input from "../common/Input";
import Button from "../common/Button";
import Select from "../common/Select";

const TaskForm = ({
  onSubmit,
  loading,
}) => {
  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      priority: "medium",
      status: "todo",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <Input
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleChange}
      />

      <Input
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <Select
        value={formData.priority}
        onChange={(e) =>
          setFormData({
            ...formData,
            priority: e.target.value,
          })
        }
        options={[
          {
            label: "Low",
            value: "low",
          },
          {
            label: "Medium",
            value: "medium",
          },
          {
            label: "High",
            value: "high",
          },
        ]}
      />

      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Creating..."
          : "Create Task"}
      </Button>
    </form>
  );
};

export default TaskForm;