/*global document:false*/
import React from 'react';
import Animate from 'rc-animate';
import { Region, makeRegion } from 'react-region';

import Badge from './Badge';
import wrapChildren from '../src';

const WrappedRegion = makeRegion({
  Badge
}, wrapChildren(Region));

var key = 0;

class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      region: []
    };
  }

  handleClick() {
    const item = {
      type: 'Badge',
      props: {
        key: key,
        test: 'This is an example component',
        className: 'some-class'
      }
    };

    this.setState({
      region: [...this.state.region].concat(item)
    });

    key++;
  }

  render() {
    return (
      <div>
        <button onClick={ ::this.handleClick }>Push</button>
        <WrappedRegion className='myregion' region={ this.state.region } wrapper={ <Animate transitionName='fade'/> }/>
      </div>
    );
  }
}

const content = document.getElementById('content');

React.render(<App/>, content);
