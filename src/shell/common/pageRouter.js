import React from 'react';
import LoginFormCtn from '../../login-form/containers/LoginFormCtn';
import BasicLayoutCtn from '../../login-form/containers/BasicLayoutCtn';
import BasicLayoutCtn2 from '../../login-form/containers/BasicLayoutCtn2';
import BasicLayout from '../../login-form/components/BasicLayout';
import LoadableCpnt from '../../utils/LoadableCpnt';

const routerConfig = {
  '/login': {
    component: LoadableCpnt({
      loader: () => import('../../login-form/containers/LoginFormCtn')
    })
  },
  '/home': {
    component: LoadableCpnt({
      loader: () => import('../../login-form/containers/BasicLayoutCtn')
    })
  }
  // ,
  // '/': {
  //   component: LoadableCpnt({
  //     loader: () => import('../../login-form/containers/BasicLayoutCtn2')
  //   })
  // }
}
export default routerConfig;