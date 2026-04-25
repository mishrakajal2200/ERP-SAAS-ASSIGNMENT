import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser, updateUser } from "./userSlice";
import Modal from "../../components/common/Modal";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const UserForm = ({ open, onClose, editData }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: editData || {},
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (editData) {
      dispatch(updateUser({ id: editData._id, data }));
    } else {
      dispatch(createUser(data));
    }

    reset();
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={editData ? "Edit User" : "Add User"}
      actions={
        <Button onClick={handleSubmit(onSubmit)}>
          Save
        </Button>
      }
    >
      <Input label="Name" {...register("name")} />
      <Input label="Email" {...register("email")} />
      <Input label="Role" {...register("role")} />
    </Modal>
  );
};

export default UserForm;