import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'
import Timer from './Timer'

class CookMain extends Component {
  state = {
    hasStartWork: false,
    isFinishedWork: false
  }

  handleWorkingState = () => {
    const {hasStartWork} = this.state
    !hasStartWork
      ? this.setState({
          hasStartWork: true
        })
      : this.setState({
          isFinishedWork: true
        })
  }

  render() {
    const {hasStartWork, isFinishedWork} = this.state

    return (
      <main className="cook__mainPage">
        <Button primary onClick={this.handleWorkingState}>
          {!hasStartWork ? 'Start work' : 'Finish work'}
        </Button>
        {isFinishedWork ? <Button primary>Day report</Button> : ''}
        <Button className="timer__work-time">
          Time since start work: {hasStartWork ? (
            <Timer parentState={this.state} />
          ) : (
            '00:00:00'
          )}
        </Button>
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  null,
  mapDispatchToProps
)(CookMain)
