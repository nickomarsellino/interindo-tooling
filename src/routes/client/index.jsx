import {
  HomePage,
  DesignSystem,
  AboutUs,
  Product,
  LoginPage,
  Dashboard,
  DetailProduct
} from '../../container/pages';

import { Category} from '../../container/pages';

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
  },
  {
    id: 3,
    path: '/our-product',
    component: Product,
    exact: true
  },
  {
    id: 4,
    path: '/about-us',
    component: AboutUs,
    exact: true
  },
  {
    id: 5,
    path: '/auth/admin/login',
    component: LoginPage,
    exact: true
  },
  {
    id: 6,
    path: '/auth/admin/dashboard',
    component: Dashboard,
    exact: true
  },
  {
    id: 7,
    path: '/detail-product/:productName',
    component: DetailProduct,
    exact: true
  },
  {
    id: 8,
    path: '/auth/admin/category',
    component: Category,
    exact: true
  },
]


export default AppRoutes;