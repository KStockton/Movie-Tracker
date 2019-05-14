import React from "react";
import { Nav, mapStateToProps, mapDispatchToProps } from "./Nav";
import {removeUser} from '../../Actions/'
import { shallow } from "enzyme";

describe("Nav", () => {
  let wrapper;
  const mockProps = { user: { name: "max", id: 1 }, removeUser: jest.fn() };
  beforeEach(() => {
    wrapper = shallow(<Nav {...mockProps} />);
  });

  it("Nav component should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should return a props object ", () => {
    const mockState = { user: { name: "max", id: 1 }, removeUser: jest.fn() };
    const expected = {
      user: mockState.user,
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
  it('should call dispatch when using a function from MDTP', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = removeUser({})
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.removeUser({})
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
});
