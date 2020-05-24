import React from 'react';
import { storiesOf } from '@storybook/react';

import CardSection from '../components/subcomponents/cards/CardSection';

const subtitle="Ingeniero Civil en Computación"
const github_icon="img/github_icon.png"
const linkedin_icon="img/linkedin_icon.png"

export const serviceSection = [
  { id:1, subtitle: 'Diseño y desarrollo de aplicaciones web', img:'img/team.png' },
  { id:2, subtitle: 'Diseño y desarrollo de aplicaciones móviles', img:'img/team.png' },
  { id:3, subtitle: 'Difusión de contenido tecnológico', img:'img/team.png' },
];

export const teamSection = [
  {
    id: 1,
    title: "Dixon Ortiz",
    subtitle: subtitle,
    roles: {
      primero: "Desarrollador web Full Stack",
      segundo: "Diseñador web autodidacta"
      },
    github_icon: github_icon,
    linkedin_icon: linkedin_icon,
    img: 'img/dixon.jpeg',
    github_link: "",
    linkedin_link: ""

  },
  {
    id: 2,
    title: "Constanza Jazme",
    subtitle: subtitle,
    roles: {
      primero: "Desarrollador web Full Stack",
      segundo: "Scrum Master"
      },
    github_icon: github_icon,
    linkedin_icon: linkedin_icon,
    img: 'img/coni.jpeg',
    github_link: "",
    linkedin_link: ""

  },
];

storiesOf('CardSection', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('services', () => <CardSection type="default" cards={serviceSection} />)
  .add('team', () => <CardSection type="member" cards={teamSection} />)
  .add('loading', () => <CardSection loading cards={[]} />)
