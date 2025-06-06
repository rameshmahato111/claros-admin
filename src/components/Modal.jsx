
import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-[90%] p-6 space-y-4">
       
        {title && <h2 className="text-xl font-semibold">{title}</h2>}

       
        <div className="text-gray-800">{children}</div>


        <div className="text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
