import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    "@global": {
        "@font-face": {
            fontFamily: "Montserrat-Thin",
            src: "url(https://fonts.nibgat.space/Montserrat-Thin.ttf)"
        },
        "@font-face": {
            fontFamily: "Montserrat-ExtraLight",
            src: "url(https://fonts.nibgat.space/Montserrat-ExtraLight.ttf)"
        },
        "@font-face": {
            fontFamily: "Montserrat-Light",
            src: "url(https://fonts.nibgat.space/Montserrat-Light.ttf)"
        },
        "@font-face": {
            fontFamily: "Montserrat-Regular",
            src: "url(https://fonts.nibgat.space/Montserrat-Regular.ttf)"
        },
        "@font-face": {
            fontFamily: "Montserrat-Medium",
            src: "url(https://fonts.nibgat.space/Montserrat-Medium.ttf)"
        },
        "@font-face": {
            fontFamily: "Montserrat-SemiBold",
            src: "url(https://fonts.nibgat.space/Montserrat-SemiBold.ttf)"
        },
        "@font-face": {
            fontFamily: "Montserrat-Bold",
            src: "url(https://fonts.nibgat.space/Montserrat-Bold.ttf)"
        },
        "@font-face": {
            fontFamily: "Montserrat-ExtraBold",
            src: "url(https://fonts.nibgat.space/Montserrat-ExtraBold.ttf)"
        },
        "@font-face": {
            fontFamily: "Montserrat-Black",
            src: "url(https://fonts.nibgat.space/Montserrat-Black.ttf)"
        },
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
});
export default useStyles;
