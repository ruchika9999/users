import { Layout, Typography } from "antd"

const { Title } = Typography

const Navigation = () => {
  const { Header } = Layout

  return (
    <Header className="app-header">
      <div className="app-logo">
        <Title level={3} className="logo-text">
          User Management
        </Title>
      </div>
    </Header>
  )
}

export default Navigation
