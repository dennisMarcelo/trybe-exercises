import React from 'react';
import {connect} from 'react-redux';

class NumberClicks extends React.Component {
  render() {
    const {counter} = this.props;
    return (<div>counter: {counter}</div>)
  }
}

const mapStateToProps = (state) => ({
  counter: state.addReducer.counter,
})

export default connect(mapStateToProps)(NumberClicks);