import {
    CSSProperties,
    FC
} from  "react";
import {
    useNCoreTheme 
} from "../../core/context";
import IChipProps, {
    ChipStylerParams,
    ChipStylerResult, 
    TitleProps
} from "./chip.props";
import useStyles, {
    SIZE_TO_STYLE_MAPPING 
} from "./chip.styles";
import {
    INCoreIconProps 
} from "../../core/types";
import Text from "../text/text";
import {
    ClearIcon 
} from "../../assets/svgr";

const buttonStyler = ({
    spreadBehaviour,
    disabledStyle,
    isCancelable,
    titleColor,
    iconColor,
    disabled,
    borders,
    variant,
    spaces,
    colors,
    color,
    icon,
    size
}: ChipStylerParams): ChipStylerResult => {
    let container: CSSProperties = {
        backgroundColor: colors[color],
        borderColor: colors[color],
        ...SIZE_TO_STYLE_MAPPING[size].container,
        borderWidth: borders.indicator
    };

    let titleProps: TitleProps = {
        color: "body",
        variant: SIZE_TO_STYLE_MAPPING[size].title.size
    };

    let iconProps: INCoreIconProps = {
        size: SIZE_TO_STYLE_MAPPING[size].icon.size,
        color: "body"
    };

    let cancelIconProps: INCoreIconProps = {
        size: SIZE_TO_STYLE_MAPPING[size].cancelIcon.size,
        color: colors.body
    };

    if(variant === "outline") {
        container.backgroundColor = "transparent";
        cancelIconProps.color = colors[color];
        titleProps.color = color;
        iconProps.color = color;
    }

    if(variant === "inverted") {
        container.backgroundColor = `${colors[color]}44`;
        container.borderColor = "transparent";
        cancelIconProps.color = colors[color];
        titleProps.color = color;
        iconProps.color = color;
    }

    if(spreadBehaviour === "baseline") {
        container.alignSelf = spreadBehaviour;
        container.width = "auto";
    }

    if(spreadBehaviour === "center") {
        container.alignSelf = spreadBehaviour;
    }

    if(icon) {
        titleProps = {
            ...titleProps,
            style: {
                ...titleProps.style,
                marginLeft: spaces.content
            }
        };
    }

    if(isCancelable) {
        titleProps = {
            ...titleProps,
            style: {
                ...titleProps.style,
                marginRight: spaces.content
            }
        };
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle,
            cursor: "no-drop",
            transform: "none"
        };
    }

    if(titleColor) {
        cancelIconProps.color = colors[titleColor];
        titleProps.color = titleColor;
        iconProps.color = titleColor;
    }

    if(iconColor) {
        iconProps.color = iconColor;
    }

    return {
        cancelIconProps,
        titleProps,
        iconProps,
        container
    };
};

/**
 * A generic chip
 * @param props {@link IChipProps}
 * @returns Element
 */
const Chip: FC<IChipProps> = ({
    spreadBehaviour = "free",
    icon: IconComponentProp,
    variant = "filled",
    color = "primary",
    disabled = false,
    size = "small",
    isCancelable,
    titleColor,
    className,
    iconColor,
    onClick,
    style,
    title,
    ...props
}) => {
    const classes = useStyles();

    const {
        disabled: disabledStyle,
        borders,
        colors,
        spaces
    } = useNCoreTheme();

    const {
        cancelIconProps,
        container,
        iconProps,
        titleProps
    } = buttonStyler({
        icon: IconComponentProp,
        spreadBehaviour,
        disabledStyle,
        isCancelable,
        titleColor,
        iconColor,
        disabled,
        borders,
        variant,
        spaces,
        colors,
        color,
        size
    });

    const renderIcon = () => {
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

        if(IconComponentProp) {
            textStyle.marginLeft = spaces.content;
        }

        return <Text
            variant={titleProps.variant}
            className={classes.title}
            color={titleProps.color}
            style={{
                ...textStyle,
                ...titleProps.style
            }}
        >
            {title}
        </Text>;
    };

    const renderCancelIcon = () => {
        if(!isCancelable) {
            return null;
        }

        return <ClearIcon
            {...cancelIconProps}
        />;
    };

    return <div
        style={{
            display: "flex"
        }}
    >
        <div
            {...props}
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
            {renderCancelIcon()}
        </div>
    </div>;
};
export default Chip;
