// src/routes/userRoutes.js
import Home from '../pages/user/Home';
import Professionalcourses from '../pages/user/Professionalcourses';
import Services from '../pages/user/Services';
import Shortcourses from '../pages/user/Shortcourses';
import Aboutus from '../pages/user/Aboutus';
import Studentcorner from '../pages/user/Studentcorner';
import Offers from '../pages/user/Offers';
import Schoolcourses from '../pages/user/Schoolcourses';
import School10th from '../pages/user/School10th';
import Sc49 from '../pages/user/Sc49';
import Sc12th from '../pages/user/Sc12th';
import Earlyearning from '../pages/user/Earlyearning';
import Examsupport from '../pages/user/Examsupport';
import Careercouns from '../pages/user/Careercouns';
import Skilldev from '../pages/user/Skilldev';
import Kidscorner from '../pages/user/Kidscorner';
import Vacationcourses from '../pages/user/Vacationcourses';
import Teacherscorner from '../pages/user/Teacherscorner';
import Mainlayout from '../layout/ulayout/Mainlayout';
import OurHistory from '../pages/user/OurHistory';

const userRoutes = [
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      { index: true, element: <Home /> }, 
      { path: "professionalcourses", element: <Professionalcourses /> },
      { path: "services", element: <Services /> },
      { path: "shortcourses", element: <Shortcourses /> },
      { path: "aboutus", element: <Aboutus /> },
      { path: "studentcorner", element: <Studentcorner /> },
      { path: "offers", element: <Offers /> },
      { path: "schoolcourses", element: <Schoolcourses /> },
      {path:"10thstd", element: <School10th/>},
      {path:"12thstd", element: <Sc12th/>},
      {path:"4-9std", element: <Sc49/>},
      {path:"earlyearning", element: <Earlyearning/>},
      {path:"examsupport", element: <Examsupport/>},
      { path: "careercounselling", element: <Careercouns /> },
      { path: "skilldevelopment", element: <Skilldev /> },
      { path: "kidscorner", element: <Kidscorner /> },
      { path: "vacationcourses", element: <Vacationcourses /> },
      { path: "OurHistory", element: <OurHistory /> },

    ],
  },
];

export default userRoutes;
