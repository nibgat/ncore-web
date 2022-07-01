import designTokens from "../theme/designTokens";
import lightTheme from "../theme/variants/light";

export type ThemeStore = {
    activeTheme: NCore.ThemeKey;
    switchTheme: (themeKey: NCore.ThemeKey) => void;
    typography: NCore.Typography;
    colors: NCore.Colors;
    spaces: NCore.SpacesTokens;
    borders: NCore.BordersTokens;
    radiuses: NCore.RadiusesTokens;
    disabled: NCore.DisabledTokens;
    isSetInitialHooks: boolean;
};

export type ThemeStoreReducer = Partial<ThemeStore>;
export type useNCoreThemeReturnType = ThemeStore;

const themeStore: ThemeStore = {
    activeTheme: "light",
    switchTheme: () => {},
    isSetInitialHooks: false,
    typography: lightTheme.typography,
    colors: lightTheme.colors,
    spaces: designTokens.spaces,
    borders: designTokens.borders,
    radiuses: designTokens.radiuses,
    disabled: designTokens.disabled
};
export default themeStore;
