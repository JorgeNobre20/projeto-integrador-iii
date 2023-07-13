import {
  BrowserRouter,
  Routes as Router,
  Route
} from "react-router-dom";

import { Home, Login, MyPublishedJobs, People, PublishJob, Register } from "./pages";
 
type RouteProps = {
  path: string;
  component: JSX.Element;
  index?: boolean;
}

const CONTRACTING_PROFESSIONAL_ROUTES: RouteProps[] = [
  {
    component: <Home />,
    path: "/",
    index: true
  },
  {
    component: <People />,
    path: "/people"
  }
];

const HIRING_PROFESSIONAL_ROUTES: RouteProps[] = [
  {
    component: <MyPublishedJobs />,
    path: "/my-published-jobs",
  },
  {
    component: <PublishJob />,
    path: "/publish-job",
  },
];


const AUTHENTICATION_ROUTES: RouteProps[] = [
  {
    component: <Login />,
    path: "/login"
  },
  {
    component: <Register />,
    path: "/register"
  }
];

const ROUTES: RouteProps[] = [
  ...CONTRACTING_PROFESSIONAL_ROUTES,
  ...HIRING_PROFESSIONAL_ROUTES,
  ...AUTHENTICATION_ROUTES
];

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        {ROUTES.map((route) => (
          <Route 
            index={route.index} 
            Component={() => route.component} 
            path={route.path} 
            key={route.path}
          />
        ))} 
      </Router>
    </BrowserRouter>
  );
}