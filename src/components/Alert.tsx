import { ReactNode } from "react";

interface AlertProps {
  children: string;
//   children: ReactNode  USED TO PASS MORE COMPLEX STRUCTURE
}

const Alert = ({ children }: AlertProps) => {
  return <div>{children}</div>;
};

export default Alert;
