import userRoutes from './userRoutes';
import adminRoutes from './adminRoutes';
import Mainlayout from '../layout/ulayout/Mainlayout';
import Adminlayout from '../layout/adlayout/Adminlayout';

const routes = [
  {
    path: '/',
    element: <Mainlayout/>,
    children: userRoutes,
  },
  {
    path: '/admin',
    element: <Adminlayout />,
    children: adminRoutes,
  }
];

export default routes;
