import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='Keg Name' />
        <input
          type='text'
          name='Brand'
          placeholder='Keg Brand' />
        <input
          type='text'
          name='Price'
          placeholder='$0.00' />
          <input
          type='text'
          name='AlcoholContent'
          placeholder='00.00%' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;