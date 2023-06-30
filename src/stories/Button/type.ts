export enum ButtonType {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

export enum ButtonSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}

export interface ButtonProps {
    className?: string;
    type: ButtonType;
    size?: ButtonSize;
    label?: string;
}