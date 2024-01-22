import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DestinationHorseShoeBayPeelIsland from './pages/DestinationHorseShoeBayPeelIsland';
import DestinationPlatypusBayPeelIsland from './pages/DestinationPlatypusBayPeelIsland';
const RoutesComponent  = () => {
    return (
      <Routes >
        <Route path="/" element={<React.Suspense fallback={<div>Loading...</div>}><HomePage /></React.Suspense>} />
        <Route path="/destination-horseshoe-bay-peel-island" element={<React.Suspense fallback={<div>Loading...</div>}><DestinationHorseShoeBayPeelIsland /></React.Suspense>} />
        <Route path="/destination-platypus-bay-peel-island" element={<React.Suspense fallback={<div>Loading...</div>}><DestinationPlatypusBayPeelIsland /></React.Suspense>} />
      </Routes>
    );
  };

  export default RoutesComponent ;
