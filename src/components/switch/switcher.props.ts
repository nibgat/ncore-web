import {
    CSSProperties
} from "react";

interface ISwitcherProps {
    indicatorStyle?: CSSProperties;
    onChange?: () => void;
    style?: CSSProperties;
    className?: string;
    isActive: boolean;
};

export type SwitcherStylerParams = {
    indicatorStyle?: CSSProperties;
    spaces: NCore.SpacesTokens;
    style?: CSSProperties;
    colors: NCore.Colors;
    isActive: boolean;
};

export type SwitcherStylerResult = {
    indicator: CSSProperties;
    container: CSSProperties;
};
export default ISwitcherProps;
