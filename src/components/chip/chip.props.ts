import {
    CSSProperties
} from "react";
import {
    INCoreIconProps,
    NCoreIcon 
} from "src/core/types";

interface IChipProps {
    spreadBehaviour?: ChipSpreadBehaviour;
    titleColor?: keyof NCore.Colors;
    iconColor?: keyof NCore.Colors;
    color?: keyof NCore.Colors;
    isCancelable?: boolean;
    style?: CSSProperties;
    onClick?: () => void;
    variant?: ChipTypes;
    className?: string;
    disabled?:boolean;
    icon?: NCoreIcon;
    size?: ChipSizes;
    title: string;
};

export type ChipSpreadBehaviour = "baseline" | "center" | "free";

export type ChipStylerParams = {
    spreadBehaviour: ChipSpreadBehaviour;
    titleColor?: keyof NCore.Colors;
    iconColor?: keyof NCore.Colors;
    borders: NCore.BordersTokens;
    disabledStyle: CSSProperties;
    spaces: NCore.SpacesTokens;
    color: keyof NCore.Colors;
    isCancelable?: boolean;
    colors: NCore.Colors;
    variant: ChipTypes;
    disabled: boolean;
    loading?: boolean;
    icon?: NCoreIcon;
    size: ChipSizes;
};

export type TitleProps = {
    variant: keyof NCore.Typography;
    color: keyof NCore.Colors;
    style?: CSSProperties;
};

export type ChipStylerResult = {
    cancelIconProps: INCoreIconProps;
    iconProps: INCoreIconProps;
    container: CSSProperties;
    titleProps: TitleProps;
};

export type ChipTypes = "filled" | "outline" | "inverted";
export type ChipSizes = "small" | "medium" | "large";
export default IChipProps;
