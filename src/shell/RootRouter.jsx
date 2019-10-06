import React from 'react';
import {Provider} from 'react-redux';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import routerConfig from './common/pageRouter';
import NotFound from './routes/Exception/404';

import LoginForm from './../login-form/containers/LoginFormCtn';
import BasicLayout from './../login-form/containers/BasicLayoutCtn';

function RootRouter({store}) {
  const LoginLayout = routerConfig['/login'].component;
  const BasicLayout = routerConfig['/home'].component;

  return (
    <Provider store={store}>
      <ConfigProvider locale={enUS}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginLayout} />
            <Route exact path={["/home", "/"]} component={BasicLayout} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  );
}

export default RootRouter;