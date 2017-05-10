import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {List, ListItem, ListSubHeader} from 'react-toolbox/lib/list';
import { Field, reduxForm } from 'redux-form';
import Input from 'react-toolbox/lib/input';
import { IconButton } from 'react-toolbox/lib/button';
import Theme from './theme.scss';

export default class ContactCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edited: props.edited,
      email: props.email,
      address: props.address,
      phone: props.phone
    }
    console.log(this.state);
  }

  handleEditEvent() {
    this.setState({edited: !this.state.edited});
  }

    render() {

      return (
          <Card>
              <CardTitle className={Theme.cardTitle}>Kontaktuppgifter </CardTitle>
              <CardText>
              <List selectable ripple>
                <ListItem caption={this.state.address} leftIcon="place" />
                <ListItem caption={this.state.email} leftIcon="email" />
                <ListItem caption={this.state.phone} leftIcon="phone" />
              </List>
            </CardText>
          </Card>
      );
    }
}
