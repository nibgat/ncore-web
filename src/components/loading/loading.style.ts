import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    "@global": {
        "@keyframes loading": {
            "from": {
                transform: "rotateZ(0deg) translateX(1px)"
            },
            "to": {
                transform: "rotateZ(-360deg) translateX(1px)"
            }
        }
    },
    container: {
        animation: "loading 1s linear infinite"
    }
}, {
    name: "NCore-Loading"
});
export default useStyles;
