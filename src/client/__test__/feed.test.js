// MyComponent.test.js
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, configure } from 'enzyme';
import Feed from '../components/feed';

Enzyme.configure({ adapter: new Adapter() });

const mockUpData = {
    avatar_url: '',
    login: ''
};

describe("Feed", () => {
    it("should render Feed", () => {
        const wrapper = shallow(<Feed card={mockUpData} />);
        console.log(wrapper);
    });
});