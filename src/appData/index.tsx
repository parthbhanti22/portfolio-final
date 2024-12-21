import {
  App,
  GalleryImage,
  Tab,
  WorkContent,
  WorkFile,
  WorkType,
} from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import gallery from "../../assets/folder_image.png";
import outlook from "../../assets/outlook.png";
import dsta from "../../assets/workaccordion/dsta.png";
import gdsc from "../../assets/workaccordion/gdsc.png";
import file from "../../assets/workaccordion/file.png";
import emptyfile from "../../assets/workaccordion/emptyfile.png";
import ee2026_1 from "../../assets/work/EE2026/ee2026_1.jpg";
import ee2026_2 from "../../assets/work/EE2026/ee2026_2.jpg";
import ee2026_3 from "../../assets/work/EE2026/ee2026_3.jpg";
import ee2026_4 from "../../assets/work/EE2026/ee2026_4.jpg";
import ee2026_5 from "../../assets/work/EE2026/ee2026_5.jpg";
import ee2026_6 from "../../assets/work/EE2026/ee2026_6.jpg";
import ee2026_7 from "../../assets/work/EE2026/ee2026_7.jpg";
import dsta_1 from "../../assets/work/dsta/1.png";
import dsta_2 from "../../assets/work/dsta/2.png";
import dsta_3 from "../../assets/work/dsta/3.png";
import dsta_4 from "../../assets/work/dsta/4.png";
import dsta_5 from "../../assets/work/dsta/5.png";
import dsta_6 from "../../assets/work/dsta/6.png";
import dsta_7 from "../../assets/work/dsta/7.png";
import dsta_8 from "../../assets/work/dsta/8.png";
import hfg_1 from "../../assets/work/hfg/1.png";
import hfg_2 from "../../assets/work/hfg/2.png";
import hfg_3 from "../../assets/work/hfg/3.png";
import hfg_5 from "../../assets/work/hfg/5.png";
import hfg_6 from "../../assets/work/hfg/6.png";
import hfg_7 from "../../assets/work/hfg/7.png";
import eg_1 from "../../assets/work/eg1311/1.jpg";
import eg_2 from "../../assets/work/eg1311/2.jpg";
import eg_3 from "../../assets/work/eg1311/3.jpg";
import eg_4 from "../../assets/work/eg1311/4.jpg";
import eg_5 from "../../assets/work/eg1311/5.jpg";
import eg_6 from "../../assets/work/eg1311/6.jpg";
import cg1 from "../../assets/work/cg1111/1.jpg";
import cg2 from "../../assets/work/cg1111/2.jpg";
import cg3 from "../../assets/work/cg1111/3.jpg";
import cg4 from "../../assets/work/cg1111/4.jpg";
import cg5 from "../../assets/work/cg1111/5.jpg";
import cg6 from "../../assets/work/cg1111/6.jpg";
import cg1_2 from "../../assets/work/cg2111/1.jpg";
import cg2_2 from "../../assets/work/cg2111/2.jpg";
import cg3_2 from "../../assets/work/cg2111/3.jpg";
import cg4_2 from "../../assets/work/cg2111/4.jpg";
import cg5_2 from "../../assets/work/cg2111/5.jpg";
import cg6_2 from "../../assets/work/cg2111/6.jpg";
import cs2113_1 from "../../assets/work/cs2113/1.png";
import cs2113_2 from "../../assets/work/cs2113/2.png";
import sc_1 from "../../assets/work/supercanvas/1.png";
import sc_2 from "../../assets/work/supercanvas/2.png";
import sc_3 from "../../assets/work/supercanvas/3.png";
import lul from "../../assets/work/lul.png";
import butterfly from "../../assets/butterfly.png";
import mr1 from "../../assets/mr1.jpg";
import mr2 from "../../assets/mr2.jpg";
import mrIcon from "../../assets/mr_icon.png";
import MS from "../../assets/work/MS.png";
import MS2 from "../../assets/work/MS2.png";
import col1 from "../../assets/gallery/0.jpg";
import col2 from "../../assets/gallery/1.jpg";
import col3 from "../../assets/gallery/2.jpg";
import col4 from "../../assets/gallery/3.jpg";
import col5 from "../../assets/gallery/4.jpg";
import col6 from "../../assets/gallery/5.jpg";
export const TechIcon = {
  
  FIREBASE:
    "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
  
  FIGMA:
    "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
  NODEJS:
    "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white",
  GOOGLECLOUDFUNCTIONS:
    "https://img.shields.io/badge/gCloud_Functions-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  JAVA: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
  FLUTTER:
    "https://img.shields.io/badge/flutter-%2302569B.svg?style=for-the-badge&logo=flutter&logoColor=white",
  
  PYTHON:
    "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
  C: "https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
  CPP: "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&ogoColor=white",
  ARDUINO:
    "https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white",
  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  JAVASCRIPT:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  
  REDUX:
    "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
  MATERIALUI:
    "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white",
  AUTOCAD:
    "https://img.shields.io/badge/AutoCAD-0696D7?style=for-the-badge&logo=autodesk&logoColor=white",
  MBOT: "https://img.shields.io/badge/Makeblock-FF7F00?style=for-the-badge&logo=makeblock&logoColor=white",
  GOOGLECLOUD:
    "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  
  TELEGRAM:
    "https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white",
  
  
  CHATGPT:
    "https://img.shields.io/badge/chatGPT-74aa9c?logo=openai&logoColor=white",
};

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Welcome To My Website - Quick Start Guide",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.WELCOME,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      message: "",
      Icon: outlook,
      isMinimized: false,
      zIndex: 0,
      program: App.OUTLOOK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "My Work",
      message: "",
      Icon: cmd,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    4,
    {
      id: 0,
      title: "My Photography Collection",
      message: "",
      Icon: gallery,
      isMinimized: false,
      zIndex: 0,
      program: App.MYGALLERY,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    5,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    6,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    7,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    8,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
]);

export const WorkAccordionTitles = [
  WorkType.HACKATHON,
  WorkType.PERSONAL,
  WorkType.SCHOOL,
];

export const GalleryAccordionTitles = ["Details"];

export const WorkData = [
  {
    id: 1,
    title: "Windows XP Themed Portfolio",
    date: "Dec 2024",
    gitURL: "https://github.com/parthbhanti22",
    techstack: [
      TechIcon.REDUX,
      TechIcon.CSS,
      TechIcon.HTML,
      TechIcon.JAVASCRIPT,
    ],
    gallery: [lul],
    overview: `This project began as my software journey first began on Windows XP. Back then, I was
    trying out many different things on my old XP computer such as creating my little CLI application
    on batch files and also developing my very first GUI apps on Visual Studio 2010 (i.e Text encrypters,
    My own Web browser, phishing program that can steal my friend's passwords :P, and I forgot what else...)
    .Unfortunately, I lost all of those files so it was somewhat nostalgic to recreate the environment
    that I used to have back then. Other than those, I also have fond memories of the MSN Messenger with 
    that irritating nudge function. Anyway, I figured out why not present all my works and my digital 
    identity somewhere familiar to me, so here we are, hope you'll enjoy this little project of mine!`,
  },
  
  
  
   

  
   
 
  

  {
    id: 9,
    title: "Non Technical Co-Lead and Student Coordinator at GDGC 2024-25",
    date: "Feb 2023",
    gitURL: "https://gdg.community.dev/gdg-on-campus-vellore-institute-of-technology-bhopal-india/",
    techstack: [
      TechIcon.NODEJS,
      TechIcon.GOOGLECLOUDFUNCTIONS,
      TechIcon.FIREBASE,
      TechIcon.FIGMA,
      TechIcon.CSS,
      TechIcon.JAVASCRIPT,
      TechIcon.HTML,
    ],
    gallery: [hfg_7, hfg_1, hfg_2, hfg_3, hfg_5, hfg_6],
    overview: `GDGC is a worldwide student community to bring like minded individual
    together in one single platform. At GDGC, we promote the skill development and well 
    being of each community member.`,
  },
  
  
  
 
] as WorkContent[];

export const WorkAccordionContent = [
  {
    id: 1,
    type: WorkType.PERSONAL,
    icon: butterfly,
    title: "Windows XP Personalized Website",
    content: WorkData[WorkData.findIndex((x) => x.id === 1)],
  },
  /*{
    id: 2,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "SDA Report Generator",
    content: WorkData[WorkData.findIndex((x) => x.id === 2)],
  },
  {
    id: 3,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Digital Goods Management System",
    content: WorkData[WorkData.findIndex((x) => x.id === 3)],
  },
  {
    id: 4,
    type: WorkType.SCHOOL,
    icon: file,
    title: "EE2026 Digital Systems Design",
    content: WorkData[WorkData.findIndex((x) => x.id === 4)],
  },
  {
    id: 5,
    type: WorkType.SCHOOL,
    icon: file,
    title: "CS2113 - Software Engineering & OOP",
    content: WorkData[WorkData.findIndex((x) => x.id === 5)],
  },
  {
    id: 6,
    type: WorkType.SCHOOL,
    icon: file,
    title: "CG2111A Engineering Principles II",
    content: WorkData[WorkData.findIndex((x) => x.id === 6)],
  },
  {
    id: 7,
    type: WorkType.SCHOOL,
    icon: file,
    title: "CG1111A Engineering Principles I",
    content: WorkData[WorkData.findIndex((x) => x.id === 7)],
  },
  {
    id: 8,
    type: WorkType.SCHOOL,
    icon: file,
    title: "EG1311 Design and Make",
    content: WorkData[WorkData.findIndex((x) => x.id === 8)],
  },*/
  {
    id: 9,
    type: WorkType.HACKATHON,
    icon: gdsc,
    title: "Google Developer Groups on Campus",
    content: WorkData[WorkData.findIndex((x) => x.id === 9)],
  },
  
  /*{
    id: 11,
    type: WorkType.SCHOOL,
    icon: mrIcon,
    title: "GDSC Mercy Relief CMS Portal",
    content: WorkData[WorkData.findIndex((x) => x.id === 11)],
  },
  {
    id: 12,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Super Canvas Chrome Extension",
    content: WorkData[WorkData.findIndex((x) => x.id === 12)],
  },*/
  
] as WorkFile[];

// For My Photography Collection
export const PhotoCollection = [
  {
    id: 0,
    title: "Rocky afternoon",
    location: "Dingboche-Lobuche, Nepal",
    desc: "Taken enroute to Everest Base Camp",
    date: "31 December 2022",
    img: col1,
  },
  {
    id: 1,
    title: "Himalayan Mountain",
    location: "Lobuche-GorakShep, Nepal",
    desc: "Icy morning",
    date: "1 January 2023",
    img: col2,
  },
  {
    id: 2,
    title: "Autumn Foliage",
    location: "Kyoto, Japan",
    desc: "Japanese Autumn Foliage in the Imperial Palace of Kyoto",
    date: "23 November 2023",
    img: col3,
  },
  {
    id: 3,
    title: "Japanese Symmetry",
    location: "Kiyomizu Temple, Kyoto",
    desc: "One of the most famous temples in Kyoto, Japan",
    date: "22 November 2023",
    img: col4,
  },
  {
    id: 4,
    title: "Australia Forest Trail",
    location: "Aqueduct Road, Melbourne, Australia",
    desc: "Bird eye view of the forest trail during winter",
    date: "June 2022",
    img: col5,
  },
  {
    id: 5,
    title: "Milky Wave",
    location: "Waiao Beach, Yilan, Taiwan",
    desc: "Surfing in the middle of a milky ocean",
    date: "17 November 2022",
    img: col6,
  },
] as GalleryImage[];
