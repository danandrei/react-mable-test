import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = props => {
  const { error, handleSubmit, submitting } = props;
  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <Field
        name='username'
        component='input'
        type='text'
        placeholder='username'
      />
      <Field
        name='password'
        component='input'
        type='password'
        placeholder='password'
      />
      {error && <p className='error'>{error}</p>}
      <button type='submit' disabled={submitting}>Log In</button>
    </form>
  );
};

export default reduxForm({
  form: 'login',
})(LoginForm);
