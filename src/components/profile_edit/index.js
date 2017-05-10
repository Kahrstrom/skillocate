import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'react-toolbox/lib/drawer';
import FontIcon from 'react-toolbox/lib/font_icon';
import { IconButton} from 'react-toolbox/lib/button';
import HeaderBar from '../headerbar';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../form_input';
import { Scrollbars } from 'react-custom-scrollbars';
import Theme from './theme.scss';

class ProfileEdit extends Component {

   render() {
      const { 
         fields: { 
            firstname, 
            lastname, 
            name,
            title,
            email,
            address,
            city,
            zipcode,
            phone,
            mobilephone,
            birthdate,
            employmentdate,
            office,
            about
         }, 
         handleSubmit, 
         reset 
      } = this.props;

      return (
         <Drawer className={Theme.drawer} active={this.props.active} onOverlayClick={this.props.handleToggle}>
            <Scrollbars
                  autoHide
                  autoHideTimeout={1000}
                  autoHideDuration={200}
                  style={{height: '100vh'}}>
               <HeaderBar
                  actions={
                   <IconButton icon='close' className={Theme.iconWhite} onClick={this.props.handleToggle}/>
                  }
                  title={this.props.profile.name}
                  subtitle={this.props.profile.title}/>
                  
               <form className={Theme.drawerForm}>
                  <Field component={FormInput} type="text" label="Förnamn" name="firstname" {...firstname} />
                  <Field component={FormInput} type="text" label="Efternamn" name="lastname" {...lastname} />
                  <Field component={FormInput} type="text" label="Titel" name="title" {...title} />
                  <Field component={FormInput} type="text" label="E-post" name="email" {...email} />
                  <Field component={FormInput} type="text" label="Telefon" name="phone" {...phone} />
                  <Field component={FormInput} type="text" label="Mobiltelefon" name="mobilephone" {...mobilephone} />
                  <Field component={FormInput} type="text" label="Stad" name="city" {...city} />
                  <Field component={FormInput} type="text" label="Gatuaddress" name="address" {...address} />
                  <Field component={FormInput} type="text" label="Postnummer" name="zipcode" {...zipcode} />
               </form>
            </Scrollbars>
         </Drawer>
      );
   }
}

ProfileEdit = reduxForm({
   form: 'ProfileEdit', 
   fields: ['firstname',
        'lastname',
        'name',
        'title',
        'email',
        'address',
        'zipcode',
        'phone',
        'mobilephone',
        'birthdate',
        'employmentdate',
        'city',
        'office',
        'about']
})(ProfileEdit)

export default connect(
  state => ({
    initialValues: state.profile.activeProfile.profile
  }),
  {}
)(ProfileEdit)