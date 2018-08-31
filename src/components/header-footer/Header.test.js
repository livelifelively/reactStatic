import React from 'react';
import {shallow} from 'enzyme';

import {Header} from './';
import {findByDataTestAttribute} from "../../../test/testUtils";

const setUp = (props) => {
  return shallow(<Header {...props} />);
};

describe('Header', () => {
  test('renders successfully', () => {
    const wrapper = setUp();
    const headerComponent = findByDataTestAttribute(wrapper, 'component-header');
  });
});
