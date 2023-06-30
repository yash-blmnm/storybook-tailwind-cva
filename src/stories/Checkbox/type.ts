export enum CheckedStatus {
    CHECKED= "checked",
    UNCHECKED= "unchecked",
    NEUTRAL= "neutral",
    DISABLED= "disabled"
}

export interface CheckboxProps {
    className?: string;
    checkedStatus?: CheckedStatus;
    label?: string;
}
