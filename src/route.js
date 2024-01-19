import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
const RoutesComponent  = () => {
    return (
      <Routes >
        <Route path="/" element={<React.Suspense fallback={<div>Loading...</div>}><HomePage /></React.Suspense>} />
      </Routes>
    );
  };

  export default RoutesComponent ;
