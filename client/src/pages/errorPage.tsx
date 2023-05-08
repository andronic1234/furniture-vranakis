import { Helmet } from "react-helmet-async";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  let errorMessage = "Unknown error";

  return (
    <div>
      <div className="text-center flex bg-secondary dark:bg-darkSecondary dark:text-txtsecondary text-black items-center justify-center h-[calc(100vh-65px)] w-screen flex-col">
        <Helmet>
          <title>Σφάλμα</title>
        </Helmet>
        <h1 className="text-6xl font-bold m-3">Oops!</h1>
        <p className="text-xl m-1">Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="text-accent font-bold">
            {(error as { status: number }).status ||
              (error as { data: string }).data ||
              errorMessage}
          </i>
        </p>
      </div>
    </div>
  );
}
