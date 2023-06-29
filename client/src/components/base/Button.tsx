interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={
        'font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-lg ' +
        props.className
      }
    >
      {props.label}
    </button>
  );
};
