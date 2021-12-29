import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import HomePage from "../HomePage";
import PeoplePage from "../PeoplePage/PeoplePage";
import routesConfig from "../../routes/routesConfig";

import styles from "./App.module.css";
import Header from "../../components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />

          <Routes>
            {routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.component}
                exact={route.exact}
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
