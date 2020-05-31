import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import Column from '../components/subcomponents/columns/Column';

//Definiendo data de prueba
export const defaultColumn = {
  id:1,
  title: 'Flame',
  subtitles:[
    { name:"Sobre Flame", link:""},
    { name:"Acuerdos y condiciones de trabajo", link:""},
    { name:"Proyectos en Github", link:""},
    { name:"Tecnologías", link:""}
  ]
};

//Se crean historias
storiesOf('Column', module)
.add('default', () => <Column info={object("default Column",defaultColumn)} />)
