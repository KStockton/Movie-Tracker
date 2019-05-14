import React from "react";
import { shallow } from "enzyme";
import { SignInUser } from "../SignInUser";
describe("NewUser", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<SignInUser />);
    });
  
     it("NewUser component should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    })
})