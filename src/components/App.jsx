import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from './utils/Box';

export const App = () => {
  // const isRefreshing = useSelector()
  // const dispatch = useDispatch();

  //     useEffect(() => {
  //         dispatch();
  //     }, [dispatch]);

  return (
    <Box>
      <Routes>
        <Route path="/" element={<h1>Coming soon</h1>} />
      </Routes>
    </Box>
  );
};
