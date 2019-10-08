import React from 'react';
import configureStore from '../login-form/store';
import Immutable from 'immutable';
import {USER_STATE} from '../config/constants';
import RootRouter from './RootRouter';

const initialState = {users:[{id:0, username: 'chriswang', password: 'abc123'}]};


const persistedState = { [USER_STATE]: initialState };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = configureStore(initialState);
  }

  componentDidMount() {
    // this.context.registerStore(this.store);
  }

  componentWillUnmount() {
    // unregister store
  }
  render() {
    // return <p>RootRouter</p>; 
    console.log('rendering App with store=',this.store);
    return <RootRouter store={this.store} />;
  }
}
export default App;
