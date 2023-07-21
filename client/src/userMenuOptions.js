
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'; //your feed
import CottageIcon from '@mui/icons-material/Cottage';//your feed

import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';//learning cards
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';//learning cards

import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';// connect
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';//connect

import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';//share reviews
import ScreenShareIcon from '@mui/icons-material/ScreenShare';//share reviews

import HikingIcon from '@mui/icons-material/Hiking';//next steps

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';//job search
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';//job search

import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';// interview questions
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';// interview questions

import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';//favourite
import BookmarksIcon from '@mui/icons-material/Bookmarks';//favourite



export const userMenuOptions = [
  { name: "Your Feed", linkTo: "", iconFilled:CottageIcon, iconOutlined:CottageOutlinedIcon},
  { name: "Learning Cards", linkTo: "/learning-cards" , iconFilled:CottageIcon, iconOutlined:DashboardCustomizeOutlinedIcon,},
  { name: "Connect", linkTo: "/connect", iconFilled:CottageIcon, iconOutlined:ChatOutlinedIcon,},
  { name: "Share Reviews", linkTo: "/share-reviews" , iconFilled:CottageIcon, iconOutlined:ScreenShareOutlinedIcon,},
  { name: "Next Steps", linkTo: "/next-steps" , iconFilled:CottageIcon, iconOutlined:HikingIcon,},
  { name: "Job Search", linkTo: "/job-search" , iconFilled:CottageIcon, iconOutlined:WorkOutlineIcon,},
  { name: "Interview Questions", linkTo: "/interview-questions" , iconFilled:CottageIcon, iconOutlined:PsychologyAltIcon,},
  { name: "Your Favourites", linkTo: "/your-favourites" , iconFilled:CottageIcon, iconOutlined:BookmarksOutlinedIcon,},
];

