import NotFoundPage from "views/NotFound";

// private components routes
const ComponentRoutes = [
  // {
  //   path: "/app/example",
  //   exact: true,
  //   name: "Example",
  //   component: Example,
  // },
  {
    path: "/app/page-not-found",
    name: "404",
    component: NotFoundPage,
  },
];

export default ComponentRoutes;
