import {
    CSSProperties,
    ReactNode
} from "react";

interface IRowProps extends Partial<Omit<HTMLButtonElement, "children" | "style">> {
    titleVariant?: keyof NCore.Typography;
    redirectIconProps?: {
        color?: keyof NCore.Colors;
        size?: number;
    };
    rightComponent?: ReactNode;
    color?: keyof NCore.Colors;
    leftComponent?: ReactNode;
    onClick?: () => void;
    isRedirect?: boolean;
    disabled?: boolean;
    title: string;
};

export type RowStylerParams = {
    disabledStyle: CSSProperties;
    redirectIconProps?: {
        color?: keyof NCore.Colors;
        size?: number;
    };
    spaces: NCore.SpacesTokens;
    color: keyof NCore.Colors;
    colors: NCore.Colors;
    disabled?: boolean;
};

export type RowStylerResult = {
    _redirectIconProps?: {
        color: string;
        size: number;
    };
    container: CSSProperties;
};
export default IRowProps;
