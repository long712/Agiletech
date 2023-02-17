import Home from "../home";
import Login from "../singin";
import Profile from "../profile";

export const ROUTERS = [
  {
    id: 1,
    navigate: "/home",
    element: <Home />,
  },
  {
    id: 2,
    navigate: "/login",
    element: <Login />,
  },
  {
    id: 3,
    navigate: "/profile",
    element: <Profile />,
  },
];
