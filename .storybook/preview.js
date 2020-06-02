import { addDecorator, configure } from '@storybook/react';
import Theme from './themeDecorator';
import { withKnobs } from "@storybook/addon-knobs";


addDecorator(withKnobs);
addDecorator(Theme);
