import {
    CSSProperties,
    FC
} from  "react";
import {
    useNCoreTheme 
} from "../../core/context";
import IStateCardProps, {
    StateCardStylerParams,
    StateCardStylerResult,
    ContentProps,
    TitleProps,
    IconProps
} from "./stateCard.props";
import useStyles from "./stateCard.styles";
import Button from "../button/button";
import Text from "../text/text";

const stateCardStyler = ({
    contentColor,
    titleColor,
    iconColor,
    isAction,
    spaces,
    colors,
    icon
}: StateCardStylerParams): StateCardStylerResult => {
    let container: CSSProperties = {
        marginBottom: spaces.content * 2,
        padding: spaces.container
    };

    let titleProps: TitleProps = {
        variant: "header7",
        color: "body",
        style: {
            marginBottom: spaces.inline * 2
        }
    };

    let iconProps: IconProps = {
        color: colors.body,
        size: 65,
        style: {
            marginBottom: spaces.content * 2
        }
    };

    let contentProps: ContentProps = {
        variant: "body",
        color: "body"
    };

    if(icon) {
        titleProps = {
            ...titleProps,
            style: {
                ...titleProps.style,
                marginLeft: spaces.content
            }
        };
    }

    if(titleColor) {
        titleProps.color = titleColor;
        iconProps.color = titleColor;
    }

    if(iconColor) {
        iconProps.color = iconColor;
    }

    if(contentColor) {
        contentProps.color = contentColor;
    }

    if(isAction) {
        contentProps.style = {
            marginBottom: spaces.content * 2
        };
    }

    return {
        contentProps,
        titleProps,
        iconProps,
        container
    };
};

/**
 * A generic stateCard
 * @param props {@link IStateCardProps}
 * @returns Element
 */
const StateCard: FC<IStateCardProps> = ({
    icon: IconComponentProp,
    contentColor,
    buttonProps,
    titleColor,
    className,
    iconColor,
    isAction,
    content,
    style,
    title,
    ...props
}) => {
    const classes = useStyles();

    const {
        colors,
        spaces
    } = useNCoreTheme();

    const {
        contentProps,
        titleProps,
        container,
        iconProps
    } = stateCardStyler({
        icon: IconComponentProp,
        contentColor,
        titleColor,
        iconColor,
        isAction,
        colors,
        spaces
    });

    const renderIcon = () => {
        if(!IconComponentProp) {
            return null;
        }

        return <IconComponentProp
            {...iconProps}
        />;
    };

    const renderTitle = () => {
        return <Text
            variant={titleProps.variant}
            color={titleProps.color}
            style={{
                ...titleProps.style
            }}
        >
            {title}
        </Text>;
    };

    const renderContent = () => {
        return <Text
            variant={contentProps.variant}
            className={classes.content}
            color={contentProps.color}
            style={{
                ...contentProps.style
            }}
        >
            {content}
        </Text>;
    };

    const renderAction = () => {
        if(!isAction) {
            return null;
        }

        return <Button
            {...buttonProps}
            onClick={() => {
                if(buttonProps?.onClick) buttonProps.onClick();
            }}
        />;
    };

    return <div
        {...props}
        className={[
            classes.container,
            className
        ].join(" ")}
        style={{
            ...style,
            ...container
        }}
    >
        {renderIcon()}
        {renderTitle()}
        {renderContent()}
        {renderAction()}
    </div>;
};
export default StateCard;
