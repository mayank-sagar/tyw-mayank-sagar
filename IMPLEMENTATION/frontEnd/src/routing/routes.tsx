import AddBookings from "../pages/AddBookings";
import ListBookings from "../pages/Bookings";

interface RouteType {
  path: string;
  element: React.ReactNode;
}

const routers: RouteType[] = [
  {
    path: "/",
    element: <ListBookings />,
  },
  {
    path: "/add",
    element: <AddBookings />,
  },
];

export default routers;
