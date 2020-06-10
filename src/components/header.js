import React from "react"
import { Link } from "gatsby"

import { useGlobalStateContext } from "../context/globalContext"

// Styled components
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"

const Header = () => {
  const { currentTheme } = useGlobalStateContext()
  return (
    <HeaderNav>
      <Container>
        {console.log(currentTheme)}
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">FURR</Link>
            <span></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
