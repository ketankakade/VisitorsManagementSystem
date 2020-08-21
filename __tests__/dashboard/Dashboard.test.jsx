import React from 'react';
import Enzyme , {shallow,mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Dashboard from '../../src/app/components/js/dashboard/Dashboard';

Enzyme.configure({adapter:new Adapter()});

describe("dashboard component", () => {
    test("renders", () =>{
        const wrapper = shallow(<Dashboard />);

        expect (wrapper.exists()).toBe(true);
    });
});