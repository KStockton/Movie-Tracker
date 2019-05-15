import React from "react";
import { UserSignIn, mapStateToProps, mapDispatchToProps } from "./UserSignIn";
import { shallow } from "enzyme";
import { addUser } from "../../Actions/";

describe("UserSignin", () => {
  let wrapper;
  const mockUser = { name: 'max silver', email: "maxsilver@gmail.com", password: "1", newUserBool: true}
  beforeEach(() => {
    wrapper = shallow(<UserSignIn {...mockUser}/>);
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
    it.skip('should invoke userCreation when newUserBool is true', () => {
      wrapper.instance().handleLogin({ preventDefault: () => {} });
      wrapper.instance().userSignIn = jest.fn();
      expect(wrapper.instance().userSignIn).toHaveBeenCalled()
      // wrapper.find("form").simulate("submit", { preventDefault: () => {} });
      // expect(mockDetermineQuestion).toHaveBeenCalled();
      // expect(mockIncrementRound).toHaveBeenCalled();
    })
  });
});
