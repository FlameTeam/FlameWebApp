import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import CardDefault from '../components/subcomponents/cards/CardDefault';
import CardMember from '../components/subcomponents/cards/CardMember';

//Definiendo data de prueba
export const defaultCard = {
  id:1,
  subtitle: 'Diseño y desarrollo de aplicaciones web',
  img: 'img/team.png',
};

export const memberCard = {
  id: 1,
  img: 'img/dixon.jpeg',
  title: "Dixon Ortiz",
  subtitle: "Ingeniero Civil en Computación",
  roles: [
    { name: "Desarrollador web Full Stack"},
    { name: "Diseñador web autodidacta"}
  ],
  contact:[
    { icon:"img/github_icon.png", link:""},
    { icon:"img/linkedin_icon.png", link:""}
  ]
};

//Se crean historias
storiesOf('Card', module)
.add('default', () => <CardDefault card={object("default Card",defaultCard)} />)
.add('member', () => <CardMember card={object("member Card",memberCard)} />)
