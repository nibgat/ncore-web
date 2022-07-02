import {
    CSSProperties
} from "react";

interface ITextInputProps {
    onChangeText?: (value: string) => void;
    clearEnabled?: boolean;
    initialValue?: string;
    style?: CSSProperties;
    isRequired?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    placeholder: string;
    multiline?: boolean;
    inputClass?: string;
    disabled?: boolean;
    className?: string;
    title: string;
    id: string;
};

export type TextInputStylerParams = {
    radiuses: NCore.RadiusesTokens;
    borders: NCore.BordersTokens;
    typography: NCore.Typography;
    disabledStyle: CSSProperties;
    spaces: NCore.SpacesTokens;
    colors: NCore.Colors;
    multiline?: boolean;
    isFocused: boolean;
    disabled?: boolean;
    value: string;
};

export type TitleProps = {
    color: keyof NCore.Colors;
    style: CSSProperties;
};

export type TextInputStylerResult = {
    titleProps: TitleProps;
    container: CSSProperties;
    input: CSSProperties;
    clear: CSSProperties;
};
export default ITextInputProps;
