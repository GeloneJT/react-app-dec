import { ReactNode } from 'react';

interface AlertProps {
  children: string;
  onClose: () => void
  //   children: ReactNode  USED TO PASS MORE COMPLEX STRUCTURE
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
