import React from 'react';
import { storiesOf } from '@storybook/react';

import { Services } from '../components/Services';
import { Team } from '../components/Team';
import { Footer } from '../components/Footer';

const subtitle="Ingeniero Civil en Computación"
const github_icon="icon/github_icon.svg"
const linkedin_icon="icon/linkedin_icon.svg"

//Definiendo data de prueba
export const serviceSection = [
  { id:1, subtitle: 'Diseño y desarrollo de aplicaciones web', img:'icon/web_app.svg' },
  { id:2, subtitle: 'Diseño y desarrollo de aplicaciones móviles', img:'icon/movil_app.svg' },
  { id:3, subtitle: 'Difusión de contenido tecnológico', img:'icon/difusion.svg' },
];

export const teamSection = [
  {
    id: 1,
    img: 'img/dixon.jpeg',
    title: "Dixon Ortiz",
    subtitle: subtitle,
    roles: [
      { name: "Desarrollador web Full Stack"},
      { name: "Diseñador web autodidacta"}
    ],
    contact:[
      {icon:github_icon, link:""},
      {icon:linkedin_icon, link:""}
    ],
  },
  {
    id: 2,
    img: 'img/coni.jpeg',
    title: "Constanza Jazme",
    subtitle: subtitle,
    roles: [
      { name: "Desarrollador web Full Stack"},
      { name: "Scrum Master"}
    ],
    contact:[
      {icon:github_icon, link:""},
      {icon:linkedin_icon, link:""}
    ],
  },
];

export const footerSection = [
  {
    id:1,
    title: 'Flame',
    subtitles:[
      { name:"Sobre Flame", link:""},
      { name:"Acuerdos y condiciones de trabajo", link:""},
      { name:"Proyectos en Github", link:""},
      { name:"Tecnologías", link:""}
    ]
  },
  {
    id:2,
    title: 'Contacto',
    subtitles:[
      { name:"(9) 4620 0158", link:""},
      { name:"dixon.ortizc@gmail.com", link:""},
      { name:"Santiago de Chile", link:""}
    ]
  },
  {
    id:3,
    title: 'Redes Sociales',
    subtitles:[
      { name:"(9) 4620 0158", link:""},
      { name:"dixon.ortizc@gmail.com", link:""},
      { name:"Santiago de Chile", link:""}
    ]
  }
];

//Se crean historias
storiesOf('Sections', module)
  .add('serviceSection', () => <Services />)
  .add('teamSection', () => <Team />)
  .add('footerSection', () => <Footer />)
  .add('errorTeam', () => <Team error="Something" />);
