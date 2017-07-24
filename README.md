PVI Solutions Website 
==========
> React + Redux + React Router Starter Kit: (https://mackentoch.github.io/react-redux-immutable-webpack-starter/#/)
> Based on: https://html5up.net/forty

## Detailed Content

**Front:**
- React JS (15.x - [github :link:](https://github.com/facebook/react))
- Redux (*as you application grows managing state will be a serious concern, save pain with Redux*)
- React-Redux (*Redux is not specific to ReactJS, you could easily use it with Angular2 for instance*)
- Immutable JS
- redux-immutable
- redux-devtools-extension ([github :link:](https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension))
- React-Router-Redux (*previously named react-simple-router*)
- react-router (4.x- [github :link:](https://github.com/reactjs/react-router))
- font-awesome ([github :link:](https://github.com/FortAwesome/Font-Awesome))
- animate.css ([github :link:](https://github.com/daneden/animate.css))
- classnames ([github :link:](https://github.com/JedWatson/classnames))
- react-motion ([github :link:](https://github.com/chenglou/react-motion))
- Webpack 2.x ([github :link:](https://github.com/webpack/webpack))
- babel 6+ ([github :link:](https://github.com/babel/babel))
- axios ([github :link:](https://github.com/mzabriskie/axios))

**Tool chain:**
- babel 6+
- eslint
- webpack 2.x
- hot reload
- loaders
  - `js` / `jsx`
  - sass
  - css
  - json
  - images formats
  - svg and fonts formats
- postcss

**tests:**
- Mocha
- Chai (*+ dirty-chai*)
- enzyme
- Sinon
- nyc


## Usage

### Install

```bash
npm install
```
### bundle dev mode (*+ redux-devtools*)

*General case:*
```bash
npm run dev
```

### dev : hot reload mode (*+ redux-devtools*)

*General case:*

```bash
npm run start
```

### tests

*General case:*
```bash
npm run test
```

### bundle production mode

*General case:*
```bash
npm run prod
```

### serve bundles (for dev or prod bundles)
With server hot reload (*nodemon*):
*General case:*
```bash
npm run serve-dev
```

Without server hot reload:
*General case:*
```bash
npm run serve-prod
```
