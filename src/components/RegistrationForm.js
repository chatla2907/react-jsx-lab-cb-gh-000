import React from 'react';

class RegistrationForm extends React.Component {
  render(){
    return (
        <form>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <button type="submit"></button>
        </form>
    );
  }
}
export default RegistrationForm;
