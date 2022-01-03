import PeoplePage from "../containers/PeoplePage/PeoplePage";
import HomePage from "../containers/HomePage";
import NotFoundPage from "../containers/NotFoundPage";
import PersonPage from "../containers/PersonPage/PersonPage";
import FavoritesPage from "../containers/FavoritesPage/FavoritesPage";


const routesConfig = [
  {
    path: "/",
    exact: true,
    element: <HomePage />,
  },

  {
    path: "/people/",
    exact: false,
    element: <PeoplePage />,
  },

  {
    path: "/favorites/",
    exact: false,
    element: <FavoritesPage />,
  },

  {
    path: "/people/:id",
    exact: true,
    element: <PersonPage />,
  },

  {
    path: "/not-found",
    exact: true,
    element: <NotFoundPage />,
  },

  {
    path: "*",
    exact: false,
    element: <NotFoundPage />,
  },
];

export default routesConfig;
