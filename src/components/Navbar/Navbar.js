import React, { useState } from "react";
import {
  Line,
  Menu,
  NavList,
  NavMenuList,
  StyledCTA,
  StyledNavbar,
  StyledNavLinks,
} from "../styles/Navbar.styled";
import { animateScroll as scroll } from "react-scroll";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Height
  const stickyNavFunction = () => {
    if (window.scrollY >= 510) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  window.addEventListener("scroll", stickyNavFunction);

  const toTop = () => {
    scroll.scrollToTop({ delay: 0, duration: 0 });
  };

  // mobile toggle
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavbar className={stickyNav ? "sticky" : ""}>
      <NavMenuList>
        <NavList>
          <StyledNavLinks
            to="home"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            Home
          </StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks
            to="projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            Projects
          </StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            About
          </StyledNavLinks>
        </NavList>
      </NavMenuList>
      <StyledCTA
        href="https://github.com/Edwardb11"
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <span>
          <svg id="github" xmlns="http://www.w3.org/2000/svg" width="44.231" height="22.14" viewBox="0 0 44.231 43.14">
  <path id="Path_10" data-name="Path 10" d="M22.116,0a22.118,22.118,0,0,0-6.992,43.1c1.105.2,1.511-.48,1.511-1.064,0-.527-.021-2.27-.03-4.118-6.153,1.338-7.451-2.609-7.451-2.609A5.855,5.855,0,0,0,6.7,32.075C4.692,30.7,6.85,30.73,6.85,30.73a4.649,4.649,0,0,1,3.39,2.279c1.972,3.381,5.174,2.4,6.436,1.839a4.71,4.71,0,0,1,1.4-2.957C13.168,31.331,8,29.435,8,20.961a8.559,8.559,0,0,1,2.279-5.936A7.947,7.947,0,0,1,10.5,9.172s1.857-.594,6.083,2.267a20.98,20.98,0,0,1,11.076,0c4.221-2.861,6.076-2.267,6.076-2.267a7.937,7.937,0,0,1,.217,5.853,8.542,8.542,0,0,1,2.276,5.936c0,8.494-5.174,10.365-10.1,10.912a5.287,5.287,0,0,1,1.5,4.1c0,2.959-.026,5.341-.026,6.069,0,.589.4,1.278,1.519,1.061a22.119,22.119,0,0,0-7-43.1" fill="#fff"/>
</svg>
GitHub          </span>
        </span>
      </StyledCTA>

      <Menu onClick={toggle}>
        <Line width="1.5rem" />
        <Line />
        <Line width="1.5rem" ml="0.5rem" />
      </Menu>

      <MobileMenu isOpen={isOpen} toggle={toggle}></MobileMenu>
    </StyledNavbar>
  );
};

export default Navbar;
