import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ChooseRegistration } from 'components/ChooseRegistration/ChooseRegistration';

const RedirectRegistrationPage = () => {
  return (
    <>
      <ChooseRegistration />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default RedirectRegistrationPage;
