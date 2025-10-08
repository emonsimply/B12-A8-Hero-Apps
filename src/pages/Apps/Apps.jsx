import React from 'react';
import useApps from '../../hooks/useApps';
import App from './App';

const Apps = () => {
  const {apps} = useApps();
  return (
    <div className=" max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8 p-4">
      {apps.map(app => <App key={app.id} app={app}></App>)}
    </div>
  );
};

export default Apps;