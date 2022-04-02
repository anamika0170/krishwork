import { FaHome } from "react-icons/fa";
import {BsQuestionCircle} from 'react-icons/bs'
import {BsCalendarDay} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {FcMoneyTransfer} from 'react-icons/fc'
import {FiSettings} from 'react-icons/fi'

export const SidebarData=[
    {
        id:1,
        title:"Home",
        cName:"sidebar-item",
        icon:<FaHome/>,
        path:"/"
    },
    {
        id:2,
        title:"Overview",
        cName:"sidebar-item",
        icon:<BsQuestionCircle/>,
        path:"/overview"
    },
    {
        id:3,
        title:"calender",
        cName:"sidebar-item",
        icon:<BsCalendarDay/>,
        path:"/calender"
    },
    {
        id:4,
        title:"Patient List",
        cName:"sidebar-item",
        icon:<BiUser/>,
        path:"/patient"
    },
    {
        id:5,
        title:"Message",
        cName:"sidebar-item",
        icon:<BiMessageRoundedDots/>,
        path:"/message"
    },
    {
        id:6,
        title:"Payment Information",
        cName:"sidebar-item",
        icon:<FcMoneyTransfer/>,
        path:"/payment-info"
    },
    {
        id:7,
        title:"Setting",
        cName:"sidebar-item",
        icon:<FiSettings/>,
        path:"/setting"
    }
]