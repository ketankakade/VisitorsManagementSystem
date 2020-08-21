import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../src/app/components/js/dashboard/Dashboard';

describe('dashboard page', function () {
  let component;
  component = mount(<MemoryRouter><Dashboard /></MemoryRouter>);
  component.update();
  test('Page should have a container div', function () {
    expect(component.find('.parent').exists()).toEqual(true);
  });
});