import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";

function App() {
  const AppRoutes = () => {
    // combine user + admin routes
    const routes = [...userRoutes, ...adminRoutes];
    const element = useRoutes(routes);
    return element;
  };

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
