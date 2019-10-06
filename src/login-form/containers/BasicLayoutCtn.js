

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerUser} from '../actions/apis';
import BasicLayout from '../components/BasicLayout';


const mapStateToProps = null;
const mapDispatchToProps = null;
// dispatch => 
// bindActionCreators({
//   registerUser
// },
// dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout);