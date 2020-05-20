import React from 'react';
import { storiesOf } from '@storybook/react';

import CardSection from '../components/subcomponents/cards/CardSection';

export const defaultCards = [
  { id:1, subtitle: 'Diseño y desarrollo de aplicaciones web', img:'img/team.png' },
  { id:2, subtitle: 'Diseño y desarrollo de aplicaciones móviles', img:'img/team.png' },
  { id:3, subtitle: 'Difusión de contenido tecnológico', img:'img/team.png' },
];

storiesOf('CardSection', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default', () => <CardSection cards={defaultCards} />)
  .add('loading', () => <CardSection loading cards={[]} />)
