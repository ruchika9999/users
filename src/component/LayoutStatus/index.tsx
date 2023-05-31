import { Button, Typography } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

import { AsyncState } from "./../../utils/constant"
import MessageContainer from "./../Common/MessageContainer"

const { Text } = Typography

interface Props {
  status: AsyncState
  length: number
  reTry?: () => void
}

const LayoutStatus = (props: Props) => {
  const { status, length , reTry } = props

  if (status === AsyncState.LOADING && length === 0) {
    return (
      <MessageContainer>
        <LoadingOutlined style={{ fontSize: 24 }} spin />
      </MessageContainer>
    )
  }

  if (status === AsyncState.FAILED) {
    return (
      <MessageContainer>
        <Text>Network Error</Text>
        <Button type="link" onClick={reTry}>
          Reload
        </Button>
      </MessageContainer>
    )
  }

  if (status === AsyncState.SUCCEEDED && length === 0) {
    return (
      <MessageContainer>
        <Text>No Record</Text>
      </MessageContainer>
    )
  }

  return <></>
}

export default LayoutStatus
