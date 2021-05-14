import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Covid 19 Stats",
    path: "/covid19",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Climate",
    path: "/climate",
    icon: <IoIcons.IoIosCloud />,
    cName: "nav-text",
  },
  {
    title: "Image Search",
    path: "/image",
    icon: <IoIcons.IoIosImage />,
    cName: "nav-text",
  },
  {
    title: "Vaccine Updates",
    path: "/vaccine-covid-19",
    icon: <IoIcons.IoIosMedkit />,
    cName: "nav-text",
  },
  {
    title: "Get IP Info",
    path: "/ip-info",
    icon: <IoIcons.IoIosGitNetwork />,
    cName: "nav-text",
  },
];
