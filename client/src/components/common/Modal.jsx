const Modal = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0
        bg-black/60
        flex items-center justify-center
        z-50
      "
    >
      <div
        className="
          bg-[#111827]
          rounded-3xl
          p-6
          w-full
          max-w-lg
          border border-white/10
        "
      >
        {children}

        <button
          onClick={onClose}
          className="
            mt-5
            px-4 py-2
            bg-red-500
            rounded-xl
            text-white
          "
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;