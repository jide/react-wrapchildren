## Wrap children

### Install
`npm install --save react-wrapchildren`

### Demo
`npm run dev` then visit http://127.0.0.1:3000

### Why ?
Sometimes you would like to put an intermediate component before a component
renders its children, e.g. to insert the Animate component around another
component's children.

### Usage
```js
import MyComponent from './MyComponent';
import Animate from 'rc-animate';
import wrapChildren from 'react-wrapchildren';

const WrappedComponent = wrapChildren(MyComponent);

<WrappedComponent something={ 'Any prop for MyComponent' } wrapper={ <Animate transitionName='fade'/> }/>
```
