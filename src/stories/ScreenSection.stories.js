import React from "react";
import { storiesOf } from "@storybook/react";

import { Services } from "../components/Services";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";

const github_icon = "icon/github_icon.svg";
const linkedin_icon = "icon/linkedin_icon.svg";

export const serviceSection = [
  {
    id: 1,
    subtitle: "Diseño y desarrollo de aplicaciones web",
    img: "icon/web_app.svg",
  },
  {
    id: 2,
    subtitle: "Diseño y desarrollo de aplicaciones móviles",
    img: "icon/movil_app.svg",
  },
  {
    id: 3,
    subtitle: "Difusión de contenido tecnológico",
    img: "icon/difusion.svg",
  },
];

export const teamSection = [
  {
    id: 1,
    img: "img/dixon.jpeg",
    title: "Dixon Ortiz",
    subtitle: "Ingeniero Civil en Computación",
    roles: [
      { name: "Desarrollador Web Full Stack" },
      { name: "Diseñador UX-UI" },
    ],
    contact: [
      { icon: github_icon, link: "https://github.com/DixonOrtiz" },
      {
        icon: linkedin_icon,
        link: "https://www.linkedin.com/in/dixonortizchandia/",
      },
    ],
  },
  {
    id: 2,
    img: "img/coni.jpeg",
    title: "Constanza Jazme",
    subtitle: "Ingeniera Civil en Computación",
    roles: [
      { name: "Desarrolladora Web Full Stack" },
      { name: "Scrum Master" },
    ],
    contact: [
      { icon: github_icon, link: "https://github.com/ConstanzaJazme" },
      {
        icon: linkedin_icon,
        link: "https://www.linkedin.com/in/constanzajazme/",
      },
    ],
  },
];

export const footerSection = [
  {
    id: 1,
    title: "Flame",
    subtitles: [
      {
        name: "Sobre Flame",
        link:
          "https://www.linkedin.com/company/flamedev/about/?viewAsMember=true",
      },

      { name: "Tecnologías", link: "https://github.com/FlameTeam" },
    ],
  },
  {
    id: 2,
    title: "RRSS de Flame",
    subtitles: [
      { name: "Linkedin", link: "https://www.linkedin.com/company/flamedev" },
      { name: "Github", link: "https://github.com/FlameTeam" },
    ],
  },
];

//Se crean historias
storiesOf("Sections", module)
  .add("serviceSection", () => <Services />)
  .add("teamSection", () => <Team />)
  .add("footerSection", () => <Footer />)
  .add("errorTeam", () => <Team error="Something" />);
