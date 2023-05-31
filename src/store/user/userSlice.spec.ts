import userReducer, { UserState, fetchUsers } from "./userSlice";
import { AsyncState } from "../../utils/constant";
import { users } from "../../__mockData__/index";

describe("user reducer", () => {
  const initialState: UserState = {
    data: [],
    status: AsyncState.IDLE,
  };

  it("should handle initial state", () => {
    expect(userReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle loading state", () => {
    const nextState = userReducer(initialState, fetchUsers.pending);

    expect(nextState.status).toEqual(AsyncState.LOADING);
  });

  it("should handle success state", () => {
    const nextState = userReducer(
      initialState,
      fetchUsers.fulfilled(users, '')
    );

    expect(nextState.status).toEqual(AsyncState.SUCCEEDED);
    expect(nextState.data).toEqual(users);
  });

  it("should handle failed state", () => {
    const nextState = userReducer(initialState, fetchUsers.rejected);

    expect(nextState.status).toEqual(AsyncState.FAILED);
  });
});
