import autodesk from "simple-icons/icons/autodesk";
import css3 from "simple-icons/icons/css3";
import csharp from "simple-icons/icons/csharp";
import cplusplus from "simple-icons/icons/cplusplus";
import dart from "simple-icons/icons/dart";
import flutter from "simple-icons/icons/flutter";
import html5 from "simple-icons/icons/html5";
import javascript from "simple-icons/icons/javascript";
import microsoftoffice from "simple-icons/icons/microsoftoffice";
import mysql from "simple-icons/icons/mysql";
import npm from "simple-icons/icons/npm";
import adobephotoshop from "simple-icons/icons/adobephotoshop";
import react from "simple-icons/icons/react";
import unity from "simple-icons/icons/unity";
import { Cloud } from "react-icon-cloud";

const staticIcons = [
    "autodesk",
    "css3",
    "csharp",
    "cplusplus",
    "dart",
    "flutter",
    "html5",
    "javascript",
    // "matlab",
    "microsoftoffice",
    // "microsoftvisualbasic",
    "mysql",
    "npm",
    "adobephotoshop",
    "react",
    // "scss",
    "unity"
];

const cloudProps = {
    containerProps: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: 40
      }
    },
    // https://www.goat1000.com/tagcanvas-options.php
    options: {
      clickToFront: 500,
      depth: 1,
      imageScale: 2,
      initial: [0.1, -0.1],
      outlineColour: "#0000",
      reverse: true,
      tooltip: "native",
      tooltipDelay: 0,
      wheelZoom: true,
      minSpeed: 0.03,
    }
  };

export const StaticCloud = () => {
  const cloudIcons = staticIcons.map(i)

  return <Cloud {...cloudProps}></Cloud>
}