import React from 'react';
import { storiesOf } from '@storybook/react';

import { ServiceSection } from '../components/ServiceSection';

storiesOf('ServiceSection', module)
  .add('default', () => <ServiceSection />)
  .add('error', () => <ServiceSection error="Something" />);
