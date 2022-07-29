import {
    Story,
    Meta
} from "@storybook/react";
import Switcher from "./switcher";
import ISwitcherProps from "./switcher.props";

export default {
    title: "Components/Switcher",
    component: Switcher,
    parameters: {
        docs: {
            description: {
                component: "Welcome to N Switcher page. Please use with onChange prop on the project."
            }
        }
    },
    argTypes: {
        isActive: {
            control: "boolean"
        },
        disabled: {
            control: "boolean"
        }
    }
} as Meta;

const Template: Story<ISwitcherProps> = (args) => <Switcher {...args} />;

export const Default = Template.bind({
});
Default.args = {
    isActive: false
};
