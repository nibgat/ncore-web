import {
    createContext,
    useCallback,
    useReducer,
    ReactNode,
    useEffect,
    Dispatch,
    FC
} from "react";
import {
    LocalesStoreInitial,
    LocaleConfig,
    LocalesStore
} from "../constants";
import {
    en
} from "../locales";

export const LocalesContext = createContext<LocalesStore>(LocalesStoreInitial);

type LocalesProvider = {
    locales?: Array<LocaleConfig>;
    initialLanguage?: string;
    children: ReactNode;
};

const prepareLocaleData = (localeCode: string, locales: Array<LocaleConfig> | undefined) => {
    if(!(locales && locales.length)) {
        return en;
    }

    const selectedLanguageData = locales.find(e => e.code === localeCode);

    if(!(selectedLanguageData)) {
        if(localeCode === "en") {
            return en;
        } else {
            throw Error(`Can not find a locale for the given code: ${localeCode}`);
        }
    }

    const translations = {
        ...en.translations,
        ...selectedLanguageData.translations
    };

    return {
        code: localeCode,
        isRTL: selectedLanguageData.isRTL,
        translations: translations
    };
};

const LocalesProvider: FC<LocalesProvider> = ({
    children,
    locales,
    initialLanguage = "en"
}) => {
    const [contextValue, setContextValue]: [LocalesStore, Dispatch<Partial<LocalesStore>>] = useReducer(
        (state: LocalesStore, newValue: Partial<LocalesStore>) => ({
            ...state, ...newValue
        }),
        LocalesStoreInitial,
        (initialState) => {
            const initialLanguagesData = prepareLocaleData(initialLanguage, locales);
            return {
                ...initialState,
                activeLocale: initialLanguage,
                currentLocalizationData: initialLanguagesData.translations
            };
        }
    );

    const onLocaleChanged = useCallback((localizationKey: string) => {
        const languagesData = prepareLocaleData(localizationKey, locales);
        setContextValue({
            activeLocale: languagesData.code,
            isRTL: languagesData.isRTL,
            currentLocalizationData: languagesData.translations
        });
    }, [locales]);

    useEffect(() => {
        setContextValue({
            switchLocale: (localizationKey: string) => {
                setContextValue({
                    activeLocale: localizationKey
                });
            }
        });
    }, [contextValue.currentLocalizationData]);

    useEffect(() => {
        onLocaleChanged(contextValue.activeLocale);
    }, [locales, contextValue.activeLocale, onLocaleChanged]);

    return <LocalesContext.Provider
        value={contextValue}
    >
        {children}
    </LocalesContext.Provider>;
};
export default LocalesProvider;
