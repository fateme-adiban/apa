import React, { useEffect } from "react"
import SubMenu from "./SubMenu"

function Menu(props) {
  return (
    <div className="menu">
      <div className="main-menu">
        <div className="scroll">
          <ul className="list-unstyled">
            <li className={props.activeDashboards}>
              <a href="#dashboard">
                <i className="iconsminds-shop-4"></i>
                <span>Dashboards</span>
              </a>
            </li>
            <li className={props.activePages}>
              <a href="#layouts">
                <i className="iconsminds-digital-drawing"></i> Pages
              </a>
            </li>
            <li className={props.activeApplications}>
              <a href="#applications">
                <i className="iconsminds-air-balloon-1"></i> Applications
              </a>
            </li>
            <li className={props.activeUI}>
              <a href="#ui">
                <i className="iconsminds-pantone"></i> UI
              </a>
            </li>
            <li className={props.activeMenu}>
              <a href="#menu">
                <i className="iconsminds-three-arrow-fork"></i> Menu
              </a>
            </li>
            <li className={props.activeBlankPage}>
              <a href="Blank.Page.html">
                <i className="iconsminds-bucket"></i> Blank Page
              </a>
            </li>
            <li className={props.activeDocs}>
              <a href="https://dore-jquery-docs.coloredstrategies.com" target="_blank">
                <i className="iconsminds-library"></i> Docs
              </a>
            </li>
          </ul>
        </div>
      </div>
      <SubMenu />
    </div>
  )
}

export default Menu
