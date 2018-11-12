import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { Text } from '../../components';
import { Page } from '../Page';

beforeEach(() => {
	jest.resetModules();
});

// const getTextWithContext = () => {

// 	// jest.mock('../../../context/index', () => {
// 	// 	// return {
// 	// 	// 	MyConsumer: (props: any) => props.children(BB),
// 	// 	// 	MyContext: require('../../../context/index').MyContext,
// 	// 	// 	MyProvider: require('../../../context/index').MyProvider,
// 	// 	// };
// 	// 	return {
// 	// 		Context: {
// 	// 			Consumer: (props: any) => props.children(BB),
// 	// 			Provider: require('../../../context/index').MyProvider,
// 	// 		}
// 	// 	};
// 	// });

// 	jest.doMock('./../../../context/index', () => {
// 		return {
// 			MyConsumer: (props: any) => props.children(BB),
// 			MyContext: require('../../../context/index').MyContext,
// 			MyProvider: require('../../../context/index').MyProvider,
// 		};
// 		// return {
// 		// 	'Context.Consumer': (props: any) => props.children(BB),
// 		// };
// 	});

// 	// you need to re-require after calling jest.doMock.
// 	// return the updated LanguageSelector module that now includes the mocked context
// 	return UsingText;
// };

test('Should find the UsingText component', () => {
	const BB = {
		Components: {
			Text
		}
	};
	jest.doMock('./../../context/index', () => {
		return {
			Context: {
				Consumer: (props: any) => props.children({ BB, ...props }),
			}
			// MyContext: require('../../../context/index').MyContext,
			// MyProvider: require('../../../context/index').MyProvider,
		};
		// return {
		// 	'Context.Consumer': (props: any) => props.children(BB),
		// };
	});

	const component = TestRenderer.create(
		<Page />
	);
	const tree = component.toTree();
	// console.log('tree ==================== ', tree);
	expect(tree).toMatchSnapshot();
});













// // import { BlueBaseConsumer/* , BlueBaseProvider  */ } from '../../../Context';
// import { ActivityIndicator } from 'react-native';
// import { ComponentState } from '../../ComponentState';
// import { LoadingState } from '../LoadingState';
// import React from 'react';
// // import { mount } from 'enzyme';
// import renderer from 'react-test-renderer';
// // import { BlueBase } from '../../../BlueBase';

// // ensure you're resetting modules before each test
// beforeEach(() => {
// 	jest.resetModules();
// });

// // Takes the context data we want to test, or uses defaults
// const getLoadingStateWithContext = () => {
// 	const BB = {
// 		Components: {
// 			ActivityIndicator,
// 			ComponentState,
// 		}
// 	};
// 	jest.mock('../../../Context', () => {
// 		return {
// 			Context: { Consumer: (props: any) => props.children({ BB, ...props }) }
// 		};
// 	});

// 	// you need to re-require after calling jest.doMock.
// 	// return the updated LanguageSelector module that now includes the mocked context
// 	return LoadingState;
// };

// // describe('<LoadingState />', () => {
// // 	it('should show an activity indicator', () => {
// // 		// This will use the default context param since we pass nothing
// // 		const LoadingStateComp = getLoadingStateWithContext();
// // 		const component = renderer.create(
// // 			<LoadingStateComp />
// // 		);
// // 		const tree = component.toTree();
// // 		console.log('tree ==================== ', tree);
// // 		expect(tree).toMatchSnapshot();
// // 	});

// // });
// test('Should find the Text component', () => {
// 	const LoadingStateComp = getLoadingStateWithContext();
// 	const component = renderer.create(
// 		<LoadingStateComp />
// 	);
// 	const tree = component.toTree();
// 	console.log('tree ==================== ', tree);
// 	expect(tree).toMatchSnapshot();
// 	// const component = mount(<LoadingStateComp />);
// 	// component.find('BB.Components.ActivityIndicator');
// 	//  expect(wrapper.find('ThemeConsumer').dive().find('Text').length).toEqual(1)
// });


// // test('Link changes the class when hovered', () => {
// // 	const BB = {
// // 		Components: {
// // 			ActivityIndicator,
// // 			ComponentState,
// // 		}
// // 	};
// // 	jest.doMock('../../../Context', () => {
// // 		return {
// // 			BlueBaseContext: {
// // 				Consumer: (props: any) => props.children(BB)
// // 			}
// // 		};
// // 	});
// 	// const component = renderer.create(
// 	// 	<LoadingState />
// 	// );
// 	// const tree = component.toTree();
// 	// console.log('tree ==================== ', tree);
// 	// expect(tree).toMatchSnapshot();
// // });