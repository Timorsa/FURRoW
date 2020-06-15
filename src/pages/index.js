import React from "react"
import Layout from "../components/layout"

// Components
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from "../components/homePage/HomeContent"
import HomeFeature from "../components/homePage/HomeFeature"

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const IndexPage = props => {
  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
  // no way to pass func to children issue in Gatsby V2..
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeature />
    </Layout>
  )
}

export default IndexPage
