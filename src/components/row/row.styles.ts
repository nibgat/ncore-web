import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        display: "flex"
    }
}, {
    name: "NCore-Row"
}
);
export default useStyles;
