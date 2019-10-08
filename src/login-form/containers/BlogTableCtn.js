

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerUser} from '../actions/apis';
import BlogTable from '../components/BlogTable';
import {userSelector} from '../selectors/userSelector';

const mapStateToProps = (state, props) => ({
  // users: userSelector(state)
});
const mapDispatchToProps = null;
// dispatch => 
// bindActionCreators({
// },
// dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BlogTable);