import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    hide: {
        display: "none"
    },
    "@global": {
        "*": {
            transition: "all 0.5s"
        },
        "::-webkit-scrollbar": {
            height: 9,
            width: 9
        },
        "::-webkit-scrollbar-button": {
            height: 0,
            width: 0
        },
        "::-webkit-scrollbar-thumb": {
            border: "0px none #ffffff",
            background: "#00c0a8",
            borderRadius: 100
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: "#00dbc2"
        },
        "::-webkit-scrollbar-thumb:active": {
            background: "#fafafa"
        },
        "::-webkit-scrollbar-track": {
            border: "0px none #ffffff",
            background: "#3c3c3c",
            borderRadius: 100
        },
        "::-webkit-scrollbar-track:hover": {
            background: "#464646"
        },
        "::-webkit-scrollbar-track:active": {
            background: "#3c3c3c"
        },
        "::-webkit-scrollbar-corner": {
            background: "transparent"
        }
    }
}, {
    name: "NCore"
});
export default useStyles;
