import React from 'react';
import { Provider } from 'react-redux';
import MainLayout from './login-form/components/MainLayout';
import configureStore from './login-form/store';
import Immutable from 'immutable';
import {USER_STATE} from './config/constants';

const initialState = Immutable.fromJS({
  [USER_STATE]: {
    users:{}
  }
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = configureStore(undefined, initialState);
  }

  componentDidMount() {
    // this.context.registerStore(this.store);
  }

  componentWillUnmount() {
    // unregister store
  }
  render() {
    return (
        <Provider store={this.store}>
          <MainLayout/>
        </Provider>
    );
  }
}
export default App;
