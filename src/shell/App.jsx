import React from 'react';
import configureStore from '../login-form/store';
import Immutable from 'immutable';
import {USER_STATE} from '../config/constants';
import RootRouter from './RootRouter';

const initialState = Immutable.Map({
  user: {id:0, name: 'chris', username: 'chriswang', password: 'abc123'}
});


const persistedState = { [USER_STATE]: initialState };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = configureStore(/*undefined,*/ persistedState);
  }

  componentDidMount() {
    // this.context.registerStore(this.store);
  }

  componentWillUnmount() {
    // unregister store
  }
  render() {
    // return <p>RootRouter</p>; 
    return <RootRouter store={this.store} />;
  }
}
export default App;
