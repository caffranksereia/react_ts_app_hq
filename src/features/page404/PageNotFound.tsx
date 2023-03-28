import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function Page404() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Ops!!</h1>
      <p>This page not exist.</p>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
