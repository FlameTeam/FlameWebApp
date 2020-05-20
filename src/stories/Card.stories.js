import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Card from '../components/Card';

export const card = {
  subtitle: 'Diseño y desarrollo de aplicaciones web',
  img: 'img/team.png',
};

storiesOf('Card', module)
  .add('default', () => <Card card={card} />)
