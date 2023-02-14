import {
    CSSProperties
} from "react";
import {
    INCoreIconProps,
    NCoreIcon 
} from "src/core/types";
import IButtonProps from "../button/button.props";

interface IStateCardProps {
    contentColor?: keyof NCore.Colors;
    titleColor?: keyof NCore.Colors;
    iconColor?: keyof NCore.Colors;
    buttonProps?: IButtonProps;
    style?: CSSProperties;
    className?: string;
    isAction?: boolean;
    icon?: NCoreIcon;
    content: string;
    title: string;
};

export type StateCardStylerParams = {
    contentColor?: keyof NCore.Colors;
    titleColor?: keyof NCore.Colors;
    iconColor?: keyof NCore.Colors;
    spaces: NCore.SpacesTokens;
    colors: NCore.Colors;
    isAction?: boolean;
    icon?: NCoreIcon;
};

export type TitleProps = {
    variant: keyof NCore.Typography;
    color: keyof NCore.Colors;
    style?: CSSProperties;
};

export type ContentProps = {
    variant: keyof NCore.Typography;
    color: keyof NCore.Colors;
    style?: CSSProperties;
};

export type IconProps = INCoreIconProps & {
    style: CSSProperties;
};

export type StateCardStylerResult = {
    contentProps: ContentProps;
    iconProps: INCoreIconProps;
    container: CSSProperties;
    titleProps: TitleProps;
};

export default IStateCardProps;
