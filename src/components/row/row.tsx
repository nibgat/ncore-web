import {
    CSSProperties,
    FC
} from "react";
import useStyles from "./row.styles";
import IRowProps, {
    RowStylerParams,
    RowStylerResult
} from "./row.props";
import {
    ChevronRightIcon
} from "../../assets/svgr";
import {
    useNCoreTheme
} from "../../core/context";
import Text from "../text/text";

const rowStyler = ({
    redirectIconProps,
    disabledStyle,
    disabled,
    spaces,
    colors,
    color
}: RowStylerParams): RowStylerResult => {
    let container: CSSProperties = {
        backgroundColor: colors[color],
        padding: spaces.container
    };

    let _redirectIconProps = {
        color: colors.body,
        size: 30
    }

    if(redirectIconProps) {
        _redirectIconProps = {
            ..._redirectIconProps,
            ...redirectIconProps
        }
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        }
    }

    return {
        _redirectIconProps,
        container
    };
};

const Row: FC<IRowProps> = ({
    titleVariant = "header7",
    redirectIconProps,
    color = "layer2",
    rightComponent,
    leftComponent,
    isRedirect,
    disabled,
    onClick,
    title
}) => {
    const classes = useStyles();

    const {
        disabled: disabledStyle,
        colors,
        spaces
    } = useNCoreTheme();

    const {
        _redirectIconProps,
        container
    } = rowStyler({
        redirectIconProps,
        disabledStyle,
        disabled,
        spaces,
        colors,
        color
    });

    const renderLeft = () => {
        if(leftComponent) {
            return leftComponent;
        }

        return <Text
            variant={titleVariant}
        >
            {title}
        </Text>;
    }

    const renderRight = () => {
        if(rightComponent) {
            return rightComponent;
        }

        return null;
    }

    const renderRedirect = () => {
        if(!isRedirect) {
            return null;
        }

        return <ChevronRightIcon
            {..._redirectIconProps}
        />;
    };

    const _onClick = () => {
        if(!onClick) {
            return;
        }

        if(disabled) {
            return;
        }

        onClick();
    };

    return <div
        className={classes.container}
        style={{
            ...container
        }}
        onClick={_onClick}
    >
        <div>
            {renderLeft()}
        </div>
        <div>
            {renderRight()}
        </div>
        {renderRedirect()}
    </div>;
}
export default Row;
