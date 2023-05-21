import {
    CSSProperties
} from "react";
import {
    createUseStyles
} from "react-jss";
import {
    INCoreIconProps 
} from "src/core/types";
import {
    ButtonStylerParams, ButtonStylerResult, TitleProps 
} from "./button.props";

const useStyles = createUseStyles({
    container: {
        transition: "transform 0.1s",
        alignItems: "center",
        borderStyle: "solid",
        flexDirection: "row",
        userSelect: "none",
        outline: "none",
        display: "flex",
        "&:hover": {
            transition: "transform 0.1s",
            cursor: "pointer",
            // cursor: (props: { disabled: boolean; }) => props.disabled ? "no-drop" : "pointer",
            opacity: 0.75
        },
        "&:active": {
            transform: "translateY(1px)",
            // transform: (props: { disabled: boolean; }) => props.disabled ? "none" : "translateY(1px)",
            transition: "transform 0.1s"
        }
    }
}, {
    name: "NCore-Button"
});

type ButtonStyle = {
    container: CSSProperties;
    title: {
        size: keyof NCore.Typography;
    };
    loading: {
        containerSize: keyof NCore.Typography;
    },
    icon: {
        size: number;
    };
};

export type ButtonStyleMappingType = {
    small: ButtonStyle;
    medium: ButtonStyle;
    large: ButtonStyle;
};

export const buttonStyler = ({
    displayBehaviourWhileLoading,
    spreadBehaviour,
    disabledStyle,
    textColor,
    iconColor,
    disabled,
    radiuses,
    borders,
    loading,
    variant,
    spaces,
    colors,
    color,
    icon,
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
        style: {
            margin: "0 auto"
        }
    };

    if(loading) {
        if(displayBehaviourWhileLoading === "disabled") {
            container = {
                ...container,
                ...disabledStyle,
                cursor: "no-drop",
                transform: "none",
                opacity: 0.5
            };
            titleProps = {
                ...titleProps,
                style: {
                    ...titleProps.style,
                    marginLeft: spaces.content * 2
                }
            };
        }
    }

    if(loading && spreadBehaviour === "stretch") {
        titleProps = {
            ...titleProps,
            style: {
                ...titleProps.style,
                margin: "initial",
                marginLeft: spaces.content
            }
        };
    }

    if(icon && !loading) {
        titleProps = {
            ...titleProps,
            style: {
                ...titleProps.style,
                margin: "initial",
                marginLeft: spaces.content
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

export const SIZE_TO_STYLE_MAPPING: ButtonStyleMappingType = {
    "small": {
        container: {
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 8,
            paddingBottom: 8
        },
        title: {
            size: "buttonSmall"
        },
        loading: {
            containerSize: "buttonSmall"
        },
        icon: {
            size: 14
        }
    },
    "medium": {
        container: {
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 12,
            paddingBottom: 12
        },
        title: {
            size: "buttonMedium"
        },
        loading: {
            containerSize: "buttonMedium"
        },
        icon: {
            size: 18
        }
    },
    "large": {
        container: {
            paddingLeft: 60,
            paddingRight: 60,
            paddingTop: 14,
            paddingBottom: 14
        },
        title: {
            size: "buttonLarge"
        },
        loading: {
            containerSize: "buttonLarge"
        },
        icon: {
            size: 22
        }
    }
};
export default useStyles;
