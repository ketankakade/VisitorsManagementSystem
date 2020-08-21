import React from 'react';
import Enzyme , {shallow,mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import login from '../../src/app/components/js/Login/login';

Enzyme.configure({adapter:new Adapter()});

describe("login component", () => {
    test("renders", () =>{
        const wrapper = shallow(<login />);

        expect (wrapper.exists()).toBe(true);
    });
});