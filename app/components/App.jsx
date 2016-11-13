import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export class App extends React.Component {
 render () {
  const {dispatch, showMessage} = this.props;

  var renderMessage = () => {
   if (showMessage) {
    return <h3>Welcome to the boilerplate!</h3>;
   }
  }

  return (
   <div>
    <h1>ReactJS + Redux Boilerplate</h1>
     <div>
      <label>
       <input type="checkbox"
        ref="showMessage"
        checked={showMessage}
        onChange={() => {
         dispatch(actions.toggleMessage());
        }}/>
       Show Welcome Message
      </label>
      {renderMessage()}
     </div>
   </div>
  );
 }
};

export default Redux.connect(
 (state) => {
  return state;
 }
)(App);
