

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerUser} from '../actions/apis';
import LoginForm from '../components/LoginForm';


const mapStateToProps = (state,props)=>({
  isLogin:props.isLogin
});
const mapDispatchToProps = dispatch => 
bindActionCreators({
  registerUser
},
dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);