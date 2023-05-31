import React, { CSSProperties } from "react";

type Props = {
  children: React.ReactNode;
};

const contentStyle: CSSProperties = {
  minHeight: "calc(100vh - 164px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const MessageContainer = (props: Props) => {
  const { children } = props;
  return <div style={contentStyle}>{children}</div>;
};

export default MessageContainer;
