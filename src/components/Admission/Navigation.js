import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  nextQuestion,
  previousQuestion,
  startTest
} from '../../actions/contentActions'

class Choices extends Component {
  render() {
    return (
      <div className="navigation">
        {!this.props.content.done && (
          <React.Fragment>
            {this.props.content.example &&
              this.props.content.currentQuestion + 1 &&
              this.props.content.questions.length &&
              this.props.content.currentQuestion + 1 ===
                this.props.content.questions.length && (
                <div className="btn btn-start" onClick={() => this.props.startTest()}>
                  Start
                </div>
              )}
            {this.props.content.questions &&
              this.props.content.currentQuestion + 1 !==
                this.props.content.questions.length && (
                <React.Fragment>
                  {this.props.content.currentQuestion !== 0 && (
                    <div
                      className="btn btn-nav"
                      onClick={() =>
                        this.props.previousQuestion(this.props.content)
                      }
                    >
                      Back
                    </div>
                  )}
                  <div
                    className="btn btn-nav"
                    onClick={() => this.props.nextQuestion(this.props.content)}
                  >
                    Next
                  </div>
                </React.Fragment>
              )}
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
    previousQuestion: content => dispatch(previousQuestion(content)),
    nextQuestion: content => dispatch(nextQuestion(content)),
    startTest: () => dispatch(startTest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Choices)
