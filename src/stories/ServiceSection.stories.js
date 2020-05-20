import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ServiceSection } from '../components/ServiceSection';
import { defaultCards } from './CardSection.stories';

storiesOf('ServiceSection', module)
  .add('default', () => <ServiceSection />)
  .add('error', () => <ServiceSection error="Something" />);
