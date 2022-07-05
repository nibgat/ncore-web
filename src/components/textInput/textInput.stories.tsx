import React from "react";
import {
    Story,
    Meta
} from "@storybook/react";
import TextInput from "./textInput";
import ITextInputProps from "./textInput.props";

export default {
    title: "Components/TextInput",
    component: TextInput,
    parameters: {
        docs: {
            description: {
                component: "Welcome to N TextInput page."
            }
        }
    },
    argTypes: {
        title: {
            control: "text"
        },
        placeholder: {
            control: "text"
        },
        clearEnabled: {
            control: "boolean"
        },
        multiline: {
            control: "boolean"
        },
        disabled: {
            control: "boolean"
        }
    }
} as Meta;

const Template: Story<ITextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({
});
Default.args = {
    title: "Text Input",
    placeholder: "Please enter text"
};

export const Multiline = Template.bind({
});
Multiline.args = {
    title: "Text Input",
    placeholder: "Please enter text",
    clearEnabled: true,
    multiline: true
};

export const Disabled = Template.bind({
});
Disabled.args = {
    title: "Text Input",
    placeholder: "Please enter text",
    disabled: true
};
