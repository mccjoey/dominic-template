import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <header className={`${styles.header} ${className}`}>{children}</header>
  );
};
