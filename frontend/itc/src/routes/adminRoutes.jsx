import Dashboard from '../pages/admin/Dashboard';
import AddCourses from '../pages/admin/AddCourses';
import AllCourses from '../pages/admin/AllCourses';
import ALogin from '../pages/admin/AdminLogin';
import AllUsers from '../pages/admin/AllUsers';
import Reports from '../pages/admin/Reports';
import Adminlayout from '../layout/adlayout/Adminlayout';
import Main from '../layout/adlayout/Main';
import Internshipreport from '../pages/admin/Internshipreport';
import AddInternship from '../pages/admin/AddInternship';

const adminRoutes = [
  {
    path: "/AdminLogin",
    element: <ALogin />,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "add-courses", element: <AddCourses /> },
      { path: "all-courses", element: <AllCourses /> },
      { path: "reports", element: <Reports /> },
      { path: "all-users", element: <AllUsers /> },
      { path: "addinternship", element:<AddInternship/>},
      { path: "internshipreport", element:<Internshipreport/>}
    ],
  },
];


export default adminRoutes;
