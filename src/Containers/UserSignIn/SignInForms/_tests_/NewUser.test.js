import React from "react";
import NewUser from '../NewUser'
import { shallow } from "enzyme";

const mockHandleToggle = jest.fn()
const mockHandleLogin = jest.fn()

describe("NewUser", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<NewUser handleToggleForm={mockHandleToggle} handleLogin={mockHandleLogin}/>);
    });
  
     it("NewUser component should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    })

    it('should call handleToggleform when button is clicked', () => {
      wrapper.find(".sign-in-button").simulate('click', () => {
        expect(mockHandleToggle).toHaveBeenCalled()
      })
    })

    it('should call handleLogin when button is clicked', () => {
      wrapper.find("form").simulate('submit', () => {
        expect(mockHandleLogin).toHaveBeenCalled()
      })
    })

})