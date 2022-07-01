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
        }
    }
});
export default useStyles;
