module.exports = {
	verbose: false,
	testMatch: ['**/?(*.)spec.js?(x)'],
	setupFiles: ['raf/polyfill'],
	snapshotSerializers: ['jest-serializer-html-string'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__helpers__/mock-file.js',
		'\\.(css|less)$': '<rootDir>/__helpers__/mock-style.js',
	},
};
