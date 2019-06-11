import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import Nav from "./Nav";
import navLinksData from "../NavData/navData";


  const NavContainer = styled.div `
  border: 1px solid red;
  display: flex;
  justify-content: center;
  background: #222;
`
  const NavEnclose = styled.nav `
      border: 1px solid maroon;
      display: flex;
      font-size: 1rem;
  `

  const UL = styled.ul `
      border: 1px solid green;
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
      justify-content: space-between;
      height: 44px;
      width: auto;

      li  {
        box-sizing: border-box;
        height: 44px;
        position: relative;
        display: inline-block;
        vertical-align: top;
      }

      a {
        font-size: 14px;
        line-height: 3.14286;
        font-weight: 400;
        letter-spacing: -.01em;
        font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
        color: #fff;
        position: relative;
        z-index: 1;
        display: inline-block;
        padding: 0 10px;
        height: 44px;
        opacity: 1;
        background: no-repeat;
        text-decoration: none;
        white-space: nowrap;
        -webkit-transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        -webkit-tap-highlight-color: transparent;
        outline-offset: -7px;
      }
  `

const NavWrapper = () => {
  return(
          <NavContainer>
            <NavEnclose>
                <UL>
                  {
                    navLinksData.map(navLink => {
                      return <li  key = {navLink.id}>
                          <Link to="/">{navLink.title}</Link>
                      </li>
                    })
                  }
                </UL>
              </NavEnclose>
          </NavContainer>)
}

export default NavWrapper;
