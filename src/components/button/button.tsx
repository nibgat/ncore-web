import {
    CSSProperties,
    FC
} from 'react';
import IButtonProps, {
    ButtonStylerParams,
    ButtonStylerResult,
    TitleProps
} from './button.props';
import {
    INCoreIconProps,
    useNCoreTheme
} from "../../";
import useStyles, {
    SIZE_TO_STYLE_MAPPING
} from './button.styles';
import Text from "../text/text";
import Loading from '../loading/loading';

const buttonStyler = ({
    displayBehaviourWhileLoading,
    spreadBehaviour,
    radiuses,
    textColor,
    iconColor,
    borders,
    disabledStyle,
    color,
    variant,
    spaces,
    colors,
    disabled,
    icon,
    loading,
    size
}: ButtonStylerParams): ButtonStylerResult => {
    let container: CSSProperties = {
        backgroundColor: variant === "filled" ? colors[color] : "transparent",
        borderColor: variant !== "ghost" ? colors[color] : "transparent",
        ...SIZE_TO_STYLE_MAPPING[size].container,
        borderWidth: borders.indicator,
        borderRadius: radiuses.half
    };

    let titleColor: keyof NCore.Colors = textColor ? textColor : "body";

    let titleProps: TitleProps = {
        color: titleColor,
        variant: SIZE_TO_STYLE_MAPPING[size].title.size,
    };

    if(loading) {
        if(displayBehaviourWhileLoading === "disabled") {
            container.opacity = 0.5;
        }
    }

    if(icon) {
        titleProps = {
            ...titleProps,
            style: {
                marginLeft: spaces.content,
                margin: "0 auto"
            }
        };
    }

    if(!textColor) {
        if(variant !== "filled") {
            titleColor = color;
        } else {
            titleColor = "constrastBody";
        }
        titleProps.color = titleColor;
    }

    if(spreadBehaviour === "baseline") {
        container.alignSelf = spreadBehaviour;
        container.width = "auto";
    }

    if(spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
        container.justifyContent = "center";
        container.width = "100%";
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle,
            cursor: "no-drop",
            transform: "none"
        };
    }

    let iconProps: INCoreIconProps = {
        size: SIZE_TO_STYLE_MAPPING[size].icon.size,
        color: iconColor ? colors[iconColor] : colors[titleColor]
    };

    return {
        titleProps,
        iconProps,
        container
    };
};

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
        container,
        iconProps,
        titleProps
    } = buttonStyler({
        displayBehaviourWhileLoading,
        icon: IconComponentProp,
        spreadBehaviour,
        radiuses,
        textColor,
        iconColor,
        borders,
        disabledStyle,
        color,
        spaces,
        variant,
        colors,
        disabled,
        loading,
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

        if(IconComponentProp || loading) {
            textStyle.marginLeft = spaces.content;
        }

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
