import React from 'react';
import { storiesOf } from '@storybook/react';

import CardSection from '../components/CardSection';
import { card, actions } from './Card.stories';

export const defaultCards = [
  { ...card, id:1, subtitle: 'Diseño y desarrollo de aplicaciones web', img:'img/team.png' },
  { ...card, id:2, subtitle: 'Diseño y desarrollo de aplicaciones móviles', img:'img/team.png' },
  { ...card, id:3, subtitle: 'Difusión de contenido tecnológico', img:'img/team.png' },
];

storiesOf('CardSection', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default', () => <CardSection cards={defaultCards} />)
  .add('loading', () => <CardSection loading cards={[]} />)
