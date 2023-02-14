import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    container: {
        transition: "transform 0.1s",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        userSelect: "none",
        outline: "none",
        display: "flex",
        maxWidth: 300
    },
    content: {
        textAlign: "center"
    }
}, {
    name: "NCore-StateCard"
});

export default useStyles;
