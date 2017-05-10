import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Theme from './theme.scss';

export default class HeaderBar extends Component {

   render() {
      return (
         <div className={Theme.headerBar}>
            {this.props.actions}
            <div className={Theme.innerContainer}>
                  {this.props.iconChild}
                  <h4 className={Theme.title}>{this.props.title}</h4>
                  <p className={Theme.subtitle}>{this.props.subtitle}</p>
                  {this.props.tagChild}
            </div>
         </div>
      );
   }
}