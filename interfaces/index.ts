export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  children?: React.ReactNode;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}
