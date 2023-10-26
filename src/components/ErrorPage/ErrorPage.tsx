import {isRouteErrorResponse, useRouteError} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>

        {isRouteErrorResponse(error) &&
            <div>
                <p>{error.statusText}</p>
                <p><i>{error.data.message}</i></p>
            </div>
        }
      </div>
    </>
  );
}

export default ErrorPage;