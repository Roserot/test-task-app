import * as React from 'react';

const { lazy, Suspense } = React;

export default () => {
  const C = lazy(() => import('./Login'));

  return (
    <Suspense fallback={null}>
      <C />
    </Suspense>
  );
};
