import {
    Story,
    Meta
} from "@storybook/react";
import Container from "./container";
import IContainerProps from "./container.props";

export default {
    title: "Components/Container",
    component: Container,
    parameters: {
        docs: {
            description: {
                component: "Welcome to N Container page."
            }
        }
    },
    argTypes: {
    }
} as Meta;

const Template: Story<IContainerProps> = (args) => <Container {...args} />;

export const Default = Template.bind({
});
Default.args = {
};
