import {
    CSSProperties,
    ReactNode
} from "react";

interface ITextProps {
    variant?: keyof NCore.Typography;
    color?: keyof NCore.Colors;
    style?: CSSProperties;
    children?: ReactNode;
    className?: string;
};
export default ITextProps;
