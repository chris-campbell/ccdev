import { SiNextdotjs } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export const projects = [
  {
    name: "Hello Dixie Co.",
    icons: [<SiReact />, <SiNextdotjs />, <SiGraphql />],
    description:
      "Hello Dixie t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
  {
    name: "Laymanns",
    icons: [<SiReact />, <SiNodedotjs />, <SiExpress />],
    description:
      "Laymanns is designed to be a blogging platform that allows its users to create articles and provide extra context to other users post. Providing further context will aid in making complex topics easier to grasp. especially useful for blogging tutorials.",
  },
  {
    name: "Movie Searcher",
    icons: [<SiReact />, <SiGraphql />],
    description:
      "Simple mevie search application built primarly with React JS. Application allows its users to search for a movie and returns results queried from the MovieDB.",
  },
  {
    name: "Sudoku",
    icons: [<SiReact />, <SiTypescript />],
    description:
      "Simple Sudoku application that strictly enforces the rules of a sudoku game.",
  },
];
