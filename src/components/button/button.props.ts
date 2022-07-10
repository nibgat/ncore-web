import {
    CSSProperties
} from "react";
import {
    INCoreIconProps,
    NCoreIcon
} from "../../core/types";

interface IButtonProps extends Partial<Omit<HTMLButtonElement, "children" | "style">> {
    displayBehaviourWhileLoading?: ButtonDisplayBehaviourWhileLoading;
    spreadBehaviour?: ButtonSpreadBehaviour;
    iconColor?: keyof NCore.Colors;
    textColor?: keyof NCore.Colors;
    color?: keyof NCore.Colors;
    titleStyle?: CSSProperties;
    variant?: ButtonVariant;
    style?: CSSProperties;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
    size?: ButtonSize;
    icon?: NCoreIcon;
    title?: string;
};

export type ButtonDisplayBehaviourWhileLoading = "none" | "disabled";
export type ButtonSpreadBehaviour = "baseline" | "stretch" | "free";
export type ButtonVariant = "filled" | "outline" | "ghost";
export type ButtonSize = "small" | "medium" | "large";

export type ButtonStylerParams = {
    displayBehaviourWhileLoading: ButtonDisplayBehaviourWhileLoading;
    spreadBehaviour: ButtonSpreadBehaviour;
    radiuses: NCore.RadiusesTokens;
    textColor?: keyof NCore.Colors;
    iconColor?: keyof NCore.Colors;
    borders: NCore.BordersTokens;
    disabledStyle: CSSProperties;
    spaces: NCore.SpacesTokens;
    color: keyof NCore.Colors;
    variant: ButtonVariant;
    colors: NCore.Colors;
    disabled: boolean;
    loading?: boolean;
    icon?: NCoreIcon;
    size: ButtonSize;
};

export type TitleProps = {
    color: keyof NCore.Colors;
    variant: keyof NCore.Typography;
    style?: CSSProperties;
};

export type ButtonStylerResult = {
    iconProps: INCoreIconProps;
    container: CSSProperties;
    titleProps: TitleProps;
};
export default IButtonProps;
