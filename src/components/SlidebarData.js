import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SiBuffer,SiCodeforces}  from "react-icons/si";
import {TiTime}  from "react-icons/ti";
import * as IoIcons from "react-icons/io";
import {IoPersonAdd} from "react-icons/io5";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Courses",
    path: "/course",
    icon: <SiBuffer/>,
    cName: "nav-text"
  },
  {
    title: "Results",
    path: "/result",
    icon: <SiCodeforces />,
    cName: "nav-text"
  },
  {
    title: "Schedules",
    path: "/schedule",
    icon: <TiTime />,
    cName: "nav-text"
  },
  {
    title: "Enrollments",
    path: "/enrollment",
    icon: <IoPersonAdd />,
    cName: "nav-text"
  }
];
