import React from "react";
import { shallow, mount } from "enzyme";
import { SignInUser } from "../SignInUser";

const mockhandletoggleform = jest.fn()
const mockhandleLogin =jest.fn()
const mockChange = "cool"

describe("NewUser", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<SignInUser handleToggleForm={mockhandletoggleform} handleLogin={mockhandleLogin} handleChange={mockChange}/>);
    });
  
     it("NewUser component should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    })
    it('should call handleToggleform when button is clicked', () => {
      wrapper.find(".user-form-link").simulate('click', () => {
        expect(mockhandletoggleform).toHaveBeenCalled()
      })
    })

    it('should call handlelogin when button is clicked', () => {
      wrapper.find(".user-form-button").simulate('click', () => {
        expect(mockhandleLogin).toHaveBeenCalled()
      })
    })

    it('should call handlelogin when button is clicked', () => {
      wrapper.find("form").simulate('click', () => {
        expect(mockhandleLogin).toHaveBeenCalled()
      })
    })

    it.skip('responds to name change', () => {
      const event = {target: {name: 'password', value: 'cool'}}; 
      wrapper.find('#emails').simulate('change', event);
      expect(mockChange).toEqual('cool');
    });  
})