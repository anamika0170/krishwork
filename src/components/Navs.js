import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/style/Navs.css";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { SidebarData } from "./SidebarData";
const Navs = () => {
  const [sidebar,setSidebar]=useState(false)

  const showSidebar=()=>{
    setSidebar(!sidebar)
  }
  return (
    <div>
      <div className="navbar">
        <Link to="" className="nav-menu-icon" onClick={showSidebar}>
          <FaBars />
        </Link>
      </div>

      <div className={sidebar?"sidebar-container active":"sidebar-container"}>
        <ul className="sidebar-Items">
          <li className="sidebar-toggle">
            <Link to="/" className="nav-menu-icon" onClick={showSidebar}>
              <FaWindowClose />
            </Link>
          </li>
          {SidebarData.map((sidebarItem)=>{
            return(
              <li key={sidebarItem.id} className={sidebarItem.cName}>
              <Link to={sidebarItem.path}>
              {sidebarItem.icon}
              <span>{sidebarItem.title}</span>
            </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navs;
