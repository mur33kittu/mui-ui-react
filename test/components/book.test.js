import React from 'react';
import renderer from 'react-test-renderer';
import Book from '../../src/components/book';
import configureStore from 'redux-mock-store';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure ({adapter: new Adapter ()});

describe ('Book component initialized with', () => {
  const initialState = {};
  const mockStore = configureStore ();
  let store, container;

  beforeEach (() => {
    store = mockStore (initialState);
    container = shallow (<Book store={store} />);
  });
  

  it ('+++ render the connected(SMART) component', () => {
    expect (container.length).toEqual (1);
  });
});
