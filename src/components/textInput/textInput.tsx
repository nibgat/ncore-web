import React, {
    CSSProperties,
    useEffect,
    useState,
    useRef,
    FC
} from  "react";
import {
    useNCoreTheme 
} from "../../core/context";
import ITextInputProps, {
    TextInputStylerParams,
    TextInputStylerResult,
    TitleProps
} from "./textInput.props";
import useStyles from "./textInput.styles";
import Text from "../text/text";
import {
    ClearIcon
} from "../../assets/svgr";

const textInputStyler = ({
    disabledStyle,
    typography,
    isFocused,
    multiline,
    disabled,
    radiuses,
    borders,
    colors,
    spaces,
    value
}: TextInputStylerParams): TextInputStylerResult => {
    let container: CSSProperties = {
        borderColor: isFocused ? colors.primary : colors.panel,
        paddingRight: spaces.container / 1.5,
        paddingLeft: spaces.container / 1.5,
        paddingBottom: spaces.content * 1.5,
        paddingTop: spaces.content * 1.5,
        backgroundColor: colors.panel,
        borderRadius: radiuses.half,
        borderWidth: borders.line
    };

    let titleProps: TitleProps = {
        color: value?.length || isFocused ? "primary" : "gray50",
        style: {
            marginBottom: spaces.inline
        }
    };

    let input: CSSProperties = {
        backgroundColor: "transparent",
        opacity: value ? 1 : 0.5,
        color: colors.body,
        ...typography.body,
        lineHeight: undefined,
        height: 18
    };

    let clear: CSSProperties = {
        marginLeft: spaces.content
    };

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
    }

    if(multiline) {
        input.height = "auto";
        clear.marginTop = spaces.content * 1.5;
        clear.alignSelf = "flex-start";
    }

    return {
        titleProps,
        container,
        input,
        clear
    };
};

const TextInput: FC<ITextInputProps> = ({
    clearEnabled = false,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    isRequired = false,
    multiline = false,
    disabled = false,
    onChangeText,
    initialValue,
    placeholder,
    inputClass,
    className,
    style,
    title,
    id,
    ...props
}) => {
    const classes = useStyles({
        disabled
    });

    const {
        disabled: designTokensDisabled,
        typography,
        radiuses,
        borders,
        spaces,
        colors
    } = useNCoreTheme();

    const inputRef = useRef(null);

    const onClickContainer = () => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    };

    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(initialValue ? initialValue : "");

    const finalTitle = isRequired ? "* " + title : title;

    const {
        titleProps,
        container,
        input,
        clear
    } = textInputStyler({
        disabledStyle: designTokensDisabled,
        typography,
        isFocused,
        multiline,
        disabled,
        radiuses,
        borders,
        colors,
        spaces,
        value
    });

    const onFocus = () => {
        setIsFocused(true);
        if(onFocusProp) onFocusProp();
    };

    const onBlur = () => {
        setIsFocused(false);
        if(onBlurProp) onBlurProp();
    };

    const renderClearButton = () => {
        if(disabled) {
            return null;
        }
    
        if(!clearEnabled) {
            return null;
        }
    
        if(value?.length === 0) {
            return null;
        }

        return <div
            onClick={() => setValue("")}
            className={[
                classes.clearButton
            ].join(" ")}
            style={{
                ...clear
            }}
        >
            <ClearIcon
                color={colors.hideBody}
                size={1.25}
            />
        </div>;
    };

    const renderInput = () => {
        if(multiline) {
            return <textarea
                disabled={disabled}
                onFocus={onFocus}
                onBlur={onBlur}
                ref={inputRef}
                onChange={(e) => {
                    if(onChangeText) onChangeText(e.target.value);
                    setValue(e.target.value);
                }}
                placeholder={placeholder}
                value={value}
                className={[
                    classes.multilineInput,
                    inputClass
                ].join(" ")}
                style={{
                    ...input
                }}
            />;
        }

        return <input
            {...props}
            ref={inputRef}
            type="text"
            value={value}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={(e) => {
                if(onChangeText) onChangeText(e.target.value);
                setValue(e.target.value);
            }}
            placeholder={placeholder}
            className={[
                classes.input,
                inputClass
            ].join(" ")}
            style={{
                ...input
            }}
        />;
    };

    return <div
        className={[
            classes.container,
            className
        ].join(" ")}
        onClick={onClickContainer}
        style={{
            ...style,
            ...container
        }}
    >
        <div
            className={[
                classes.content
            ].join(" ")}
        >
            <Text
                {...titleProps}
            >
                {finalTitle}
            </Text>
            {renderInput()}
        </div>
        {renderClearButton()}
    </div>;
};
export default TextInput;
