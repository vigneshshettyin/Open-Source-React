import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { ImQuotesLeft } from "react-icons/im";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Climate Live Search",
    path: "/climate",
    icon: <IoIcons.IoIosCloud />,
  },
  {
    title: "Image Live Search",
    path: "/image",
    icon: <IoIcons.IoIosImage />,
  },
  {
    title: "Covid 19 Tracker",
    path: "/covid19",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Get Vaccine Updates",
    path: "/vaccine-covid-19",
    icon: <IoIcons.IoIosMedkit />,
  },
  {
    title: "Get IP Info",
    path: "/ip-info",
    icon: <IoIcons.IoIosGitNetwork />,
  },
  {
    title: "Discord Webhook",
    path: "/discord-webhook",
    icon: <RiIcons.RiDiscordFill />,
  },
  {
    title:"Random Quotes",
    path:"/quotes",
    icon:<ImQuotesLeft/>
  }
];
