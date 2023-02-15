import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    container: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        display: "flex",
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    },
    overlay: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    },
    overlayTouchableArea: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    },
    contentContainer: {
        position: "absolute",
        overflow: "hidden",
        maxHeight: "80%",
        maxWidth: "85%",
        zIndex: 99999
    },
    content: {
        userSelect: "none",
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
