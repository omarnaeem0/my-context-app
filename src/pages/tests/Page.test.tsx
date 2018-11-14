/* import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import * as Component from '../../components';
import { Page } from '../Page';

beforeEach(() => {
  jest.resetModules();
});

const BB = {
  Components: {
    Text: Component.Text
  }
};
const mockContext = jest.fn();
jest.mock('../../context/consumer', () => ({
  MyConsumer: ({ children }: { children: any }) => children(BB)
}));

describe('Page', () => {
  beforeEach(() => {
    mockContext.mockReset();
  });

  test(`Should find the Page component`, () => {
    const component = TestRenderer.create(
      <Page />
    );
    const tree = component.toTree();
    expect(tree).toMatchSnapshot();
  })
});
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import * as Component from '../../components';
import { Page } from '../Page';

beforeEach(() => {
  jest.resetModules();
});

const BB = {
  Components: {
    Text: Component.Text
  }
};
const mockContext = jest.fn();
jest.doMock('../../context/context', () => ({
  MyContext: {
    Consumer: ({ children }: { children: any }) => children(BB)
  }
}));

describe('Page', () => {
  beforeEach(() => {
    mockContext.mockReset();
  });

  test(`Should find the Page component`, () => {
    const PageComp: any = new Page(null);
    PageComp.context = BB;
    console.log(PageComp)
    const component = TestRenderer.create(
      <PageComp />
    );
    console.log(component.root);
    const tree = component.toTree();
    expect(tree).toMatchSnapshot();
  })
});
