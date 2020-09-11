import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

function NewKegForm(props){
  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({Name: event.target.name.value, Brand: event.target.brand.value, Price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Create"
      />
    </React.Fragment>
  );
}

newKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;