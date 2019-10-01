

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerUser} from '../actions/apis';
import LoginForm from '../components/LoginForm';


const mapStateToProps = null;
const mapDispatchToProps = dispatch => 
bindActionCreators({
  registerUser
},
dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);