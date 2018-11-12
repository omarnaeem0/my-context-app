import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { Text } from '../../index';

test('Should find the Text component', () => {
	const component = TestRenderer.create(
		<Text />
	);
	const tree = component.toTree();
	expect(tree).toMatchSnapshot();
});

test('Should find the Text component', () => {
	const component = TestRenderer.create(
		<Text>Hello</Text>
	);
	const tree: any = component.toJSON();
	expect(tree.children).toEqual(['Hello']);
});
