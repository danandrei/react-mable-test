import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActions } from '../../actions/';
import './index.scss';

class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="login-container">
          <div className="form">
            <form className="login-form" onSubmit={this.handleSubmit}>
              <input type="text" placeholder="username" name="username" onChange={this.handleChange}/>
              <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
              <button>login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({login: userActions.login}, dispatch);
}

export default connect(null, matchDispatchToProps)(LoginPage);
