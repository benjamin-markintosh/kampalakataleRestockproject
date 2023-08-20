import { useRouteError, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

function ErrorPageAdmin() {
  const error = useRouteError();
  const navigate = useNavigate();

  function goBack() {
    navigate("/admin");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-kkorange mb-4">--- Oooops</h1>
        <h2 className="text-2xl text-gray-700 mb-6">
          {" "}
          Page {error.statusText}
        </h2>
        <Button
          onClick={goBack}
          className="bg-kkorange hover:bg-red-700 text-white"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}
export default ErrorPageAdmin;
