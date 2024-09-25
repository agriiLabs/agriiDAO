import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Loader from './Loader';
import DaoBottombar from './DaoBottomBar';

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, [location.pathname]); 

  return (
    <div id="wrapper">
        {loading && <Loader />}
        <div className="content-page">
          <div className="content">
              <Outlet />
          </div>
        </div>
        
        <DaoBottombar />
    </div>
  );
};

export default Layout;
