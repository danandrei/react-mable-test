import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../../helpers/';
import { bindActionCreators } from 'redux';
import { userActions } from '../../actions/';

class Navbar extends Component {

  render() {
    const user = this.props.auth.user;
    const userInfo = user ? (
      <div>
          <span className='inline-block'> hello, <strong>{user.username}</strong>!</span>
          <a className='inline-block m-l-20' onClick={() => this.props.logout()}> Log out</a>
      </div>
    ) : (
      <a onClick={() => history.push('/login')}> Log in</a>
    );

    return (
      <div className='header'>
        <div className='container'>
          <a className="header-logo" onClick={() => history.push('/')}>
            <i className="material-icons header-logo">explore</i>
            <span className="header-logo-text">domain.co</span>
          </a>

          <div>
            <a className="inline-block" onClick={() => history.push('/shop')}>Shop</a>
            <div className="user-info inline-block m-l-15">
              {userInfo}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    auth: state.auth,
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({logout: userActions.logout}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Navbar);
