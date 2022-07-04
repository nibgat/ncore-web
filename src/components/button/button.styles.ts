import {
    CSSProperties
} from "react";
import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    container: {
        transition: "transform 0.1s",
        borderStyle: "solid",
        userSelect: "none",
        outline: "none",
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
