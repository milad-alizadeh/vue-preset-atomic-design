# vue-preset-atomic-design

vue-preset-atomic-design is an opinionated Vue CLI 3.0 preset for creating large scale Web Apps using Atomic Design methodology. It includes the following plugins:

* [vue-cli-plugin-scss-base](https://github.com/milad-alizadeh/vue-cli-plugin-scss-base)
* [vue-cli-plugin-atomic-design](https://github.com/milad-alizadeh/vue-cli-plugin-atomic-design)
* [vue-cli-plugin-atomic-design-components](https://github.com/milad-alizadeh/vue-cli-plugin-atomic-design-components)
* [@vue/cli-plugin-pwa](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa)
* [@vue/cli-plugin-unit-jest](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest)
* [@vue/cli-plugin-eslint](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint) - Standard Config
* [vue-router](https://github.com/vuejs/vue-router)
* [vuex](https://github.com/vuejs/vuex)
* CSS Preprocessor - SCSS

For information about the folder structure and atomic design please refer to [vue-cli-plugin-atomic-design documentation](https://github.com/milad-alizadeh/vue-cli-plugin-atomic-design).

## How to install

You first need to install Vue Cli 3

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

The you can create the boilerplate by typing the following command:

```
vue create --preset milad-alizadeh/vue-preset-atomic-design my-project-folder

```

## Commands

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Generate a static version of Storybook
```
yarn run build:storybook
```

### Runs Storybook on dev server
```
yarn run serve:storybook
```

### Run your unit tests
```
yarn run test:unit
```

### Lints and fixes files
```
yarn run lint
```


## LICENSE
[MIT](https://raw.githubusercontent.com/milad-alizadeh/vue-preset-atomic-design/master/LICENSE)
