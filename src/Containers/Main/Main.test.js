import React from "react";
import { Main, mapStateToProps } from "./Main";
import { shallow } from "enzyme";

describe("Main", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  it("Main component should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should return a props object ", () => {
    const mockState = { user: { name: "max", id: 1 }, removeUser: jest.fn() };
    const expected = {
      user: mockState.user
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
