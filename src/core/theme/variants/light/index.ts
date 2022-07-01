export const colors: Required<NCore.Colors> = {
    "primary":          "#00C2A0",
    "body":             "#2A2A2A",
    "constrastBody":    "#F5F5F5",
    "layer1":           "#E5E5E5",
    "layer2":           "#F2F2F2",
    "layer3":           "#FAFAFA",
    "panel":            "#F2F2F2",
    "warning":          "#EBD147",
    "danger":           "#EB7E47",
    "success":          "#7EEB47",
    "accent":           "#EB4747",
    "attention":        "#EB477E",
    "info":             "#4799EB",
    "seperator":        "#cccccc",
    "hideBody":         "hsl(0, 0%, 60%)",
    "gray0":            "hsl(0, 0%, 0%)",
    "gray10":           "hsl(0, 0%, 10%)",
    "gray20":           "hsl(0, 0%, 20%)",
    "gray30":           "hsl(0, 0%, 30%)",
    "gray40":           "hsl(0, 0%, 40%)",
    "gray50":           "hsl(0, 0%, 50%)",
    "gray60":           "hsl(0, 0%, 60%)",
    "gray70":           "hsl(0, 0%, 70%)",
    "gray80":           "hsl(0, 0%, 80%)",
    "gray90":           "hsl(0, 0%, 90%)",
    "gray92":           "hsl(0, 0%, 92%)",
    "gray94":           "hsl(0, 0%, 94%)",
    "gray96":           "hsl(0, 0%, 96%)",
    "gray98":           "hsl(0, 0%, 98%)",
    "gray100":          "hsl(0, 0%, 100%)",
    "modalBackground":  "rgba(0, 0, 0, 0.5)"
};

export const typography: Required<NCore.Typography> = {
    header1: {
        fontFamily: "Montserrat",
        fontWeight: 300,
        lineHeight: 1.3,
        fontSize: 48
    },
    header2: {
        fontFamily: "Montserrat",
        fontWeight: 400,
        lineHeight: 1.3,
        fontSize: 32
    },
    header3: {
        fontFamily: "Montserrat",
        fontWeight: 500,
        lineHeight: 1.3,
        fontSize: 26
    },
    header4: {
        fontFamily: "Montserrat",
        fontWeight: 400,
        lineHeight: 1.3,
        fontSize: 22
    },
    header5: {
        fontFamily: "Montserrat",
        fontWeight: 600,
        lineHeight: 1.3,
        fontSize: 22
    },
    header6: {
        fontFamily: "Montserrat",
        fontWeight: 400,
        lineHeight: 1.3,
        fontSize: 18
    },
    header7: {
        fontFamily: "Montserrat",
        fontWeight: 500,
        lineHeight: 1.3,
        fontSize: 16
    },
    header8: {
        fontFamily: "Montserrat",
        fontWeight: 600,
        lineHeight: 1.3,
        fontSize: 14
    },
    header9: {
        fontFamily: "Montserrat",
        fontWeight: 600,
        lineHeight: 1.3,
        fontSize: 12
    },
    body: {
        fontFamily: "Montserrat",
        fontWeight: 400,
        lineHeight: 1.42,
        fontSize: 14
    },
    caption: {
        fontFamily: "Montserrat",
        fontWeight: 600,
        letterSpacing: -0.5,
        lineHeight: 1.2,
        fontSize: 10
    },
    buttonSmall: {
        fontFamily: "Montserrat",
        fontWeight: 600,
        letterSpacing: 0.5,
        lineHeight: 1.42,
        fontSize: 12
    },
    buttonMedium: {
        fontFamily: "Montserrat",
        fontWeight: 600,
        letterSpacing: 0.5,
        lineHeight: 1.42,
        fontSize: 14
    },
    buttonLarge: {
        fontFamily: "Montserrat",
        fontWeight: 600,
        letterSpacing: 0.5,
        lineHeight: 1.42,
        fontSize: 16
    },
    overline: {
        fontFamily: "Montserrat",
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: 1,
        fontSize: 12
    }
};

const theme: Required<NCore.Theme> = {
    key: "light",
    typography,
    colors
};

export default theme;
