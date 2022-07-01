import {
    NCoreProvider
} from "../src";

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            order: ['Docs', 'Getting Started', 'Components'],
        },
    },
};

export const decorators = [
    (Story) => <NCoreProvider>
        <Story/>
    </NCoreProvider>
];
