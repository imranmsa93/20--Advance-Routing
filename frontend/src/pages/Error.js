import MainNavigation from "../components/MainNavigation";
import  PageContent  from "../components/PageContent";
import { useRouteError } from "react-router-dom";
function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
    <MainNavigation />
      <PageContent title={`Oops! ${error.status} Error`}>
        <p> {error && error.statusText ?  error.statusText : 'An error occurred'}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
