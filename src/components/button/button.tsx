import React, {
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
    colors,
    disabled,
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
        variant: SIZE_TO_STYLE_MAPPING[size].title.size
    };

    if(loading) {
        if(displayBehaviourWhileLoading === "disabled") {
            container.opacity = 0.5;
        }
    }

    if(!textColor) {
        if(variant !== "filled") {
            titleColor = color;
        } else {
            titleColor = "constrastBody";
        }
        titleProps.color = titleColor;
    }

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
        container.width = spreadBehaviour === "stretch" ? "100%" : "auto"
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
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
    title,
    style
}) => {
    const classes = useStyles({
        // @ts-ignore
        disabled
    });

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
        spreadBehaviour,
        radiuses,
        textColor,
        iconColor,
        borders,
        disabledStyle,
        color,
        variant,
        colors,
        disabled,
        loading,
        size
    });

    const renderIcon = () => {
        if(loading) {
            return null;
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
        // @ts-ignore
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
