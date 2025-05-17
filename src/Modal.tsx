import { useRef } from "react";

interface ModalProps {
  headerLabel: string;
  isOpen: boolean;
  onCloseRequested: () => void;
  children: React.ReactNode;
}

function Modal({ headerLabel, isOpen, onCloseRequested, children }: ModalProps) {
  const innerRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (innerRef.current && !innerRef.current.contains(e.target as Node)) {
      onCloseRequested();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div
        ref={innerRef}
        className="bg-white w-96 rounded shadow-lg p-4 relative"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{headerLabel}</h2>
          <button
            aria-label="Close"
            onClick={onCloseRequested}
            className="text-gray-600 hover:text-red-500"
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
