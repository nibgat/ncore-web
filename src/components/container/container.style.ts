import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    container: {
        display: "table",
        height: "100%",
        width: "100%"
    },
    contentContainer: {
        display: "table-cell",
        height: "100%",
        width: "100%"
    },
    content: {
        display: "flex",
        height: "100%",
        width: "100%"
    }
}, {
    name: "NCore-Container"
});
export default useStyles;
