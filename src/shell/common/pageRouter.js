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
  },
  '/register': {
    component: LoadableCpnt({
      loader: () => import('../../login-form/components/MainLayout')
    })
  },
  '/game': {
    component: LoadableCpnt({
      loader: () => import('../../game-tictactoe/GamePage')
    })
  }
}
export default routerConfig;