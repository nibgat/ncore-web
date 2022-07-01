import {
    ReactNode
} from "react";
import {
    ButtonDisplayBehaviourWhileLoading
} from "../../components/button/button";
import {
    PortalizedComponentProps 
} from "../types";

export interface IDialogProps extends PortalizedComponentProps {
    variant?: DialogVariant;
    title?: string;
    content?: string;
    onOverlayPress?: () => void;
    primaryButtonProps?: DialogButton;
    secondaryButtonProps?: DialogButton;
    headerComponent?: ReactNode;
    bottomComponent?: ReactNode;
};

export type DialogVariant = "yes-no" | "ok" | "info";

type DialogButton = {
    title?: string;
    onPress?: () => void;
    displayBehaviourWhileLoading?: ButtonDisplayBehaviourWhileLoading;
    loading?: boolean;
};
