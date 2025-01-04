import React, { useEffect } from "react"

function Container(props) {
  function bodyClass() {
    if (props.noFooter) {
      document.body.classList.add("no-footer")
    } else if (props.menuSubHidden) {
      document.body.classList.add("menu-sub-hidden")
    }
  }
  bodyClass()
  return <>{props.children}</>
}

export default Container
