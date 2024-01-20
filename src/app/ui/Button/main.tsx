export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function Button({
  type = 'button',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-md
      text-sm h-[32px] overflow-hidden outline-none opacity-[0.7]
      focus:outline-none px-[16px] py-[7px] leading-[14px]
      w-full bg-primary-button text-[#fff] cursor-pointer
      font-semibold
      ${className}
      `}
      {...props}
      type={type}
    >
      {children}
    </button>
  );
}
