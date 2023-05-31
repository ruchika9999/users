import { message } from "antd"

const useAlert = () => {
  const [messageApi, contextHolder] = message.useMessage()

  const success = (message: string) => {
    messageApi.open({
      type: "success",
      content: message,
    })
  }

  // more alert types

  return { success, contextHolder }
}

export default useAlert
