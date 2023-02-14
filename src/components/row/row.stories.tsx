import {
    Story,
    Meta
} from "@storybook/react";
import Row from "./row";
import IRowProps from "./row.props";

export default {
    title: "Components/Row",
    component: Row,
    parameters: {
        docs: {
            description: {
                component: "Welcome to N Row page."
            }
        }
    },
    argTypes: {
        disabled: {
            control: "boolean"
        },
        isRedirect: {
            control: "boolean"
        }
    },
} as Meta;

const Template: Story<IRowProps> = (args) => <Row {...args} />;

export const Default = Template.bind({
});
Default.args = {
    title: "Row"
};
