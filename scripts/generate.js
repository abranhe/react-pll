import fs from 'fs';
import path from 'path';
import languages from 'programming-languages-logos/src/languages.json';

const imports = Object.keys(languages).map(l => {
	const language = l.replace('-', '_');
	return `import ${language} from 'programming-languages-logos/src/${l}/${l}.svg'`;
});

const exports = Object.keys(languages).map(l => {
	const language = l.replace('-', '_');
	return `${language}`;
});

const target = path.resolve(__dirname, '../languages.js');

fs.writeFileSync(
	target,
	imports.join('\n') + `\nexport default {${exports.join(', ')}}`
);
