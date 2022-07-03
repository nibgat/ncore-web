import {
    FC
} from "react";
import {
    LocaleConfig 
} from "../constants";

export type PortalizedComponentProps = {
    isVisible: boolean
};

export interface INCoreIconProps {
    color?: string;
    size?: number;
};

export type NCoreIcon = FC<INCoreIconProps>;

export type NCoreConfig = {
    themes?: Array<NCore.Theme>;
    designTokens?: NCore.DesignTokens;
    locales?: Array<LocaleConfig>
    initialThemeKey?: NCore.ThemeKey;
    initialLanguage?: string;
};

declare global {
    namespace NCore {
        type ThemeKey = "light" | "dark" | string;

        interface Theme {
            key: ThemeKey;
            typography?: Typography;
            colors?: Colors;
        }

        interface Typography {
            header1?: TypograpghyVariant;
            header2?: TypograpghyVariant;
            header3?: TypograpghyVariant;
            header4?: TypograpghyVariant;
            header5?: TypograpghyVariant;
            header6?: TypograpghyVariant;
            header7?: TypograpghyVariant;
            header8?: TypograpghyVariant;
            header9?: TypograpghyVariant;
            body?: TypograpghyVariant;
            caption?: TypograpghyVariant;
            buttonSmall?: TypograpghyVariant;
            buttonMedium?: TypograpghyVariant;
            buttonLarge?: TypograpghyVariant;
            overline?: TypograpghyVariant;
        }

        interface Colors {
            primary: string;
            body: string;
            constrastBody: string;
            layer1: string;
            layer2: string;
            layer3: string;
            panel: string;
            warning: string;
            danger: string;
            success: string;
            accent: string;
            attention: string;
            info: string;
            seperator: string;
            hideBody: string;
            gray0: string;
            gray10: string;
            gray20: string;
            gray30: string;
            gray40: string;
            gray50: string;
            gray60: string;
            gray70: string;
            gray80: string;
            gray90: string;
            gray92: string;
            gray94: string;
            gray96: string;
            gray98: string;
            gray100: string;
            modalBackground: string;
        }

        type TypograpghyVariant = {
            fontFamily: string;
            fontWeight?: "normal" | "bold" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
            fontSize: number;
            lineHeight?: number;
            letterSpacing?: number;
            textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
        }

        interface DesignTokens {
            spaces?: SpacesTokens;
            borders?: BordersTokens;
            radiuses?: RadiusesTokens;
            disabled?: DisabledTokens;
        }

        interface SpacesTokens {
            container: number;
            content: number;
            inline: number;
            item: number;
        }

        interface BordersTokens {
            indicator?: number;
            line?: number;
        }

        interface RadiusesTokens {
            quarter?: number;
            hard?: number;
            half?: number;
        }

        interface DisabledTokens {
            opacity?: number;
        }

        interface Translation {
            nCoreDefaultDialogSecondaryButtonTitle: string;
            nCoreDefaultDialogPrimaryButtonTitle: string;
            nCoreSelectBoxSelectedText: string;
            nCoreSelectBoxNoSelectionText: string;
            nCoreSelectBoxMinSelectionWarningText: string;
            nCoreSelectBoxMaxSelectionReachedText: string;
            nCoreSelectBoxSelectAll: string;
            nCoreSelectBoxClearAll: string;
        }
    }
}
