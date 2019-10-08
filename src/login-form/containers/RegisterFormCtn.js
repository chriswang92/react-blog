

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerUser} from '../actions/apis';
import LoginOrRegisterForm from '../components/LoginOrRegisterForm';


const mapStateToProps = (state,props)=>({
  isLogin:false
});
const mapDispatchToProps = dispatch => 
bindActionCreators({
  registerUser
},
dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginOrRegisterForm);