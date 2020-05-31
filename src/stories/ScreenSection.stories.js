import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import { ScreenSection } from '../components/ScreenSection';

storiesOf('ScreenSection', module)
  .add('serviceSection', () => <ScreenSection type="service" />)
  .add('teamSection', () => <ScreenSection type="team" />)
  .add('error', () => <ScreenSection error="Something" />);
