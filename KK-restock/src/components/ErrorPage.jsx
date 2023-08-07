import { useRouteError } from "react-router-dom";
import { Button } from "@mantine/core";

 function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    function goBack() {
        navigate('..')
    }

  return (
    <div>
      <h1>---Oooops</h1>
      <h1>{error.statusText}</h1>
      <Button>
        Go Back
      </Button>
    </div>
  )
}
export default ErrorPage;