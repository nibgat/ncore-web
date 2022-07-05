import {
    FC
} from  "react";
import {
    useNCoreTheme 
} from "../../core/context";
import IContainerProps from "./container.props";
import useStyles from "./container.style";

const Container: FC<IContainerProps> = ({
    contentContainerClassName,
    className,
    children,
    style,
    ...props
}) => {
    const {
        colors,
        spaces
    } = useNCoreTheme();

    const classes = useStyles();

    return <div
        {...props}
        className={[
            classes.container,
            className
        ].join(" ")}
        style={{
            ...style,
            backgroundColor: colors.layer1
        }}
    >
        <div
            className={[
                classes.contentContainer,
                contentContainerClassName
            ].join(" ")}
            style={{
                padding: spaces.container
            }}
        >
            {children}
        </div>
    </div>;
};
export default Container;
