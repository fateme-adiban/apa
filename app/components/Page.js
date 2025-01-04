import React, { useEffect } from "react"
import Container from "./Container"

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | Dore`
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container noFooter={props.noFooter} menuSubHidden={props.menuSubHidden}>
      {props.children}
    </Container>
  )
}

export default Page
