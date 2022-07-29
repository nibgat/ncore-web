import {
    CSSProperties,
    ReactNode
} from "react";

interface IContainerProps {
    contentContainerStyle?: CSSProperties;
    contentContainerClassName?: string;
    contentStyle?: CSSProperties;
    contentClassName?: string;
    style?: CSSProperties;
    children?: ReactNode;
    className?: string;
    id?: string;
};
export default IContainerProps;
