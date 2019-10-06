

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerUser} from '../actions/apis';
import Content from '../components/Content';
import {userSelector} from '../selectors/userSelector';

const mapStateToProps = (state, props) => ({
  users: userSelector(state, props)
});
const mapDispatchToProps = dispatch => 
bindActionCreators({
},
dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Content);