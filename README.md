# tamvuean-from-scratch
A simple and minimalist boilerplate for vue.js aplication from scratch. It's built using Vue 2.5 + Webpack 4 + vue-loader 14.
This repo is created for educational purposes, which you can try ro make your own boilerplate following the steps in the commit history.

## Dependencies 

```json
"dependencies": {
  "vue": "^2.5.16",
  "vue-router": "^3.0.1"
},
"devDependencies": {
  "vue-loader": "^14.2.2",
  "vue-template-compiler": "^2.5.16",
  "webpack": "^4.4.1",
  "webpack-cli": "^2.0.13",
  "webpack-dev-server": "^3.1.1"
}
```

## Files and Directories Structures

```bash
.
├── index.html
├── package.json
├── src
│   ├── App.vue
│   ├── components
│   │   └── README.md
│   ├── main.js
│   ├── pages
│   │   ├── Home.vue
│   │   └── README.md
│   └── router.js
├── webpack.config.js
└── yarn.lock
```

## NPM Scripts

```bash
npm start #! serving app with webpack-dev-server
npm run build #! generating file app.bundle.js
```

Presented to you by: Septian A Tama - tamatamvan <septian.a.tama@gmail.com>
