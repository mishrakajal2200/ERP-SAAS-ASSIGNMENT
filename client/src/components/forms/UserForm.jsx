import { useState } from "react";

import Input from "../common/Input";
import Button from "../common/Button";
import Select from "../common/Select";

const UserForm = ({
  onSubmit,
  loading,
}) => {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      role: "employee",
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
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <Select
        value={formData.role}
        onChange={(e) =>
          setFormData({
            ...formData,
            role: e.target.value,
          })
        }
        options={[
          {
            label: "Employee",
            value: "employee",
          },
          {
            label: "Manager",
            value: "manager",
          },
          {
            label: "Admin",
            value: "admin",
          },
        ]}
      />

      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Creating..."
          : "Create User"}
      </Button>
    </form>
  );
};

export default UserForm;