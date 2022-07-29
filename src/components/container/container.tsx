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
    contentContainerStyle,
    contentClassName,
    contentStyle,
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
            backgroundColor: colors.layer1,
            ...style
        }}
    >
        <div
            className={[
                classes.contentContainer,
                contentContainerClassName
            ].join(" ")}
            style={{
                padding: spaces.container,
                ...contentContainerStyle
            }}
        >
            <div
                className={[
                    classes.content,
                    contentClassName
                ].join(" ")}
                style={{
                    ...contentStyle
                }}
            >
                {children}
            </div>
        </div>
    </div>;
};
export default Container;
