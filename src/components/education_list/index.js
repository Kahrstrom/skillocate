import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {List, ListItem, ListSubHeader} from 'react-toolbox/lib/list';
import { IconButton } from 'react-toolbox/lib/button';
import Avatar from 'react-toolbox/lib/avatar';
import Theme from './theme.scss';

export default class EducationList extends Component {
   renderList() {
      return this.props.educations.map(education => {
         return <ListItem 
                  caption={`${education.education}, ${education.scope}`} 
                  legend={education.school}
                  leftIcon={<Avatar className={Theme.accentIcon} icon="school" />}
                  rightActions={[<IconButton className={Theme.editButton} icon='create' flat primary/>]}
               />
      })
   }

   render() {
      return (
         <Card>
            <CardTitle className={Theme.cardTitle}>Utbildningar</CardTitle>
            <CardText>
               <List selectable ripple>
                  {this.renderList()}
               </List>
            </CardText>
         </Card>
      );
   }
}
