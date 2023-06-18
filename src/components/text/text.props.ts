import {
    CSSProperties,
    ReactNode,
    RefObject
} from "react";

interface ITextProps {
    reference?: RefObject<HTMLSpanElement>;
    variant?: keyof NCore.Typography;
    color?: keyof NCore.Colors;
    style?: CSSProperties;
    children?: ReactNode;
    className?: string;
};
export default ITextProps;
