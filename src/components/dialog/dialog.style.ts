import {
    CSSProperties
} from "react";
import {
    createUseStyles
} from "react-jss";
import {
    DialogStylerParams,
    DialogStylerResult 
} from "./dialog.props";

export const dialogStyler = ({
    contentContainerStyle,
    bottomContainerStyle,
    headerContainerStyle,
    radiuses,
    spaces,
    colors
}: DialogStylerParams): DialogStylerResult => {
    let container: CSSProperties = {
        backgroundColor: colors.layer1,
        borderRadius: radiuses.half,
        padding: spaces.container
    };

    let header: CSSProperties = {
        paddingRight: spaces.content / 2,
        paddingLeft: spaces.content / 2,
        paddingTop: spaces.content,
        ...headerContainerStyle
    };

    let content: CSSProperties = {
        paddingRight: spaces.content / 2,
        paddingLeft: spaces.content / 2,
        paddingBottom: spaces.content,
        paddingTop: spaces.content,
        ...contentContainerStyle
    };

    let bottom: CSSProperties = {
        paddingRight: spaces.content / 2,
        paddingLeft: spaces.content / 2,
        paddingTop: spaces.content,
        ...bottomContainerStyle
    };

    let primaryButton: CSSProperties = {
        marginLeft: spaces.content
    };

    return {
        primaryButton,
        container,
        content,
        bottom,
        header
    };
};

const useStyles = createUseStyles({
    container: {
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        display: "flex",
        zIndex: 99996,
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    },
    overlay: {
        position: "fixed",
        zIndex: 99997,
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    },
    overlayTouchableArea: {
        position: "fixed",
        zIndex: 99998,
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    },
    contentContainer: {
        flexDirection: "column",
        overflow: "hidden",
        position: "fixed",
        maxHeight: "80%",
        display: "flex",
        maxWidth: "85%",
        zIndex: 99999
    },
    content: {
        userSelect: "none",
        overflowY: "auto",
        flexWrap: "wrap"
    },
    headerContainer: {
        userSelect: "none",
        paddingBottom: 0,
        width: "100%"
    },
    bottomContainer: {
        userSelect: "none",
        width: "100%"
    },
    bottomContentContainer: {
        justifyContent: "flex-end",
        flexDirection: "row",
        display: "flex"
    }
}, {
    name: "NCore-Dialog"
});
export default useStyles;
