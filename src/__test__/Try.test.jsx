import React from 'react';
import { shallow } from "enzyme";
import { Try } from "../components/Try";

describe('Test App Entry point', function () {
  it('should have a header tag with Hello world React!', function () {
    const wrapper = shallow(<Try/>);
    expect(wrapper.find("h1").text()).toEqual("Hello world React!");
  });
});