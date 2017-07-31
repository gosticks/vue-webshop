# [Vue Webshop](https://github.com/gosticks/vue-webshop) [![version][version-badge]][CHANGELOG] [![license][license-badge]][LICENSE]

> Simple Vue Webshop

This template is based on the great setup [cristijora](https://github.com/cristijora) did for his dashboard project (which you can see here [vue-paper-dashboard](https://github.com/cristijora/vue-paper-dashboard))


<!-- ## Documentation -->

## PROJECT IN DEVELOPMENT! THIS PROJECT IS NOT YET FUNCTIONAL!

## Build Setup

### install dependencies
`npm install`
### serve with hot reload at localhost:8080
`npm run dev`
### build for production with minification
`npm run build`
### run unit tests
`npm run unit`
### run and watch unit tests
`npm run unit:watch`

## Contribution guide
* `npm install` or `yarn install`
* If you use 3rd party libraries/components in more than 1 place make sure to define them globally for ease of use
  Example
  ```js
  Object.defineProperty(Vue.prototype, '$Chartist', {
    get() {
      return Chartist;
    }
  });
  ```
* Please don't use jQuery or jQuery based plugins since there are many pure Vue alternatives
* Write unit tests for your custom components

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

[CHANGELOG]: ./CHANGELOG.md
[LICENSE]: ./LICENSE.md
[version-badge]: https://img.shields.io/badge/version-0.1.0-blue.svg
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
