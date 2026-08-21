import { useId } from "react";
interface props {
    label: string;
    placeholder: string;
    isDisabled: boolean;
    type:string;
    name:string;
}
export default function NameInput({ label, placeholder, isDisabled,type,name}: props) {
    const inputId = useId();
    return (
        <div className="nameInput">
            <label htmlFor={inputId}>{label}</label>
            <input
                type={type}
                name={name}
                id={inputId}
                placeholder={placeholder}
                disabled={isDisabled}
            />
        </div>
    );
}
