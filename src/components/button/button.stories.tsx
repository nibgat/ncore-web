import React from "react";
import {
    Story,
    Meta
} from "@storybook/react";
import Button from "./button";
import IButtonProps from "./button.props";

export default {
    title: "Components/Button",
    component: Button,
    parameters: {
        docs: {
            description: {
                component: "Welcome to N Button page."
            }
        }
    },
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["small", "medium", "large"],
            },
        },
        variant: {
            control: {
                type: "select",
                options: ["filled", "outline", "ghost"]
            }
        },
        disabled: {
            control: "boolean"
        }
    },
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
    variant: "filled",
    title: "Button"
};

export const Outline = Template.bind({});
Outline.args = {
    variant: "outline",
    title: "Button"
};

export const Ghost = Template.bind({});
Ghost.args = {
    variant: "ghost",
    title: "Button"
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    title: "Button"
};

export const Medium = Template.bind({});
Medium.args = {
    size: "medium",
    title: "Button"
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    title: "Button"
};

export const Disabled = Template.bind({});
Disabled.args = {
    variant: "filled",
    disabled: true,
    title: "Button"
};
