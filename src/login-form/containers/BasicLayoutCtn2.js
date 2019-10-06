

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerUser} from '../actions/apis';
import BasicLayout2 from '../components/BasicLayout2';


const mapStateToProps = null;
const mapDispatchToProps = null;
// dispatch => 
// bindActionCreators({
//   registerUser
// },
// dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout2);