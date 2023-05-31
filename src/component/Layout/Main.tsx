import React, { CSSProperties } from "react"
import { Layout } from "antd"

import Navigation from "./../Common/Navigation"

type Props = {
  children: React.ReactNode
}

const contentStyle: CSSProperties = {
  padding: "80px 75px",
  minHeight: "calc(100vh - 84px)",
}

const Main = (props: Props) => {
  const { children } = props
  const { Content } = Layout

  return (
    <div>
      <Navigation />
      <Content style={contentStyle}>{children}</Content>
    </div>
  )
}

export default Main
