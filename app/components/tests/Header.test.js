import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

describe('<Header />', () => {
  it('should render', () => {
    const tree = renderer
      .create(
        <Header
          currentBalance="-124.77"
          sortOrder="desc"
          toggleSort={() => {}}
          displayButton
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
