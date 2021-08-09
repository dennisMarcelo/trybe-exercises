import React from 'react';
import {connect} from 'react-redux';
import {addAction} from '../redux/action'

class ButtonClicks extends React.Component {
  render() {
    const {add} = this.props;
    return (
      <div>
          <button onClick={add}>add</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addAction()),
})

export default connect(null, mapDispatchToProps)(ButtonClicks);