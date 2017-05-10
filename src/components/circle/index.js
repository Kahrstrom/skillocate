import React from 'react';
import Theme from './theme.scss';
import FontIcon from 'react-toolbox/lib/font_icon';

const Circle = ({ child }) => {
   if(child) {
      return (
         <div className={Theme.circle}>
            {child}
         </div>
      )
   }
   return (
      <div className={Theme.circle}>
         <FontIcon className={Theme.icon} value='person_pin' />
      </div>
   )

};

export default Circle;