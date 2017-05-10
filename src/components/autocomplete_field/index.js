import React, {Component} from 'react';
import FormAutoComplete from '../form_autocomplete';
import Field from 'redux-form';

export class AutoCompleteField extends Component {
  state = {
    value: ''
  }

 

  render () {
    console.log(this.props)
    return (<div>hej</div>);
    return (
      <Field
        {...this.props}
        value={this.state.value}
        onChangeAction={value => {
          this.setState({ value })
        }}
        component={FormAutoComplete}
      />
    )
  }
}