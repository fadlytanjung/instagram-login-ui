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
    <div {...className && { className }}>
      <input
        className={`border rounded-sm
        text-sm h-[36px] overflow-hidden outline-none
        focus:outline-none px-[9px] py-[8px] leading-[14px]
        w-full bg-secondary
        ${error ? 'border-red-500 text-red-500' : 'border-stroke'}
        `}
        {...props}
      />
      {error && (<span className="text-red-500 m-0 text-xs">{error}</span>)}
    </div>
  )
}