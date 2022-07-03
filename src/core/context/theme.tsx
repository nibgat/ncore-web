import React, {
    createContext,
    useReducer,
    ReactNode,
    useEffect,
    useState,
    Dispatch,
    FC
} from "react";
import {
    ThemeStoreInitial,
    ThemeStoreReducer,
    ThemeStore
} from "../constants";
import {
    mergeGivenColorsWithNCore,
    mergeGivenTypographyWithNCore,
    mergeGivenDesignTokensWithNCore
} from "../theme";

// @ts-ignore
export const ThemeContext = createContext<ThemeStore>(ThemeStoreInitial);

type ThemeProvider = {
    initialThemeKey?: NCore.ThemeKey;
    themes?: Array<NCore.Theme>;
    designTokens?: NCore.DesignTokens;
    children: ReactNode;
};

const ThemeProvider: FC<ThemeProvider> = ({
    children,
    initialThemeKey = "light",
    themes,
    designTokens
}) => {
    const [theme, setTheme]: [ThemeStore, Dispatch<ThemeStoreReducer>] = useReducer(
        (state: ThemeStore, newValue: ThemeStoreReducer) => ({
            ...state, ...newValue
        }),
        // @ts-ignore
        ThemeStoreInitial,
        (initialState) => ({
            ...initialState,
            activeTheme: initialThemeKey
        })
    );
    const [isInitialSwitchTheme, setIsInitialSwitchTheme] = useState(false);

    useEffect(() => {
        if(!isInitialSwitchTheme && theme.isSetInitialHooks) {
            theme.switchTheme(initialThemeKey);
            setIsInitialSwitchTheme(true);
        }
    }, [isInitialSwitchTheme, initialThemeKey, theme]);

    useEffect(() => {
        setTheme({
            switchTheme: (themeKey: NCore.ThemeKey) => {
                const currentProjectTheme = themes?.find(e => e.key === themeKey);

                if(themeKey !== "light" && themeKey !== "dark" && !(currentProjectTheme)) {
                    throw Error(`Can not find a theme for the given themeKey: ${themeKey}`);
                }

                const _typography = mergeGivenTypographyWithNCore(themeKey, currentProjectTheme?.typography);
                const _colors = mergeGivenColorsWithNCore(themeKey, currentProjectTheme?.colors);
                const _designTokens = mergeGivenDesignTokensWithNCore(designTokens);

                setTheme({
                    activeTheme: themeKey,
                    typography: _typography,
                    colors: _colors,
                    spaces: _designTokens.spaces,
                    borders: _designTokens.borders,
                    radiuses: _designTokens.radiuses,
                    disabled: _designTokens.disabled
                });
            },
            isSetInitialHooks: true
        });
    }, [themes, designTokens]);

    return <ThemeContext.Provider
        value={theme}
    >
        {children}
    </ThemeContext.Provider>;
};
export default ThemeProvider;
