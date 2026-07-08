import { useState } from "react";

import Input from "../common/Input";
import Button from "../common/Button";

const DepartmentForm = ({
  onSubmit,
  loading,
}) => {
  const [name, setName] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ name });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <Input
        placeholder="Department Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Creating..."
          : "Create Department"}
      </Button>
    </form>
  );
};

export default DepartmentForm;