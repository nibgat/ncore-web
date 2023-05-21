import {
    CSSProperties,
    FC
} from 'react';
import IButtonProps from './button.props';
import {
    useNCoreTheme
} from "../../";
import useStyles, {
    buttonStyler 
} from './button.styles';
import Text from "../text/text";
import Loading from '../loading/loading';

/**
 * A generic button
 * @param props {@link IButtonProps}
 * @returns Element
 */
const Button: FC<IButtonProps> = ({
    displayBehaviourWhileLoading = "disabled",
    spreadBehaviour = "baseline",
    icon: IconComponentProp,
    variant = "filled",
    color = "primary",
    disabled = false,
    size = "medium",
    titleStyle,
    textColor,
    iconColor,
    className,
    loading,
    onClick,
    title,
    style
}) => {
    const classes = useStyles();

    const {
        disabled: disabledStyle,
        radiuses,
        borders,
        colors,
        spaces
    } = useNCoreTheme();

    const {
        titleProps,
        container,
        iconProps
    } = buttonStyler({
        displayBehaviourWhileLoading,
        icon: IconComponentProp,
        spreadBehaviour,
        disabledStyle,
        textColor,
        iconColor,
        radiuses,
        disabled,
        borders,
        loading,
        variant,
        colors,
        spaces,
        color,
        size
    });

    const renderIcon = () => {
        if(loading) {
            return <Loading
                color={titleProps.color}
            />;
        }

        if(!IconComponentProp) {
            return null;
        }

        return <IconComponentProp
            {...iconProps}
        />;
    };

    const renderTitle = () => {
        if(!title) {
            return null;
        }

        let textStyle: CSSProperties = {
        };

        return <Text
            variant={titleProps.variant}
            color={titleProps.color}
            style={{
                ...titleStyle,
                ...textStyle,
                ...titleProps.style
            }}
        >
            {title}
        </Text>;
    };

    return <button
        className={[
            classes.container,
            className
        ].join(" ")}
        onClick={disabled ? () => null : onClick}
        style={{
            ...style,
            ...container
        }}
    >
        {renderIcon()}
        {renderTitle()}
    </button>;
};
export default Button;
