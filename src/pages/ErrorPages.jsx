import { useRouteError } from "react-router-dom";

const ErrorPages = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col ">
      <h1 className="text-3xl font-bold">Opssssss</h1>
      <p className="my-5 text-xl">Sorry, Un unexpected error has occured</p>
      <p className="text-lg">{error.statusText || error.message} </p>
    </div>
  );
};

export default ErrorPages;
