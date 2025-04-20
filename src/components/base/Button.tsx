import {ReactElement, ReactNode} from "react";

type Props = {
  variant: 'primary' | 'outline'
  children?: ReactNode
  icon?: ReactElement
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = (props: Props) => {
  const {children, variant = 'primary', icon, className = '', ...rest} = props

  const baseStyles = 'flex items-center justify-center p-1 rounded-xs font-medium transition-colors hover:bg-[linear-gradient(rgb(0_0_0/20%))] focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-blue-600 text-white ',
    outline: 'border border-gray-dark text-gray-white ',
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  return (
    <button className={buttonStyles} {...rest}>
      {icon ? icon : null}
      {children}
    </button>
  );
}

export default Button
