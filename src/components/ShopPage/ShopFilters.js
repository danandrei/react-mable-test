import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const ShopFilters = props => {
  return (
    <div className="filters-wrap">
      <h4 className='inline-block'>Browse useless hammers</h4>
      <form className='inline-block'>
        <Field className='form-control' name='sort' component='select'>
          <option disabled value="" selected> Sort by:</option>
          <option value='asc'>Ascending</option>
          <option value='dsc'>Descending</option>
        </Field>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'login',
})(ShopFilters);
