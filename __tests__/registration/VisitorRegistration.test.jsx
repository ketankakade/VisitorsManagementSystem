import React from 'react';
import Enzyme , {shallow,mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import VisitorRegistration from '../../src/app/components/js/Registration/VisitorRegistration';

Enzyme.configure({adapter:new Adapter()});

describe("registration component", () => {
    test("renders", () =>{
        const wrapper = shallow(<VisitorRegistration />);

        expect (wrapper.exists()).toBe(true);
    });
});