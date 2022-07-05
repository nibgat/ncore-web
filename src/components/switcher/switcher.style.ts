import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    container: {
        transition: "transform 0.5s !important",
        alignSelf: "baseline",
        position: "relative",
        alignItems: "center",
        borderRadius: 50,
        display: "flex",
        height: 10,
        "&:hover": {
            cursor: "pointer"
        }
    },
    indicator: {
        position: "absolute",
        borderRadius: 10,
        height: 20
    }
}, {
    name: "NCore-Switcher"
});
export default useStyles;
