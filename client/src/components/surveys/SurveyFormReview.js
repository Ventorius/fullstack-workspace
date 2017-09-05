import React, { Component } from 'react'
import { connect } from 'react-redux'
import formFields from './formFields'
import * as actions from '../../actions/'
import {withRouter} from 'react-router-dom'

class SurveyFormReview extends Component {

  reviewFields = formFields.map(({label, name}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {this.props.formValues[name]}
        </div>
      </div>
    )
  })

  render () {
    return (
      <div>
        <h5>Please confirm your entries</h5>
        {this.reviewFields}
        <button
          className="yellow white-text darken-3 btn-flat"
          onClick={this.props.onCancel}>
          Back
        </button>
        <button className="green btn-flat white-text right"
                onClick={() => {this.props.submitSurvey(this.props.formValues, this.props.history)}}>Send survey
          <i className="material-icons right">email</i>
        </button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))
