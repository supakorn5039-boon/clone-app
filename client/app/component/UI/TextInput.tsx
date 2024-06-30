// components/TextInput.tsx
import React from 'react'
import {
    Controller,
    Control,
    FieldErrors,
    UseFormRegister,
    UseFormSetValue,
} from 'react-hook-form'

interface TextInputProps {
    name: string
    control: Control<any> | null
    defaultValue?: string | null
    label?: string | null
    placeholder?: string | null
    type?: 'text' | 'password' | 'email' | 'number' | null
    icon?: React.ComponentType | null
    rules?: any | null
    errors?: FieldErrors | null
    register?: UseFormRegister<any> | null
    setValue?: UseFormSetValue<any> | null
    className?: string
    width?: string // Added width prop
}

const TextInput: React.FC<TextInputProps> = ({
    name,
    control,
    defaultValue = '',
    label,
    placeholder,
    type = 'text',
    icon: Icon,
    rules,
    errors,
    register,
    setValue,
    className,
    width = '100%',
}) => {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label && <label className="text-white">{label}</label>}
            {control && (
                <Controller
                    name={name}
                    control={control}
                    defaultValue={defaultValue}
                    rules={rules}
                    render={({ field }) => (
                        <div className="input input-bordered rounded flex items-center gap-2">
                            {Icon && <Icon />}
                            <input
                                {...field}
                                {...(register && register(name, { ...rules }))}
                                type={type || 'text'}
                                className={`grow`}
                                style={{ width }}
                                placeholder={placeholder || ''}
                                onChange={(e) => {
                                    field.onChange(e)
                                    setValue && setValue(name, e.target.value)
                                }}
                            />
                        </div>
                    )}
                />
            )}
            {errors && errors[name]?.message && (
                <p className="text-red-500">{String(errors[name]?.message)}</p>
            )}
        </div>
    )
}

export default TextInput
