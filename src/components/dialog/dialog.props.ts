import {
    ReactNode
} from "react";
import {
    ButtonDisplayBehaviourWhileLoading
} from "../../components/button/button.props";
import {
    PortalizedComponentProps 
} from "../../core/types";
import {
    CSSProperties 
} from "styled-components";

export type DialogStylerParams = {
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
    title?: string;
    onClick?: () => void;
    displayBehaviourWhileLoading?: ButtonDisplayBehaviourWhileLoading;
    loading?: boolean;
};

interface IDialogProps extends PortalizedComponentProps {
    variant?: DialogVariant;
    title?: string;
    content?: string;
    onOverlayPress?: () => void;
    primaryButtonProps?: DialogButton;
    secondaryButtonProps?: DialogButton;
    headerComponent?: ReactNode;
    bottomComponent?: ReactNode;
    children?: ReactNode;
};
export default IDialogProps;
