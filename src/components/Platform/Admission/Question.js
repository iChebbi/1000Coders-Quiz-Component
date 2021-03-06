import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startTest } from '../../../actions/contentActions'
class Question extends Component {
  render() {
    return (
      <div className="content">
        {this.props.content.questions && (
          <React.Fragment>
            {this.props.content.example && <h3>Example Question</h3>}
            {this.props.content.questions[this.props.content.currentQuestion]
              .image && (
              <img
                src={
                  this.props.content.questions[
                    this.props.content.currentQuestion
                  ].image
                }
                alt=""
              />
            )}
            <h4 className="question-text">
              {
                this.props.content.questions[this.props.content.currentQuestion]
                  .content
              }{' '}
            </h4>
          </React.Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    content: state.content
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startTest: () => dispatch(startTest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
