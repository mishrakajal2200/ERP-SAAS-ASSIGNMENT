import { useState } from "react";

import Input from "../common/Input";
import Button from "../common/Button";
import Select from "../common/Select";

const ProjectForm = ({
  onSubmit,
  loading,
}) => {
  const [formData, setFormData] =
    useState({
      name: "",
      description: "",
      status: "active",
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
        name="name"
        placeholder="Project Name"
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <Select
        value={formData.status}
        onChange={(e) =>
          setFormData({
            ...formData,
            status: e.target.value,
          })
        }
        options={[
          {
            label: "Active",
            value: "active",
          },
          {
            label: "Completed",
            value: "completed",
          },
          {
            label: "Pending",
            value: "pending",
          },
        ]}
      />

      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Creating..."
          : "Create Project"}
      </Button>
    </form>
  );
};

export default ProjectForm;