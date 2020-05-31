import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import Card from '../components/subcomponents/cards/Card';

export const defaultCard = {
  id:1,
  subtitle: 'Diseño y desarrollo de aplicaciones web',
  img: 'img/team.png',
};

export const memberCard = {
  id: 1,
  title: "Dixon Ortiz",
  subtitle: "Ingeniero Civil en Computación",
  roles: {
    primero: "Desarrollador web Full Stack",
    segundo: "Diseñador web autodidacta"
    },
  github_icon: "img/github_icon.png",
  linkedin_icon: "img/linkedin_icon.png",
  img: 'img/dixon.jpeg',
  github_link: "",
  linkedin_link: ""

};

storiesOf('Card', module)
.add('default', () => <Card type="default" card={object("default Card",defaultCard)} />)
.add('member', () => <Card type="member" card={object("member Card",memberCard)} />)
