import {
  HomePage,
  DesignSystem
} from '../container/pages';


const AppRoutes = [
  {
    id: 1,
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    id: 2,
    path: '/design-system',
    component: DesignSystem,
    exact: true
  }
]


export default AppRoutes;