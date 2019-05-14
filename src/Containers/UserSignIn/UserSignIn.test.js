import React from "react";
import { UserSignIn } from "./UserSignIn";
import { shallow } from "enzyme";

describe("UserSignin", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UserSignIn />);
  });

  it("UserSignIn component should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
