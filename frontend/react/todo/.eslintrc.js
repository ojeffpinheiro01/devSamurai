module.exports = {
    env: {
      node: true,
      commonjs: true,
      browser: true,
      es6: true,
      jest: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'testing-library', 'prettier'],
    rules: {
      'prettier/prettier': 'warn',
      'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          packageDir: './',
          devDependencies: true,
        },
      ],
    },
  }
  