import {
    en
} from "../locales";

export type LocalesStore = {
    activeLocale: string;
    switchLocale: (localizationKey: string) => void;
    isRTL: boolean;
    localize: (localizationKey: keyof NCore.Translation, params?: Array<string>) => string;
    currentLocalizationData: Record<keyof NCore.Translation, string>;
};

export type LocaleConfig = {
    code: string;
    isRTL: boolean;
    translations: Record<keyof NCore.Translation, string>;
};

export type useNCoreLocalizationReturnType = Omit<LocalesStore, "currentLocalizationData">;

const localesStore: LocalesStore = {
    currentLocalizationData: en.translations,
    switchLocale: () => {},
    activeLocale: "en",
    localize: () => "",
    isRTL: false
};
export default localesStore;
