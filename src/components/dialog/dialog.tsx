import {
    FC
} from "react";
import useStyles, {
    dialogStyler 
} from "./dialog.style";
import {
    useNCoreLocalization,
    useNCoreTheme
} from "../../core/context";
import IDialogProps from "./dialog.props";
import Button from "../button/button";
import Text from "../text/text";
import {
    Portal
} from "../../packages/react-portalize/src/index";

const Dialog: FC<IDialogProps> = ({
    contentContainerStyle,
    bottomContainerStyle,
    headerContainerStyle,
    secondaryButtonProps,
    primaryButtonProps,
    isVisible = false,
    headerComponent,
    bottomComponent,
    onOverlayPress,
    children,
    variant,
    content,
    title
}) => {
    const {
        radiuses,
        spaces,
        colors
    } = useNCoreTheme();

    const {
        localize
    } = useNCoreLocalization();

    const styles = useStyles();

    const {
        primaryButton: primaryButtonStyle,
        content: contentStyle,
        container,
        bottom,
        header
    } = dialogStyler({
        contentContainerStyle,
        bottomContainerStyle,
        headerContainerStyle,
        radiuses,
        spaces,
        colors
    });

    const renderHeader = () => {
        return <div
            className={styles.headerContainer}
            style={{
                ...header
            }}
        >
            {headerComponent || <Text
                variant="header5"
            >
                {title}
            </Text>}
        </div>;
    };

    const renderBottom = () => {
        if(variant === "info") {
            return null;
        }

        return <div
            className={styles.bottomContainer}
            style={{
                ...bottom
            }}
        >
            {bottomComponent || <div
                className={styles.bottomContentContainer}
            >
                {secondaryButton()}
                {primaryButton()}
            </div>}
        </div>;
    };

    const secondaryButton = () => {
        if(variant !== "yes-no") {
            return null;
        }

        return <Button
            title={secondaryButtonProps?.title || localize("nCoreDefaultDialogSecondaryButtonTitle")}
            loading={secondaryButtonProps?.loading}
            color="layer2"
            textColor="body"
            onClick={() => {
                if(secondaryButtonProps?.onClick) secondaryButtonProps.onClick();
            }}
        />;
    };

    const primaryButton = () => {
        return <Button
            title={primaryButtonProps?.title || localize("nCoreDefaultDialogPrimaryButtonTitle")}
            loading={primaryButtonProps?.loading}
            onClick={() => {
                if(primaryButtonProps?.onClick) primaryButtonProps?.onClick();
            }}
            displayBehaviourWhileLoading={primaryButtonProps?.displayBehaviourWhileLoading}
            style={primaryButtonStyle}
        />;
    };

    if(!isVisible) {
        return null;
    }

    return <Portal>
        <div
            className={styles.container}
            style={{
                backgroundColor: colors.modalBackground,
                padding: spaces.container
            }}
        >
            <div
                className={styles.overlay}
                onClick={() => {
                    if(onOverlayPress) onOverlayPress();
                }}
            >
                <div className={styles.overlayTouchableArea}/>
            </div>
            <div
                className={styles.contentContainer}
                style={{
                    ...container
                }}
            >
                {renderHeader()}
                <div
                    className={styles.content}
                    style={{
                        ...contentStyle
                    }}
                >
                    {children || <Text>
                        {content}
                    </Text>}
                </div>
                {renderBottom()}
            </div>
        </div>
    </Portal>;
};
export default Dialog;
