# Webpack 4 Boilerplate
 
 Webpack 4 boilerplate using Babel, ESLint and SASS with optimized production build.

## Installation

```
$ git clone https://github.com/seyithantopal/webpack-boilerplate.git
$ cd webpack-boilerplate
$ npm install
```

## Usage

#### Development

You can run the app by running
```bash
$ npm start
```

##### Assets Source

* _SASS_ files are located under `src/scss`
* _JavaScript_ files with support of _ES6+_ files are located under `src/js`
* _Image_ files are located under `src/images`
* _Font_ files are located under `src/fonts`

You can view the development server by default at `localhost:3000`.

#### Production

You can build assets and optimize them for production by running

```bash
$ npm run build
```

##### Assets Source

* _CSS_ files are located under `build/css`
* _JavaScript_ files with support of _ES6+_ files are located under `build/js`
* _Images_ are located under `build/images`
* _Fonts_ are located under `build/fonts`
* _HTML_ files are located under `build`

## Configuration

You can change the port by changing the `port` in the `config/webpack.common.js` file

```js
devServer: {
  port: 3000,
},
```

## Run Code Style Linters

* **JS**

```sh
$ npm run lint-js
```

## Features

- [Webpack](https://webpack.js.org/) conveniently bundles your code for you.
- [Babel](https://babeljs.io/) enables you to use ES6/7 features.
- [SASS](https://sass-lang.com/) enables you to use things like variables, nested rules and keep your styles clean and organized.
- [ESLint](https://eslint.org/) helps you maintain a high level of code quality.

## License

This project is open source and available under the [MIT License](LICENSE).
