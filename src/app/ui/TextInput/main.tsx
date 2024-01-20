export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  className?: string;
}

export default function TextInput({
  className,
  error,
  ...props
}: TextInputProps) {
  return (
    <div>
      <input
        className={`border rounded-sm
        text-sm h-[36px] overflow-hidden outline-none
        focus:outline-none px-[9px] py-[8px] leading-[14px]
        w-full bg-secondary
        ${error ? 'border-error-500' : 'border-stroke'}
        ${className}
        `}
        {...props}
      />
      {error && (<span className="text-error-500">{error}</span>)}
    </div>
  )
}