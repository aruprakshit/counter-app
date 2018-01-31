import { connect } from 'react-redux';

import Counter from '../components/Counter';
import { increment, decrement } from '../actionsCreators';

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    value: state.counter
  };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    onIncrement: (val) => dispatch(increment(val)),
    onDecrement: (val) => dispatch(decrement(val))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
