import NavAdmin from "../components/NavAdmin";
import Deleteuser from "../components/forms/Deleteuser";

function DeleteProfile() {
  return (
    <div className="flex w-full ">
      <NavAdmin />

      <Deleteuser />
    </div>
  );
}

export default DeleteProfile;
