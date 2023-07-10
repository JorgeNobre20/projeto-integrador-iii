import {
  BrowserRouter,
  Routes as Router,
  Route
} from "react-router-dom";

import { Login, PasswordRecovery, Register } from "./pages";
 
export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/login" Component={Login} />Z
        <Route path="/register" Component={Register} />Z
        <Route path="/password-recovery" Component={PasswordRecovery} />Z
      </Router>
    </BrowserRouter>
  );
}