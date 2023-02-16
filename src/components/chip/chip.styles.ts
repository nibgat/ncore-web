import {
    CSSProperties
} from "react";
import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    container: {
        transition: "transform 0.1s",
        justifyContent: "center",
        flexDirection: "row",
        borderStyle: "solid",
        alignItems: "center",
        alignSelf: "center",
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
    },
    title: {
        whiteSpace: "nowrap"
    }
}, {
    name: "NCore-Chip"
});

type ChipStyle = {
    container: CSSProperties;
    title: {
        size: keyof NCore.Typography;
    };
    cancelIcon: {
        size: number;
    },
    icon: {
        size: number;
    };
};

export type ChipStyleMappingType = {
    small: ChipStyle;
    medium: ChipStyle;
    large: ChipStyle;
};

export const SIZE_TO_STYLE_MAPPING: ChipStyleMappingType = {
    "small": {
        container: {
            paddingRight: 10,
            paddingBottom: 4,
            paddingLeft: 10,
            paddingTop: 4,
            borderRadius: 40
        },
        title: {
            size: "buttonSmall"
        },
        cancelIcon: {
            size: 12
        },
        icon: {
            size: 12
        }
    },
    "medium": {
        container: {
            paddingRight: 14,
            paddingBottom: 6,
            paddingLeft: 14,
            paddingTop: 6,
            borderRadius: 50
        },
        title: {
            size: "buttonMedium"
        },
        cancelIcon: {
            size: 14
        },
        icon: {
            size: 14
        }
    },
    "large": {
        container: {
            paddingBottom: 8,
            paddingRight: 18,
            paddingLeft: 18,
            paddingTop: 8,
            borderRadius: 60
        },
        title: {
            size: "buttonLarge"
        },
        cancelIcon: {
            size: 16
        },
        icon: {
            size: 16
        }
    }
};
export default useStyles;
