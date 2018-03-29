import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActions } from '../../actions/';
import LoginForm from './LoginForm';
import { SubmissionError } from 'redux-form';


class LoginPage extends Component {

  handleSubmit (values) {
    return this.props.login(values.username, values.password)
    .catch(error => {
      throw new SubmissionError({
        _error: 'Invalid user credentials.'
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="login-container">
          <div className="form">
            <LoginForm onSubmit={this.handleSubmit.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({login: userActions.login}, dispatch);
}

function mapStateToProps (state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginPage);
