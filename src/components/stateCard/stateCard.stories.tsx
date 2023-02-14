import {
    Story,
    Meta
} from "@storybook/react";
import StateCard from "./stateCard";
import IStateCardProps from "./stateCard.props";
import lightTheme from "../../core/theme/variants/light";
import {
    ClearIcon 
} from "../../assets/svgr";

export default {
    title: "Components/StateCard",
    component: StateCard,
    parameters: {
        docs: {
            description: {
                component: "Welcome to N StateCard page."
            }
        }
    },
    argTypes: {
        title: {
            control: "string"
        },
        content: {
            control: "string"
        },
        color: {
            control: {
                type: "select",
                options: Object.keys(lightTheme.colors)
            },
        },
        titleColor: {
            control: {
                type: "select",
                options: Object.keys(lightTheme.colors)
            }
        },
        iconColor: {
            control: {
                type: "select",
                options: Object.keys(lightTheme.colors)
            }
        },
        contentColor: {
            control: {
                type: "select",
                options: Object.keys(lightTheme.colors)
            }
        },
        isAction: {
            control: "boolean"
        }
    },
} as Meta;

const Template: Story<IStateCardProps> = (args) => <StateCard {...args} />;

export const Default = Template.bind({
});
Default.args = {
    title: "Data Not Found",
    content: "Data not found for your query. Please try again with different keywords.",
    icon: (iconProps) => <ClearIcon
        {...iconProps}
    />,
    buttonProps: {
        onClick: () => {
            alert("State Card Action");
        },
        spreadBehaviour: "free",
        title: "Action",
        color: "body",
        size: "small"
    }
};
