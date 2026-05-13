import { Control, Controller, FieldValues, Path } from "react-hook-form"
import { Field, FieldDescription, FieldError, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"

type InputProps<T extends FieldValues> = {
  label: string
  name: Path<T>
  control: Control<T>
  type: string
  placeholder?: string
  description?: string
  disabled?: boolean
  readonly?: boolean
  // className?: string
}

export function InputWithLabel<T extends FieldValues>({
  label,
  name,
  control,
  type,
  placeholder,
  description,
  disabled = false,

  readonly,
  // className
}: InputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className="mb-3">
          <FieldLabel htmlFor={field.name} className="text-md">
            {label}
          </FieldLabel>
          <Input
            type={type}
            disabled={disabled}
            {...field}
            id={field.name}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            className="border border-slate-500 p-5"
            readOnly={readonly}
            autoComplete={"off"}
          />
          <FieldDescription>{description}</FieldDescription>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}
