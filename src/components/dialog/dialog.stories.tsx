import {
    Story,
    Meta
} from "@storybook/react";
import IDialogProps from "./dialog.props";
import Dialog from "./dialog";

export default {
    title: "Components/Dialog",
    component: Dialog,
    parameters: {
        docs: {
            description: {
                component: "Welcome to N Dialog page."
            }
        }
    },
    argTypes: {
        isVisible: {
            control: "boolean"
        },
        variant: {
            control: {
                type: "select",
                options: [
                    "yes-no",
                    "info",
                    "ok"
                ]
            }
        },
        title: {
            control: {
                type: "text"
            }
        },
        content: {
            control: {
                type: "text"
            }
        }
    }
} as Meta;

const Template: Story<IDialogProps> = (args) => <Dialog {...args}/>;

export const Default = Template.bind({
});
Default.args = {
    title: "Alert!",
    content: "Hello world!.",
    isVisible: true,
    onOverlayPress: () => {
        alert("Overlay pressed.");
    },
    primaryButtonProps: {
        onClick: () => {
            alert("Primary button pressed.");
        }
    },
    secondaryButtonProps: {
        onClick: () => {
            alert("Secondary button pressed.");
        }
    }
};
