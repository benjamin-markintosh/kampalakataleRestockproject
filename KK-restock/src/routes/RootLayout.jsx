import { Outlet } from "react-router-dom";
import NavClientside from "../components/NavClientside";

function RootLayout() {
  return (
    <div>
      <NavClientside />
      <Outlet />
    </div>
  );
}
export default RootLayout;
