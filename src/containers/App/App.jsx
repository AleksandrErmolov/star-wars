import { BrowserRouter, Route, Routes, Router } from "react-router-dom";

import routesConfig from "../../routes/routesConfig";

import styles from "./App.module.css";
import Header from "../../components/Header";

function App() {
  return (
    <div>
      <BrowserRouter  basename={`/star-wars/`}>
        <div className={styles.wrapper}>
          <Header />
          <Routes>
            {routesConfig.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                  exact={route.exact}
                />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
