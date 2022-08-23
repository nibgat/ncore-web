import {
    Story,
    Meta
} from "@storybook/react";
import ILoadingProps from "./loading.props";
import Loading from "./loading";

export default {
    title: "Components/Loading",
    component: Loading,
    parameters: {
        docs: {
            description: {
                component: "Welcome to N Loading page."
            }
        }
    },
    argTypes: {
    }
} as Meta;

const Template: Story<ILoadingProps> = (args) => <Loading {...args} />;

export const Default = Template.bind({
});
Default.args = {
};
