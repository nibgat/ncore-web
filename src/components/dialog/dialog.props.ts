import {
    CSSProperties,
    ReactNode
} from "react";
import {
    ButtonDisplayBehaviourWhileLoading
} from "../../components/button/button.props";
import {
    PortalizedComponentProps 
} from "../../core/types";

export type DialogStylerParams = {
    contentContainerStyle?: CSSProperties;
    bottomContainerStyle?: CSSProperties;
    headerContainerStyle?: CSSProperties;
    radiuses: NCore.RadiusesTokens;
    spaces: NCore.SpacesTokens;
    colors: NCore.Colors;
};

export type DialogStylerResult = {
    primaryButton: CSSProperties;
    container: CSSProperties;
    content: CSSProperties;
    bottom: CSSProperties;
    header: CSSProperties;
};

export type DialogVariant = "yes-no" | "ok" | "info";

type DialogButton = {
    displayBehaviourWhileLoading?: ButtonDisplayBehaviourWhileLoading;
    onClick?: () => void;
    loading?: boolean;
    title?: string;
};

interface IDialogProps extends PortalizedComponentProps {
    contentContainerStyle?: CSSProperties;
    bottomContainerStyle?: CSSProperties;
    headerContainerStyle?: CSSProperties;
    secondaryButtonProps?: DialogButton;
    primaryButtonProps?: DialogButton;
    onOverlayPress?: () => void;
    headerComponent?: ReactNode;
    bottomComponent?: ReactNode;
    variant?: DialogVariant;
    children?: ReactNode;
    content?: string;
    title?: string;
};
export default IDialogProps;
