import React from 'react';
import renderer from 'react-test-renderer';
import languages from 'programming-languages-logos/src/languages.json';

import Pll from '..';

it('renders the python language correctly', () => {
	const language = renderer.create(<Pll language="python"/>).toJSON();
	expect(language).toMatchSnapshot();
});

it('renders a fallback language correctly', () => {
	const language = renderer
		.create(
			<Pll language="xxx" height="10" fallback={<span>Does not exist.</span>}/>
		)
		.toJSON();
	expect(language).toMatchSnapshot();
});

it('renders nothing if code does not exist', () => {
	const language = renderer.create(<Pll language="xxx" height="30"/>).toJSON();
	expect(language).toMatchSnapshot();
});

Object.keys(languages).map(lang => {
	it('exports the ' + lang + ' logo', () => {
		const language = renderer.create(<Pll language={lang.replace('-', '_')}/>).toJSON();
		expect(language).toMatchSnapshot();
	});
});
