import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';

interface FormFieldProps<T extends FieldValues> {
  id: keyof T;
  label?: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  register?: UseFormRegister<T>;
  errors?: FieldErrors;
  type?: HTMLInputTypeAttribute;
  isTextarea?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export function FormField<T extends FieldValues>({
  register,
  ...rest
}: FormFieldProps<T>) {
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = event => rest.onChange?.(event.target.value);

  return (
    <label className="flex-1 w-full flex flex-col">
      {rest.label && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
          {rest.label}
        </span>
      )}
      {rest.isTextarea ? (
        <textarea
          required
          value={rest.value}
          onChange={handleChange}
          // @ts-ignore
          {...register?.(rest.id, { required: rest.required })}
          rows={10}
          placeholder={rest.placeholder}
          className={clsx(
            'resize-none py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]',
            rest.errors?.[rest.id as string] && 'border-rose-500',
            rest.disabled && 'opacity-50 cursor-default'
          )}
        />
      ) : (
        <input
          required
          value={rest.value}
          onChange={handleChange}
          // @ts-ignore
          {...register?.(rest.id, { required: rest.required })}
          type={rest.type}
          step="0.001"
          min={0}
          placeholder={rest.placeholder}
          className={clsx(
            'py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]',
            rest.errors?.[rest.id as string] && 'border-rose-500',
            rest.disabled && 'opacity-50 cursor-default'
          )}
        />
      )}
    </label>
  );
}
