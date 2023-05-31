import { useEffect } from "react";

import Main from "../../Layout/Main";
import LayoutStatus from "../../LayoutStatus";
import UserCard from "../../Cards/UserCard";
import {
  fetchUsers,
  userStore,
  deleteUser,
} from "../../../store/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import useAlert from "../../hooks/useAlert";

const User = () => {
  const { success, contextHolder } = useAlert();

  const dispatch = useAppDispatch();
  const users = useAppSelector(userStore);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleDeleteUser = (id: number) => {
    dispatch(deleteUser(id));
    success("User Deleted Successfully");
  };

  const handleReTry = () => {
    dispatch(fetchUsers());
  };

  return (
    <Main>
      <LayoutStatus
        status={users?.status}
        length={users?.data.length}
        reTry={handleReTry}
      />
      <div className="grid-container">
        {users.data.map((user) => (
          <UserCard key={user.id} user={user} deleteUser={handleDeleteUser} />
        ))}
      </div>
      {contextHolder}
    </Main>
  );
};

export default User;
