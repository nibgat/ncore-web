import {
    CSSProperties,
    ReactNode
} from "react";

interface ILoadingProps {
    color?: keyof NCore.Colors;
    style?: CSSProperties;
    children?: ReactNode;
    className?: string;
    size?: number;
    id?: string;
};
export default ILoadingProps;
