import React, { Component } from 'react';
import ToolBar from './toolbar/index';
import { Scrollbars } from 'react-custom-scrollbars';
import '../styles/main.scss';
import 'react-toolbox/lib/commons.scss';           // Import common styles

export default class App extends Component {
  render () {
    return (
      <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          style={{height: '100vh'}}> 
        <ToolBar />
        {this.props.children}
      </Scrollbars>

    );
  }
}
