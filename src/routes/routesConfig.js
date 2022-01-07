import PeoplePage from "../containers/PeoplePage/PeoplePage";
import HomePage from "../containers/HomePage";
import NotFoundPage from "../containers/NotFoundPage";
import PersonPage from "../containers/PersonPage/PersonPage";
import FavoritesPage from "../containers/FavoritesPage/FavoritesPage";
import ErrorMessage from "../components/ErrorMessage";
import SearchPage from "../containers/SearchPage/SearchPage";


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
    path: "/fail",
    exact: false,
    element: <ErrorMessage />,
  },

  {
    path: "/search",
    exact: true,
    element: <SearchPage />,
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
