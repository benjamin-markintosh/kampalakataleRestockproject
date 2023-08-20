import { Outlet } from "react-router-dom";
import NavAdmin from "../components/NavAdmin";
import Alert from "../components/alerts/Alert";

function AdminLayout() {
  return (
    <div className="flex ">
      <NavAdmin />
      <Alert />
      <Outlet />
    </div>
  );
}
export default AdminLayout;
