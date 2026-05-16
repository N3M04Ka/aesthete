import { useId } from "react";
interface props {
    label: string;
    placeholder: string;
    isDisabled: boolean;
    type:string;
}
export default function NameInput({ label, placeholder, isDisabled,type}: props) {
    const inputId = useId();
    return (
        <div className="nameInput">
            <label htmlFor={inputId}>{label}</label>
            <input
                type={type}
                name="nameInput"
                id={inputId}
                placeholder={placeholder}
                disabled={isDisabled}
            />
        </div>
    );
}
