import {
  LoginPage,
  Category
} from '../../container/pages';


const AppRoutes = [
  {
    id: 1,
    path: '/auth/admin/login',
    component: LoginPage,
    exact: true
  },
  {
    id: 2,
    path: '/auth/admin/category',
    component: Category,
    exact: true
  }
]


export default AppRoutes;