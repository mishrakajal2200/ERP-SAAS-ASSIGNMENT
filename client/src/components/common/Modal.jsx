// src/components/common/Modal.jsx

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white/30 backdrop-blur-lg p-6 rounded-xl w-full max-w-md">
        <button
          onClick={onClose}
          className="float-right text-gray-600"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;