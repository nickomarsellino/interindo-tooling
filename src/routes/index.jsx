import {
  HomePage,
  DesignSystem,
  AboutUs,
  Product
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
  }
]


export default AppRoutes;