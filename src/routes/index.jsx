import {
  HomePage,
  DesignSystem,
  AboutUs,
  ContactUs,
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
  },
  {
    id: 5,
    path: '/contact-us',
    component: ContactUs,
    exact: true
  }
]


export default AppRoutes;