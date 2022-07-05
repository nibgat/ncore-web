import {
    Story,
    Meta
} from "@storybook/react";
import Text from "./text";
import ITextProps from "./text.props";
import lightTheme from "../../core/theme/variants/light";

export default {
    title: "Components/Text",
    component: Text,
    parameters: {
        docs: {
            description: {
                component: "Welcome to N Text page."
            }
        }
    },
    argTypes: {
        color: {
            control: {
                type: "select",
                options: Object.keys(lightTheme.colors)
            },
        },
        variant: {
            control: {
                type: "select",
                options: Object.keys(lightTheme.typography)
            }
        }
    },
} as Meta;

const Template: Story<ITextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({
});
Default.args = {
    variant: "body",
    children: "Body"
};

export const Header1 = Template.bind({
});
Header1.args = {
    variant: "header1",
    children: "Header1"
};

export const Header2 = Template.bind({
});
Header2.args = {
    variant: "header2",
    children: "Header2"
};

export const Header3 = Template.bind({
});
Header3.args = {
    variant: "header3",
    children: "Header3"
};

export const Header4 = Template.bind({
});
Header4.args = {
    variant: "header4",
    children: "Header4"
};

export const Header5 = Template.bind({
});
Header5.args = {
    variant: "header5",
    children: "Header5"
};

export const Header6 = Template.bind({
});
Header6.args = {
    variant: "header6",
    children: "Header6"
};

export const Header7 = Template.bind({
});
Header7.args = {
    variant: "header7",
    children: "Header7"
};

export const Header8 = Template.bind({
});
Header8.args = {
    variant: "header8",
    children: "Header8"
};

export const Header9 = Template.bind({
});
Header9.args = {
    variant: "header9",
    children: "Header9"
};

export const Body = Template.bind({
});
Body.args = {
    variant: "body",
    children: "Body"
};

export const Caption = Template.bind({
});
Caption.args = {
    variant: "caption",
    children: "Caption"
};

export const Overline = Template.bind({
});
Overline.args = {
    variant: "overline",
    children: "Overline"
};

export const ButtonSmall = Template.bind({
});
ButtonSmall.args = {
    variant: "buttonSmall",
    children: "Button Small"
};

export const ButtonMedium = Template.bind({
});
ButtonMedium.args = {
    variant: "buttonMedium",
    children: "Button Medium"
};

export const ButtonLarge = Template.bind({
});
ButtonLarge.args = {
    variant: "buttonLarge",
    children: "Button Large"
};
