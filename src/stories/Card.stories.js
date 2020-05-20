import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '../components/subcomponents/cards/Card';

export const card = {
  id:1,
  subtitle: 'Diseño y desarrollo de aplicaciones web',
  img: 'img/team.png',
};

storiesOf('Card', module)
  .add('default', () => <Card card={card} />)
