import {
    addons
} from '@storybook/addons';
import ncoreThemeForStorybook from './ncoreThemeForStorybook';
import favicon from './logo.ico';

addons.setConfig({
    theme: ncoreThemeForStorybook
});

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);
