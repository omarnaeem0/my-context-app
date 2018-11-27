import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import * as Component from '../../components';
import { MyProvider } from '../../context';
// import { MySecondProvider } from '../../second-context';
import { Page } from '../Page';

beforeEach(() => {
  jest.resetModules();
});

const BB = {
  Components: {
    Text: Component.Text
  }
};

const value = {
  name: 'Second Context'
};

const mockContext = jest.fn();
jest.doMock('../../second-context/context', () => ({
  MySecondContext: {
    Consumer: ({ children }: { children: any }) => children(value)
  }
}));

describe('Page', () => {
  beforeEach(() => {
    mockContext.mockReset();
  });

  test(`Should find the Page component`, () => {
    // const PageComp: any = new Page(null);
    // PageComp.context = BB;
    // console.log(PageComp)
    const component = TestRenderer.create(
      <MyProvider value={BB}>
          <Page />
      </MyProvider>
    );
    // console.log(component.root);
    const tree = component.toTree();
    expect(tree).toMatchSnapshot();
  })
});
