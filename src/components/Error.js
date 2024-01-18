import { useRouteError } from 'react-router-dom';

const error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h2>
        {err.status}: {err.statusText}
      </h2>
    </div>
  );
};

export default error;
