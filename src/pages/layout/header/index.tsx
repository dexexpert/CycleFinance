import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Routes from '../../../components/Routes/index';
import SocialIcons from '../../../components/Icons';
import { socialLink } from "../../../data/SocialLink";

declare global {
  interface Window {
    ethereum: any;
  }
}

const NavItem = styled.li`
  font-weight: 500;
  color: #7b7c8b;
  cursor: pointer;
`;

const NavMenu = styled.ul`
  @media (max-width: 910px) {
    display: none;
  }
`;
const Navigation = styled.div`
  position: ${(props:any) => (props.hamburgerStatus ? "fixed" : "absolute")};
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 100;
  justify-content: space-between;
  padding-left: 160px;
  padding-right: 120px;
  @media (max-width: 1084px) {
    padding-left: 100px;
    padding-right: 40px;
  }
  @media (max-width: 940px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 475px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const Sidebar = styled.div`
  position: fixed;
  background: #000000;
  top: 0;
  right: 0;
  padding: 100px 50px;
  color: #ffffff;
  height: 100%;
  transform-origin: right center;
  transform: scaleX(0);
  transition: all 0.5s;
  font-size: 32px;
  z-index: 99;
  width: 100%;
`;

const Header = () => {

  const [hamburgerStatus, setHamburgerShow] = useState(false);

  const sidebarRef = React.useRef<HTMLDivElement>(null);

  const location = useLocation();

  console.log(location.pathname);

  const toggleVisible = () => {
    if (hamburgerStatus) {
      setHamburgerShow(false);
      if (null !== sidebarRef.current) {
        sidebarRef.current.style.transform = "scaleX(0)";
      }
      
    } else {
      setHamburgerShow(true);
      if (null !== sidebarRef.current) {
        sidebarRef.current.style.transform = "scaleX(1)";
      }
    }
  };

  return (

    <div className="header border-b border-b-xs py-4 px-6 fixed left-0 top-0 z-50 w-full font-sans items-center flex flex-wrap justify-between">
      <Navigation className="py-11 flex flex-col justify-between" hamburgerStatus={hamburgerStatus}>
        <div className="flex gap-14 items-center">
          <NavMenu className="flex flex-row ">
            {
            Routes.map((route, index) => 
              <NavItem key={index} >
                <Link to={route.path===undefined?'/':route.path} className={`${location.pathname.includes(route.path||'')?'underline text-white ':''}py-2 px-4 text-2xl hover:underline hover:text-white`}>
                  {route.title}
                </Link>
              </NavItem>
            )
          }
          </NavMenu>
        </div>
        <NavMenu>
          <SocialIcons discordStatus socialLink={socialLink} />
        </NavMenu>
        <div
          className={"hamburger " + (hamburgerStatus ? "active" : "")}
          onClick={toggleVisible}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </Navigation>
      <div>
        <img src={process.env.PUBLIC_URL + '/img/logo.png'} className="header-logo" alt="Logo" />
      </div>
      <Sidebar ref={sidebarRef} onClick={() => toggleVisible()}>
        <div className="flex flex-col items-center">
          {
            Routes.map((route, index) => (
              <Link key={index} to={route.path===undefined?'/':route.path} className="py-2 px-4">
                {route.title}
              </Link>
            ))
          }
        </div>
      {/* </div> */}
      </Sidebar>
      <div className=" flex">

      </div>
    </div>
  );
};

export default Header;

