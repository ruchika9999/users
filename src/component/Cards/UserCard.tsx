import { CSSProperties } from "react";
import { Avatar, Card, Col, Typography, Divider, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { User } from "../../utils/types";
import ErrorBoundary from "./../Error";
import { returnDashForNullOrUndefinedOrNaN } from "./../../utils/helper";

const { Meta } = Card;
const { Text, Link } = Typography;

const contentStyle: CSSProperties = {
  width: "100%",
  marginTop: 16,
};

const deleteButtonStyle: CSSProperties = {
  position: "absolute",
  top: 15,
  right: 15,
};
interface Props {
  user: User;
  deleteUser: (id: number) => void;
}

const UserCard = (props: Props) => {
  const { user, deleteUser } = props;

  const { address } = user;

  return (
    <Col>
      <Card style={contentStyle} loading={false}>
        <Meta
          avatar={
            // this Avatar component having issue with Test
            <ErrorBoundary>
              <Avatar
                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${user?.id}`}
              />
            </ErrorBoundary>
          }
          title={user?.name}
          description={user?.email.toLowerCase()}
        />
        <Divider />
        <Button
          style={deleteButtonStyle}
          type="text"
          onClick={() => deleteUser(user?.id)}
          data-testid={`delete-button-${user?.id}`}
        >
          <DeleteOutlined />
        </Button>
        <div className="card-section">
          <Text className="font-semibold"> Phone : </Text>
          <Text type="secondary">{user.phone}</Text>
        </div>
        <div className="card-section">
          <Text className="font-semibold"> Website : </Text>
          <Link href="user.website" target="_blank">
            {returnDashForNullOrUndefinedOrNaN(user.website)}
          </Link>
        </div>
        <div className="card-section">
          <Text className="font-semibold"> Address : </Text>
          <Text type="secondary">
            {address.street} {address.city} {address.suite} {address.zipcode}
          </Text>
        </div>
      </Card>
    </Col>
  );
};

export default UserCard;
