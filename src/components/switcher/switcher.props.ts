import {
    CSSProperties
} from "react";

interface ISwitcherProps {
    indicatorStyle?: CSSProperties;
    onChange?: () => void;
    style?: CSSProperties;
    disabled?: boolean;
    className?: string;
    isActive: boolean;
};

export type SwitcherStylerParams = {
    disabledStyle: NCore.DisabledTokens;
    indicatorStyle?: CSSProperties;
    spaces: NCore.SpacesTokens;
    style?: CSSProperties;
    colors: NCore.Colors;
    disabled?: boolean;
    isActive: boolean;
};

export type SwitcherStylerResult = {
    indicator: CSSProperties;
    container: CSSProperties;
};
export default ISwitcherProps;
