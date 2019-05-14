import React from "react";
import NewUser from '../NewUser'
import { shallow } from "enzyme";
describe("NewUser", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<NewUser />);
    });
  
     it("NewUser component should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    })
})