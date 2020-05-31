import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import CardSection from '../components/subcomponents/cards/CardSection';

const subtitle="Ingeniero Civil en Computación"
const github_icon="icon/github_icon.svg"
const linkedin_icon="icon/linkedin_icon.svg"

export const serviceSection = [
  { id:1, subtitle: 'Diseño y desarrollo de aplicaciones web', img:'icon/web_app.svg' },
  { id:2, subtitle: 'Diseño y desarrollo de aplicaciones móviles', img:'icon/movil_app.svg' },
  { id:3, subtitle: 'Difusión de contenido tecnológico', img:'icon/difusion.svg' },
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
  .add('services', () => <CardSection type="default" cards={object("service Section",serviceSection)} />)
  .add('team', () => <CardSection type="member" cards={object("team Section",teamSection)} />)
  .add('loading', () => <CardSection loading cards={[]} />)
