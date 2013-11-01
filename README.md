typeSC
=====

> This is TypeScript & Sass/Compass Project Template.

## Getting Started

> Install bower

```shell
% npm install -g bower
```

Grunt `~0.4.0`

> Install Grunt Plugin

* grunt-typescript
* grunt-contrib-watch
* grunt-contrib-uglify
* grunt-contrib-compass
* grunt-contrib-concat
* grunt-contrib-connect
* grunt-contrib-copy
* grunt-contrib-clean

```shell
% npm install
```

> [option] Install jquery of `lib` directory

```shell
% bower install
```

### Directory

#### Dev

```shell
.ts ... src/**/*.ts
.scss ... src/sass/**/*.scss
```

#### publish

```shell
.js ... public/typesc.js, public/typesc.min.js
.css ... public/css/typesc.css
```

### Command

#### compile & compress

```shell
% grunt
```

#### watch

```shell
% grunt watch
```

#### server
```shell
% grunt server
Running "connect:server" (connect) task
Waiting forever...
Started connect web server on localhost:8000.
```

&copy; funnythingz
