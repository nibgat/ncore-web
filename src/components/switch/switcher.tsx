import {
    FC
} from  "react";
import {
    useNCoreTheme 
} from "../../core/context";
import ISwitcherProps, {
    SwitcherStylerParams, SwitcherStylerResult 
} from "./switcher.props";
import useStyles from "./switcher.style";

const SWITCH_AREA = 30;
const INDICATOR_WIDTH = 20;

const switcherStyler = ({
    indicatorStyle,
    isActive,
    colors,
    spaces,
    style
}: SwitcherStylerParams): SwitcherStylerResult => {
    const totalWidth = (spaces.content * 2) + SWITCH_AREA;
    const activeUsageAreaWidth = spaces.content + INDICATOR_WIDTH;
    const activeTransformX = totalWidth - activeUsageAreaWidth;

    let container = {
        ...style,
        backgroundColor: colors.gray80,
        padding: spaces.content,
        width: SWITCH_AREA
    };

    let indicator = {
        ...indicatorStyle,
        transform: `translateX(${isActive ? activeTransformX : 0}px)`,
        backgroundColor: colors.panel,
        left: spaces.content / 2,
        width: INDICATOR_WIDTH
    };

    if(isActive) {
        container.backgroundColor = colors.primary;
    }

    return {
        indicator,
        container
    };
};

const Switcher: FC<ISwitcherProps> = ({
    indicatorStyle,
    className,
    isActive,
    onChange,
    style
}) => {
    const {
        colors,
        spaces
    } = useNCoreTheme();

    const classes = useStyles();

    const {
        indicator,
        container
    } = switcherStyler({
        indicatorStyle,
        isActive,
        colors,
        spaces,
        style
    });

    return <div
        onClick={() => {
            if(onChange) onChange();
        }}
        className={[
            classes.container,
            className
        ].join(" ")}
        style={{
            ...container
        }}
    >
        <div
            className={[
                classes.indicator
            ].join(" ")}
            style={{
                ...indicator
            }}
        ></div>
    </div>;
};
export default Switcher;
