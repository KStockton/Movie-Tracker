import React from "react";
import { UserSignIn, mapStateToProps, mapDispatchToProps } from "./UserSignIn";
import { shallow } from "enzyme";
import { postUsers } from '../../Utility/Fetches/PostUsers';
import { addUser } from "../../Actions/";
jest.mock('../../Utility/Fetches/PostUsers')
describe("UserSignin", () => {
  let wrapper;
  const mockedEvent = { target: { value: "mockName", name: "name" } };
  const mockNewUser = {
    name: "max silver",
    email: "maxsilver@gmail.com",
    password: "1",
    newUserBool: true
  };
  const mockExistingUser = {
    name: "max silver",
    email: "maxsilver@gmail.com",
    password: "1",
    newUserBool: false
  };

  beforeEach(() => {
    wrapper = shallow(<UserSignIn />);
    wrapper.setState({ ...mockNewUser });
  });

  it("UserSignIn component should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should return a props object ", () => {
    const mockState = { user: { name: "max", id: 1 }, addUser: jest.fn() };
    const expected = {
      user: mockState.user
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
  it("should call dispatch when using a function from MDTP", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addUser({});
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addUser({});
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  describe("handleLogin", () => {
    it("should invoke userCreation when newUserBool is true", () => {
      wrapper.instance().userCreation = jest.fn();
      wrapper.instance().handleLogin({ preventDefault: () => {} });
      expect(wrapper.instance().userCreation).toHaveBeenCalledWith(
        "maxsilver@gmail.com",
        "max silver",
        "1"
      );
    });

    it("should invoke userCreation when newUserBool is false", () => {
      wrapper.setState({ ...mockExistingUser });
      wrapper.instance().userSignIn = jest.fn();
      wrapper.instance().handleLogin({ preventDefault: () => {} });
      expect(wrapper.instance().userSignIn).toHaveBeenCalled();
    });
  });
  describe("handleChange", () => {
    it("should handleChange", () => {
      wrapper = shallow(<UserSignIn />);
      wrapper.setState({ ...mockNewUser });
      expect(wrapper.state("name")).toEqual("max silver");

      wrapper.instance().handleChange(mockedEvent);
      expect(wrapper.state("name")).toEqual("mockName");
    });
  });
  describe("handleToggleForm", () => {
    it("should toggle newUserBool", () => {
      expect(wrapper.state("newUserBool")).toEqual(true);
      wrapper.instance().handleToggleForm({ preventDefault: () => {} });
      expect(wrapper.state("newUserBool")).toEqual(false);
    });
  });
  describe("userCreation", () => {
    it("", () => {
      wrapper.instance().userCreation();
      expect(postUsers).toHaveBeenCalled()
    });
  });
});
