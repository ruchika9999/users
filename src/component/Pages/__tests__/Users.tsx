/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import Users from "../Users";
import axios from "axios";
import { users, labelData, testDataId } from "../../../__mockData__";
import userEvent from "@testing-library/user-event";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Success", () => {
  it("should render the header and card details", async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: users,
      })
    );

    await act(async () => {
      render(
        <Provider store={store}>
          <Users />
        </Provider>
      );
    });

    const heading = screen.getByText(labelData.appName);
    const userName = screen.getByText(labelData.userName);
    const email = screen.getByText(labelData.email);
    const phone = screen.getByText(labelData.phone);
    const address = screen.getByText(labelData.address);
    expect(heading).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(address).toBeInTheDocument();
  });
});

describe("Failed", () => {
  it("should render the header and card details", async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.reject({
        data: null,
      })
    );

    await act(async () => {
      render(
        <Provider store={store}>
          <Users />
        </Provider>
      );
    });

    const heading = screen.getByText(labelData.appName);
    const networkError = screen.getByText(labelData.networkError);
    expect(heading).toBeInTheDocument();
    expect(networkError).toBeInTheDocument();
  });
});

describe("Delete", () => {
  it("should delete the user", async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: users,
      })
    );

    await act(async () => {
      render(
        <Provider store={store}>
          <Users />
        </Provider>
      );
    });

    const deleteButton = screen.getByTestId(testDataId.deleteButton);
    act(() => {
      userEvent.click(deleteButton);
    });

    const mockTitle = screen.getByText(labelData.successMessage);
    expect(mockTitle).toBeInTheDocument();
  });
});
