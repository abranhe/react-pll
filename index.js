import React from 'react';
import PropTypes from 'prop-types';
import languages from './languages';

export default function Pll(props) {
	const {language, fallback, ...imgProps} = props;

	const lang = languages[language.replace('-', '_')];
	return lang ? <img {...imgProps} src={lang}/> : fallback;
}

Pll.propTypes = {
	language: PropTypes.string,
	fallback: PropTypes.node
};

Pll.defaultProps = {
	language: 'cpp',
	fallback: null
};
