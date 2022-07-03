import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    container: {
        flexDirection: "row",
        userSelect: "none",
        display: "flex",
        "&:hover": {
            cursor: "pointer"
        }
    },
    content: {
        flexDirection: "column",
        display: "flex",
        width: "100%"
    },
    input: {
        outline: "none",
        border: "none",
        width: "100%",
        "&:hover": {
            cursor: "text"
        }
    },
    multilineInput: {
        transition: "height 0.1s",
        resize: "vertical",
        maxWidth: "100%",
        minWidth: "100%",
        outline: "none",
        border: "none",
        minHeight: 40,
        width: "100%"
    },
    clearButton: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        display: "flex"
    }
});
export default useStyles;
